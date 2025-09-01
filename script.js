// Initialize map
let map;
const locations = [
    { name: 'Deloitte Germany', coords: [48.1351, 11.5820], dates: '2021-present' },
    { name: 'Accenture Pune', coords: [18.5204, 73.8567], dates: '2019-2021' },
    { name: 'Accenture Hyderabad', coords: [17.3850, 78.4867], dates: '2015-2019' }
];

document.getElementById('toggleMap').addEventListener('click', function() {
    const mapDiv = document.getElementById('map');
    if (mapDiv.style.display === 'none') {
        mapDiv.style.display = 'block';
        if (!map) {
            initMap();
        }
    } else {
        mapDiv.style.display = 'none';
    }
});

function initMap() {
    map = L.map('map').setView([30, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    
    locations.forEach(loc => {
        L.marker(loc.coords)
            .bindPopup(`<b>${loc.name}</b><br>${loc.dates}`)
            .addTo(map);
    });
}