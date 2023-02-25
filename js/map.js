// import { card } from './card.js';
// import { data } from './data.j';
//
// const adForm = document.querySelector('.ad-form')
// const mapFilterForm = document.querySelector('.map__filters')
// const fieldsets = adForm.querySelectorAll('fieldset')
//
// const mainPinIcon = L.icon({
//   iconUrl: './img/pin.svg',
//   iconSize: [52, 52],
//   iconAnchor: [26, 52],
// });
//
// const formDisabler = () => {
//   fieldsets.forEach((fieldset) => {fieldset.setAttribute('disabled', '');})
//   for (let key of mapFilterForm.children) {
//     key.setAttribute('disabled', '');
//   }
// }
//
// formDisabler()
//
// const map = L.map('map-canvas')
//   .on('load', () => {
//     fieldsets.forEach((fieldset) => {fieldset.removeAttribute('disabled');});
//     adForm.classList.remove('ad-form--disabled');
//     mapFilterForm.classList.remove('map__filters--disabled');
//     for (let key of mapFilterForm.children) {
//       key.removeAttribute('disabled');
//     }
//
//   })
//   .setView({
//     lat: 35.6895,
//     lng: 139.692,
//   }, 10);
//
// L.tileLayer(
//   'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
//   {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//   },
// ).addTo(map);
//
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
//
// marker
//   .addTo(map)
//   .bindPopup(card());

import {getData, API_URL} from './api.js';
import {renderCard} from './card.js';

const adForm = document.querySelector('.ad-form')
adForm.classList.remove('ad-form--disabled')
const fieldsets = adForm.querySelectorAll('fieldset')
const mapFilterForm = document.querySelector('.map__filters')

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
    lat: 59.92749,
    lng: 30.31127,
  }, 10)

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const marker = L.marker(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

marker
  .addTo(map)
  .bindPopup('title')

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

getData(addMapMarkers, API_URL)

marker.on('moveend', (evt) => {
  console.log(evt.target.getLatLng());
});
