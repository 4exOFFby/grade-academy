const map = L.map('map')
.setView({
    lat: 59.96831,
    lng: 30.31748,
  }, 18);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);


const mainPinIcon = L.icon({
  iconUrl: '../images/svg/background-svg/map-mark.svg',
  iconSize: [38, 50],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 59.96827,
    lng: 30.31748,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
mainPinMarker.addTo(map);

export {mainPinMarker, map};
