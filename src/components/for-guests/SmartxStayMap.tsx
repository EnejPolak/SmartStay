'use client';

import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_CONFIG } from '@/config/mapbox';

interface StayData {
  id: string;
  title: string;
  city: string;
  country: string;
  note: string;
  url: string;
}

interface GeoJSONFeature {
  type: 'Feature';
  geometry: {
    type: 'Point';
    coordinates: [number, number];
  };
  properties: StayData;
}

interface StaysGeoJSON {
  type: 'FeatureCollection';
  features: GeoJSONFeature[];
}

interface SmartxStayMapProps {
  className?: string;
}

const SmartxStayMap: React.FC<SmartxStayMapProps> = ({ className = '' }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedStay, setSelectedStay] = useState<StayData | null>(null);
  const [staysData, setStaysData] = useState<StaysGeoJSON | null>(null);
  const [isInViewport, setIsInViewport] = useState(false);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInViewport(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '300px' }
    );

    if (mapContainer.current) {
      observer.observe(mapContainer.current);
    }

    return () => observer.disconnect();
  }, []);

  // Load stays data when in viewport (with AbortController for bfcache)
  useEffect(() => {
    if (!isInViewport) return;

    const abortController = new AbortController();
    
    // Delay fetch to avoid blocking initial render
    const fetchTimer = setTimeout(() => {
      fetch('/data/stays.geojson', {
        signal: abortController.signal,
        cache: 'force-cache',
      })
        .then(response => {
          if (!response.ok) throw new Error('Failed to load');
          return response.json();
        })
        .then(data => {
          if (!abortController.signal.aborted) {
            setStaysData(data);
          }
        })
        .catch(error => {
          if (error.name !== 'AbortError') {
            console.error('Error loading stays data:', error);
          }
        });
    }, 100);

    return () => {
      clearTimeout(fetchTimer);
      abortController.abort();
    };
  }, [isInViewport]);

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || !staysData || map.current || !isInViewport) return;

    console.log('Initializing map with data:', staysData);
    console.log('Using MapTiler API key:', MAPBOX_CONFIG.ACCESS_TOKEN);
    console.log('Using MapTiler style:', MAPBOX_CONFIG.STYLE_URL);
    // Set MapTiler access token
    mapboxgl.accessToken = MAPBOX_CONFIG.ACCESS_TOKEN;

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: MAPBOX_CONFIG.STYLE_URL || MAPBOX_CONFIG.FALLBACK_STYLE, // Use MapTiler style
      center: MAPBOX_CONFIG.SETTINGS.defaultCenter,
      zoom: MAPBOX_CONFIG.SETTINGS.defaultZoom,
      minZoom: MAPBOX_CONFIG.SETTINGS.minZoom,
      maxZoom: MAPBOX_CONFIG.SETTINGS.maxZoom,
      scrollZoom: false, // Disabled until focus
      attributionControl: false
    });

    // Add error handling
    map.current.on('error', (e) => {
      console.error('Map error:', e);
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Enable scroll zoom on focus
    map.current.on('click', () => {
      if (map.current) {
        map.current.scrollZoom.enable();
      }
    });

    // Add stays data source
    map.current.on('load', () => {
      if (!map.current || !staysData) return;
      
      console.log('Map loaded, adding stays data:', staysData);

      // Add source
      console.log('Adding source with data:', staysData);
      map.current.addSource('stays', {
        type: 'geojson',
        data: staysData,
        cluster: true,
        clusterMaxZoom: MAPBOX_CONFIG.SETTINGS.clusterMaxZoom,
        clusterRadius: MAPBOX_CONFIG.SETTINGS.clusterRadius
      });

      // Add cluster circles
      map.current.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'stays',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': MAPBOX_CONFIG.COLORS.marker,
          'circle-radius': 20,
          'circle-stroke-width': 2,
          'circle-stroke-color': MAPBOX_CONFIG.COLORS.markerHover
        }
      });

      // Add cluster count labels
      map.current.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'stays',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': '{point_count_abbreviated}',
          'text-font': ['Inter Medium', 'Arial Unicode MS Bold'],
          'text-size': 12
        },
        paint: {
          'text-color': '#ffffff'
        }
      });

      // Add unclustered points
      map.current.addLayer({
        id: 'unclustered-point',
        type: 'circle',
        source: 'stays',
        filter: ['!', ['has', 'point_count']],
        paint: {
          'circle-color': MAPBOX_CONFIG.COLORS.marker,
          'circle-radius': 20,
          'circle-stroke-width': 2,
          'circle-stroke-color': MAPBOX_CONFIG.COLORS.markerHover
        }
      });

      // Add house icon for unclustered points
      map.current.addLayer({
        id: 'house-icon',
        type: 'symbol',
        source: 'stays',
        filter: ['!', ['has', 'point_count']],
        layout: {
          'icon-image': 'house-icon',
          'icon-size': 0.8,
          'icon-allow-overlap': true
        }
      });

      // Add hover effects
      map.current.on('mouseenter', 'unclustered-point', () => {
        if (map.current) {
          map.current.getCanvas().style.cursor = 'pointer';
          map.current.setPaintProperty('unclustered-point', 'circle-radius', 22);
          map.current.setPaintProperty('unclustered-point', 'circle-color', MAPBOX_CONFIG.COLORS.markerHover);
        }
      });

      map.current.on('mouseleave', 'unclustered-point', () => {
        if (map.current) {
          map.current.getCanvas().style.cursor = '';
          map.current.setPaintProperty('unclustered-point', 'circle-radius', 20);
          map.current.setPaintProperty('unclustered-point', 'circle-color', MAPBOX_CONFIG.COLORS.marker);
        }
      });

      // Add click handler
      map.current.on('click', 'unclustered-point', (e) => {
        if (e.features && e.features[0]) {
          const feature = e.features[0];
          setSelectedStay(feature.properties as StayData);
        }
      });

      // Fit bounds to show all stays
      if (staysData.features.length > 0) {
        const bounds = new mapboxgl.LngLatBounds();
        staysData.features.forEach((feature) => {
          bounds.extend(feature.geometry.coordinates);
        });
        map.current.fitBounds(bounds, { padding: 50 });
      }

      setIsLoaded(true);
    });

    // Cleanup
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [staysData, isInViewport]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedStay) {
        setSelectedStay(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedStay]);

  return (
    <div className={`relative ${className}`}>
      {/* Map Container */}
      <div
        ref={mapContainer}
        className="w-full h-[560px] md:h-[480px] sm:h-[420px] rounded-2xl shadow-lg"
        style={{
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
        role="img"
        aria-label="Interactive map showing SmartxStay locations worldwide"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && staysData?.features?.[0]) {
            setSelectedStay(staysData.features[0].properties);
          }
        }}
      />

      {/* Loading State */}
      {(!isLoaded || !isInViewport) && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#f7f6fb] rounded-2xl">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-[#b8a1ff] rounded-full animate-pulse"></div>
            <div className="w-4 h-4 bg-[#b8a1ff] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-4 h-4 bg-[#b8a1ff] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      )}

      {/* Info Card */}
      {selectedStay && (
        <div className="absolute top-4 left-4 right-4 bg-white rounded-xl shadow-lg p-4 z-10 max-w-sm">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-[#0f0f0f] text-lg">{selectedStay.title}</h3>
            <button
              onClick={() => setSelectedStay(null)}
              className="text-gray-400 hover:text-gray-600 text-xl leading-none"
              aria-label="Close info card"
            >
              ×
            </button>
          </div>
          <p className="text-[#737373] text-sm mb-2">
            {selectedStay.city}, {selectedStay.country}
          </p>
          <p className="text-[#0f0f0f] text-sm mb-3">{selectedStay.note}</p>
          <a
            href={selectedStay.url}
            className="inline-block text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            style={{
              backgroundColor: MAPBOX_CONFIG.COLORS.marker
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = MAPBOX_CONFIG.COLORS.markerHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = MAPBOX_CONFIG.COLORS.marker;
            }}
          >
            View Stay
          </a>
        </div>
      )}

      {/* Custom CSS for Mapbox */}
      <style jsx global>{`
        .mapboxgl-popup-content {
          background: #ffffff;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }
        
        .mapboxgl-popup-tip {
          border-top-color: #ffffff;
        }
        
        .mapboxgl-ctrl-group {
          background: #ffffff;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .mapboxgl-ctrl-group button {
          background: #ffffff;
          border: none;
        }
        
        .mapboxgl-ctrl-group button:hover {
          background: #f7f6fb;
        }
      `}</style>
    </div>
  );
};

export default SmartxStayMap;
