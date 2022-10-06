const mapSection = document.querySelector('.map');

mapSection.classList.remove('map--no-js');

const map = L.map('map')
.setView({
    lat: 59.96843,
    lng: 30.31758,
  }, 20);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);


const mainPinIcon = L.icon({
  iconUrl: './img/svg/background-svg/map-mark.svg',
  iconSize: [38, 50],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 59.96835,
    lng: 30.31769,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
mainPinMarker.addTo(map);

export {mainPinMarker, map};
