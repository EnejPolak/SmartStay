# SmartxStay MapTiler Integration Setup

## Overview
The SmartxStay map has been successfully integrated with MapTiler, replacing the static SVG map with an interactive, branded map featuring clustering, hover effects, and info cards.

## Files Created/Modified

### New Files:
- `src/components/SmartxStayMap.tsx` - Main map component
- `src/config/mapbox.ts` - Mapbox configuration and styling
- `public/data/stays.geojson` - Demo location data
- `MAPBOX_SETUP.md` - This setup guide

### Modified Files:
- `src/components/FindYourStaySection.tsx` - Updated to use new map component

## Setup Instructions

### 1. MapTiler API Key
Your MapTiler API key is already configured: `GaNW8c4sCohbcK8kWlsl`

If you need to change it, update `src/config/mapbox.ts`:
   ```typescript
   ACCESS_TOKEN: 'your_new_maptiler_key_here'
   ```

### 2. MapTiler Style Options
Your current style is: `https://api.maptiler.com/maps/basic/style.json?key=GaNW8c4sCohbcK8kWlsl`

**Available MapTiler Styles:**
- Basic: `https://api.maptiler.com/maps/basic/style.json?key=GaNW8c4sCohbcK8kWlsl`
- Bright: `https://api.maptiler.com/maps/bright/style.json?key=GaNW8c4sCohbcK8kWlsl`
- Dark: `https://api.maptiler.com/maps/dark/style.json?key=GaNW8c4sCohbcK8kWlsl`
- Satellite: `https://api.maptiler.com/maps/satellite/style.json?key=GaNW8c4sCohbcK8kWlsl`

**Custom Style:**
1. Go to [MapTiler Cloud](https://cloud.maptiler.com/)
2. Create a custom style with SmartxStay colors:
   - Land: `#f7f6fb`
   - Water: `#f4f1fe`
   - Roads: `#b8a1ff`
   - Labels: `#737373`
3. Update `src/config/mapbox.ts`:
   ```typescript
   STYLE_URL: 'https://api.maptiler.com/maps/your-style-id/style.json?key=GaNW8c4sCohbcK8kWlsl'
   ```

### 3. Update Location Data
Edit `public/data/stays.geojson` to add your actual stay locations:

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "id": "unique-id",
        "title": "Stay Name",
        "city": "City Name",
        "country": "Country Name",
        "note": "Description of the stay",
        "url": "/stays/url-slug"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [longitude, latitude]
      }
    }
  ]
}
```

## Features Implemented

### ✅ Map Styling
- Custom SmartxStay color scheme
- Responsive design (560px desktop, 480px tablet, 420px mobile)
- Rounded corners (16px radius) with shadow
- Max width 1200px, centered

### ✅ Interactive Features
- Marker clustering with smooth animations
- Hover effects (scale + glow)
- Click to show info cards
- Keyboard navigation (Enter/Escape)
- Scroll zoom disabled until focus

### ✅ Performance
- Lazy loading (loads when 300px from viewport)
- Smooth animations
- No layout shift during load

### ✅ Accessibility
- Proper ARIA labels
- Keyboard navigation
- Focus management
- Screen reader friendly

### ✅ Data Management
- GeoJSON format for location data
- Auto-fit bounds to show all locations
- Easy to update locations

## Customization

### Colors
All colors are centralized in `src/config/mapbox.ts`:
```typescript
COLORS: {
  land: '#f7f6fb',
  water: '#f4f1fe', 
  borders: '#daceff',
  roads: '#b8a1ff',
  labels: '#737373',
  marker: '#b8a1ff',
  markerHover: '#a991ff',
  markerGlow: 'rgba(184, 161, 255, 0.3)'
}
```

### Map Settings
```typescript
SETTINGS: {
  minZoom: 2,
  maxZoom: 12,
  defaultCenter: [0, 20],
  defaultZoom: 2,
  clusterRadius: 50,
  clusterMaxZoom: 12
}
```

## Testing
1. Run `npm run dev`
2. Navigate to the "Find your next stay" section
3. Verify:
   - Map loads with SmartxStay colors
   - Markers cluster properly
   - Hover effects work
   - Click shows info cards
   - Responsive design works
   - No layout shift

## Troubleshooting

### Map not loading
- Check Mapbox access token
- Verify network connection
- Check browser console for errors

### Styling issues
- Ensure custom style URL is correct
- Check if fallback style is being used
- Verify color values in config

### Performance issues
- Check if lazy loading is working
- Verify intersection observer setup
- Monitor network requests

## Next Steps
1. Add your actual Mapbox token
2. Create custom style in Mapbox Studio
3. Update location data with real stays
4. Test on different devices
5. Consider adding search functionality
6. Add more interactive features as needed
