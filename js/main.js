// import './card.js';
// import './map.js'
import { offer, author, location } from './data.js';
import { renderCard } from './card.js';



const adForm = document.querySelector('.ad-form')
const mapFilterForm = document.querySelector('.map__filters')
const fieldsets = adForm.querySelectorAll('fieldset')



const mainPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const formDisabler = () => {
  fieldsets.forEach((fieldset) => {fieldset.setAttribute('disabled', '');})
  for (let key of mapFilterForm.children) {
    key.setAttribute('disabled', '');
  }
}

formDisabler()

const map = L.map('map-canvas')
  .on('load', () => {
    fieldsets.forEach((fieldset) => {fieldset.removeAttribute('disabled');});
    adForm.classList.remove('ad-form--disabled');
    mapFilterForm.classList.remove('map__filters--disabled');
    for (let key of mapFilterForm.children) {
      key.removeAttribute('disabled');
    }

  })
  .setView({
    lat: 35.6895,
    lng: 139.692,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const addMapMarkers = (data) => {
  console.log(data);
  data.forEach((d) => { 
    const marker = L.marker(
      {
        lat: d.location.lat,
        lng: d.location.lng,
      },
      {
        draggable: false,
        icon: mainPinIcon,
      },
    );
    marker
      .addTo(map)
      .bindPopup(renderCard(d.offer, d.author))});
}

const getData = function (onSuccess) {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then(response => response.json())
    .then(data => onSuccess(data))
}


getData(data => 
  addMapMarkers(data,
  ),
)

// const marker = L.marker(
//   {
//     lat: 36,
//     lng: 139.7,
//   },
//   {
//     draggable: false,
//     icon: mainPinIcon,
//   },
// );

// marker
//   .addTo(map)
//   .bindPopup(renderCard(offer, author));