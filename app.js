import 'https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js'

const coordinates = JSON.parse(window.localStorage.getItem('coordinates'));

mapboxgl.accessToken = 'pk.eyJ1Ijoic3R1ZSIsImEiOiJjanpzZ3hjdnExOW8wM2RvMGc1c2cyMXVyIn0.8DMP1OgiHAaqk3TT3vkRAQ';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: coordinates[0], // starting position [lng, lat]
    zoom: 15 // starting zoom
});

map.on('load', function () {
    map.addSource('route', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'LineString',
                'coordinates': coordinates
            }
        }
    });
    map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#888',
            'line-width': 8
        }
    });
});