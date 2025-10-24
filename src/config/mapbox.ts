// MapTiler Configuration for SmartxStay
export const MAPBOX_CONFIG = {
  // MapTiler API key
  ACCESS_TOKEN: 'GaNW8c4sCohbcK8kWlsl',
  
  // MapTiler style URL - poskusi različne stile:
  // Basic: https://api.maptiler.com/maps/basic/style.json?key=GaNW8c4sCohbcK8kWlsl
  // Bright: https://api.maptiler.com/maps/bright/style.json?key=GaNW8c4sCohbcK8kWlsl
  // Dark: https://api.maptiler.com/maps/dark/style.json?key=GaNW8c4sCohbcK8kWlsl
  // Outdoor: https://api.maptiler.com/maps/outdoor/style.json?key=GaNW8c4sCohbcK8kWlsl
  STYLE_URL: 'https://api.maptiler.com/maps/outdoor/style.json?key=GaNW8c4sCohbcK8kWlsl',
  
  // Fallback style configuration (MapTiler basic style)
  FALLBACK_STYLE: 'https://api.maptiler.com/maps/basic/style.json?key=GaNW8c4sCohbcK8kWlsl',
  
  // SmartxStay brand colors
  COLORS: {
    land: '#f7f6fb',
    water: '#f4f1fe', 
    borders: '#daceff',
    roads: '#b8a1ff',
    labels: '#737373',
    marker: '#b8a1ff',
    markerHover: '#a991ff',
    markerGlow: 'rgba(184, 161, 255, 0.3)'
  },
  
  // Map settings
  SETTINGS: {
    minZoom: 2,
    maxZoom: 12,
    defaultCenter: [0, 20],
    defaultZoom: 2,
    clusterRadius: 50,
    clusterMaxZoom: 12
  }
};

/*
MAPTILER STYLE CONFIGURATION INSTRUCTIONS:

1. Go to https://cloud.maptiler.com/
2. Create a new style or customize existing one
3. Use your MapTiler API key: GaNW8c4sCohbcK8kWlsl

AVAILABLE MAPTILER STYLES:
- Basic: https://api.maptiler.com/maps/basic/style.json?key=GaNW8c4sCohbcK8kWlsl
- Bright: https://api.maptiler.com/maps/bright/style.json?key=GaNW8c4sCohbcK8kWlsl
- Dark: https://api.maptiler.com/maps/dark/style.json?key=GaNW8c4sCohbcK8kWlsl
- Satellite: https://api.maptiler.com/maps/satellite/style.json?key=GaNW8c4sCohbcK8kWlsl

CUSTOM STYLE:
If you create a custom style in MapTiler Cloud, use:
https://api.maptiler.com/maps/your-style-id/style.json?key=GaNW8c4sCohbcK8kWlsl

SMARTXSTAY BRAND COLORS:
- Land: #f7f6fb
- Water: #f4f1fe
- Roads: #b8a1ff
- Labels: #737373
- Marker: #b8a1ff
- Marker Hover: #a991ff
*/
