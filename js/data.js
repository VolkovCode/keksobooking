import { getRandomInt, getRandomFloat } from './utils.js';

const AVATAR_SRC = () => {
  let id = getRandomInt(1, 10);
  if (id < 10) {
    return `img/avatars/user0${id}.png`;
  } else {
    return 'img/avatars/user10.png';
  }
}

const ADDRES = () => {
  let x = getRandomFloat(1, 1000, 3);
  let y = getRandomFloat(1, 1000, 3);
  return `${x}, ${y}`;
}

const TYPE = () => {
  let i = getRandomInt(1, 4);
  switch (i) {
    case 1:
      return 'palace';
    case 2:
      return 'flat';
    case 3:
      return 'house';
    case 4:
      return 'bungalow';
  }
}

const CHECKIN_CHECKOUT = () => {
  let hour = getRandomInt(12, 14);
  return `${hour}:00`;
}

const FEATURES = () => {
  let result = []
  let features = {
    'wifi': getRandomInt(0, 1),
    'dishwasher': getRandomInt(0, 1),
    'parking': getRandomInt(0, 1),
    'washer': getRandomInt(0, 1),
    'elevator': getRandomInt(0, 1),
    'conditioner': getRandomInt(0, 1),
  }

  for (let i in features) {
    if (features[i] == 1) {
      result.push(i)
    }
  }
  return result;
}

const PHOTOS = () => {
  let photos = [
    'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
  ]
  let result = photos.filter(photo => {if (getRandomInt(0, 1) == 1) {return photo}})
  return result;
}

const X = getRandomFloat(35.65000, 35.70000, 5);
const Y = getRandomFloat(139.70000, 139.80000, 5);

export const author = {
  'avatar': AVATAR_SRC(),
}

export const offer = {
  'title': 'Заголовок объявления',
  'addres': ADDRES(),
  'price': getRandomInt(0, 1000000),
  'type': TYPE(),
  'rooms': getRandomInt(1, 5),
  'guests': getRandomInt(1, 15),
  'checkin': CHECKIN_CHECKOUT(),
  'checkout': CHECKIN_CHECKOUT(),
  'features': FEATURES(),
  'description': 'Тепло и уютно',
  'photos': PHOTOS(),
}

export const location = {
  'x': X,
  'y': Y,
}

// let offer, author, location
// export const data = fetch('https://23.javascript.pages.academy/keksobooking/data')
//   .then((response) => response.json())
//   .then(posts => {
//     offer = posts[0].offer;
//     author = posts[0].author;
//   })




