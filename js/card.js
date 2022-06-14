// import { offer, author } from './data.js'



// let title = document.querySelector('.popup__title');
// let address = document.querySelector('.popup__text--address')
// let price = document.querySelector('.popup__text--price')
// let type = document.querySelector('.popup__type')
// let capacity = document.querySelector('.popup__text--capacity')
// let time = document.querySelector('.popup__text--time')
// let features = document.querySelector('.popup__features')
// let description = document.querySelector('.popup__description')
// let photos = document.querySelector('.popup__photos')
// let image = document.querySelector('.popup__photo')
// let avatar = document.querySelector('.popup__avatar')


let housingType = (type) => {
  switch (type) {
    case 'flat':
      return 'Квартира'
    case 'bungalow':
      return 'Бунгало'
    case 'house':
      return 'Дом'
    case 'palace':
      return 'Дворец'
  }
}

// title.textContent = offer.title;
// address.textContent = offer.addres
// price.textContent = `${offer.price} ₽/ночь`
// type.textContent = housingType()
// capacity.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`
// time.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`
// description.textContent = offer.description
// avatar.src = author.avatar


// for (let i = 0; i < offer.photos.length; i++) {
//   image.src = offer.photos[i]
//   photos.children.add(image)
// }

// for (let i = 0; i < offer.features.length; i++) {
//   let element = document.createElement('li')
//   element.classList.add('popup__feature')
//   element.classList.add(`popup__feature--${offer.features[i]}`)
//   features.children.add(element)
// }


export const renderCard = function (offer, author) {
  let card = document.querySelector('#card').content.querySelector('.popup')
  let cardElement = card.cloneNode(true)
  let title = cardElement.querySelector('.popup__title');
  let address = cardElement.querySelector('.popup__text--address')
  let price = cardElement.querySelector('.popup__text--price')
  let type = cardElement.querySelector('.popup__type')
  let capacity = cardElement.querySelector('.popup__text--capacity')
  let time = cardElement.querySelector('.popup__text--time')
  let features = cardElement.querySelector('.popup__features')
  let featureElement = cardElement.querySelectorAll('.popup__feature')
  let description = cardElement.querySelector('.popup__description')
  let photos = cardElement.querySelector('.popup__photos')
  let image = cardElement.querySelector('.popup__photo')
  let avatar = cardElement.querySelector('.popup__avatar')

  for (let i of featureElement) {
    i.remove()
  }
  title.textContent = offer.title;
  address.textContent = offer.addres
  price.textContent = `${offer.price} ₽/ночь`
  type.textContent = housingType(offer.type)
  capacity.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`
  time.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`
  description.textContent = offer.description
  avatar.src = author.avatar

  if (offer.photos) {
    for (let i = 0; i < offer.photos.length; i++) {
      let element = image.cloneNode(true)
      element.src = offer.photos[i]
      photos.appendChild(element)
    }
  }

  image.remove()
  if (offer.features) {
    for (let i = 0; i < offer.features.length; i++) {
      let element = document.createElement('li')
      element.classList.add('popup__feature')
      element.classList.add(`popup__feature--${offer.features[i]}`)
      features.appendChild(element)
    }
  }

  return cardElement
}

// let map = document.querySelector('.map__canvas')
// let fragment = document.createDocumentFragment()

// export let card = fetch('https://23.javascript.pages.academy/keksobooking/data')
//   .then((response) => response.json())
//   .then(posts => fragment.appendChild(renderCard(posts[0].offer, posts[0].author)))
//   .then(fragment => map.appendChild(fragment))
// fragment.appendChild(renderCard())
// map.appendChild(fragment)

