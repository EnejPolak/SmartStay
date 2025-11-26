'use client';

import React, { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { MAPBOX_CONFIG } from '@/config/mapbox';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutMap = () => {
  const { language } = useLanguage();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  const translations = {
    en: {
      loading: 'Loading map...',
      navigation: 'Navigation'
    },
    sl: {
      loading: 'Nalaganje zemljevida...',
      navigation: 'Navigacija'
    },
    hr: {
      loading: 'Učitavanje karte...',
      navigation: 'Navigacija'
    }
  };

  const t = translations[language] || translations.en;

  // Koordinate za Ljubljana - Črnuče (Pisarna Coworking)
  const LOCATION = {
    lng: 14.5364,
    lat: 46.0975,
    address: 'C. 24. Junija 23, 1231 Ljubljana - Črnuče'
  };

  // Center za Slovenijo (Ljubljana)
  const SLOVENIA_CENTER: [number, number] = [14.5058, 46.0569];

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    try {
      // Initialize map centered on Ljubljana with better style
      map.current = new maplibregl.Map({
        container: mapContainer.current,
        style: 'https://api.maptiler.com/maps/bright/style.json?key=' + MAPBOX_CONFIG.ACCESS_TOKEN,
        center: SLOVENIA_CENTER,
        zoom: 10, // Closer zoom to focus on Ljubljana area
        minZoom: 8,
        maxZoom: 18,
        pitch: 0,
        bearing: 0,
        attributionControl: false,
      });

      // Add navigation controls
      map.current.addControl(
        new maplibregl.NavigationControl({
          showCompass: true,
          showZoom: true,
        }),
        'top-right'
      );

      // Create custom marker element
      const markerElement = document.createElement('div');
      markerElement.className = 'custom-marker';
      markerElement.style.cssText = `
        width: 40px;
        height: 40px;
        background: linear-gradient(135deg, #7db8ff 0%, #a29eff 50%, #7c5fd9 100%);
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid #ffffff;
        box-shadow: 0 4px 12px rgba(124, 95, 217, 0.4);
        cursor: pointer;
        transition: all 0.3s ease;
      `;

      // Add inner dot
      const innerDot = document.createElement('div');
      innerDot.style.cssText = `
        width: 12px;
        height: 12px;
        background: #ffffff;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
      `;
      markerElement.appendChild(innerDot);

      // Hover effect
      markerElement.addEventListener('mouseenter', () => {
        markerElement.style.transform = 'rotate(-45deg) scale(1.2)';
        markerElement.style.boxShadow = '0 8px 24px rgba(124, 95, 217, 0.6)';
      });

      markerElement.addEventListener('mouseleave', () => {
        markerElement.style.transform = 'rotate(-45deg) scale(1)';
        markerElement.style.boxShadow = '0 4px 12px rgba(124, 95, 217, 0.4)';
      });

      // Create popup
      const popup = new maplibregl.Popup({
        offset: 25,
        closeButton: true,
        closeOnClick: false,
      }).setHTML(`
        <div style="padding: 12px; font-family: 'Inter', sans-serif;">
          <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 700; color: #7c5fd9;">
            SmartxStay Pisarna
          </h3>
          <p style="margin: 0; font-size: 14px; color: #4a4a4a; line-height: 1.5;">
            ${LOCATION.address}
          </p>
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=${LOCATION.lat},${LOCATION.lng}"
            target="_blank"
            rel="noopener noreferrer"
            style="
              display: inline-block;
              margin-top: 12px;
              padding: 8px 16px;
              background: linear-gradient(135deg, #a29eff 0%, #7db8ff 100%);
              color: #ffffff;
              text-decoration: none;
              border-radius: 8px;
              font-size: 13px;
              font-weight: 600;
              transition: all 0.3s ease;
            "
            onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 12px rgba(162, 158, 255, 0.4)';"
            onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';"
          >
            {t.navigation} →
          </a>
        </div>
      `);

      // Add marker with popup
      new maplibregl.Marker({
        element: markerElement,
        anchor: 'bottom',
      })
        .setLngLat([LOCATION.lng, LOCATION.lat])
        .setPopup(popup)
        .addTo(map.current);

      // Open popup by default
      popup.addTo(map.current);

      map.current.on('load', () => {
        setMapLoaded(true);
        // Fit bounds to show Slovenia with padding, then zoom to location
        if (map.current) {
          // First show Slovenia, then zoom to location
          map.current.flyTo({
            center: [LOCATION.lng, LOCATION.lat],
            zoom: 13,
            duration: 1500,
            essential: true
          });
        }
      });

    } catch (error) {
      console.error('Error initializing map:', error);
    }

    // Cleanup
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '450px', borderRadius: '16px', overflow: 'hidden' }}>
      <div 
        ref={mapContainer} 
        style={{ 
          width: '100%', 
          height: '100%',
          borderRadius: '16px',
        }} 
      />
      
      {!mapLoaded && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(247, 246, 251, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                border: '4px solid rgba(162, 158, 255, 0.2)',
                borderTop: '4px solid #a29eff',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                margin: '0 auto 16px auto',
              }}
            />
            <p style={{ color: '#737373', fontSize: '14px', margin: 0 }}>
              {t.loading}
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default AboutMap;

