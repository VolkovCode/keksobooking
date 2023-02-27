const MIN_TITLE_LENGTH = 30
const MAX_TITLE_LENGTH = 100

const form = document.querySelector('.ad-form')
const type = form.querySelector('#type')
const price = form.querySelector('#price')
const timeIn = form.querySelector('#timein')
const timeOut = form.querySelector('#timeout')
const timeInput = form.querySelector('.ad-form__element--time')
const titleInput = form.querySelector('#title')
const adFormSubmitButton = form.querySelector('.ad-form__submit');
const roomsQuantityElement = form.querySelector('#room_number');
const guestsQuantityElement = form.querySelector('#capacity');
const addressInput = form.querySelector('#address');

const roomsToGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

// Сообщение при несоответствии количества комнат количеству гостей
const mismatchMessage = {
  1: '1 комната — для 1 гостя',
  2: '2 комнаты — для 1 или 2 гостей',
  3: '3 комнаты — для 1 или 2 или 3 гостей',
  100: '100 комнат — не для гостей',
};

const minPrices = {
  'bungalow': 0,
  'flat': 1000,
  'house': 3000,
  'palace': 10000,
}



type.addEventListener('change', function () {
  switch (type.value) {
    case 'bungalow':
      price.placeholder = minPrices['bungalow'];
      price.min = minPrices['bungalow'];
      break;
    case 'flat':
      price.placeholder = minPrices['flat'];
      price.min = minPrices['flat'];
      break;
    case 'house':
      price.placeholder = minPrices['house'];
      price.min = minPrices['house'];
      break;
    case 'palace':
      price.placeholder = minPrices['palace'];
      price.min = minPrices['palace'];
      break;
  }
})

const matchRoomsAndGuests = () => {
  const mismatch = mismatchMessage[roomsQuantityElement.value];
  return roomsToGuests[roomsQuantityElement.value].includes(guestsQuantityElement.value) ? '' : mismatch;
};

const selectRoomsHandler = () => {
  guestsQuantityElement.setCustomValidity(matchRoomsAndGuests());
  guestsQuantityElement.reportValidity();
};

const titleInputValidator = () => {
  let valueLength = titleInput.value.length;
  if (valueLength < MIN_TITLE_LENGTH ) {
    titleInput.setCustomValidity(`Минимальная длина заголовка ${MIN_TITLE_LENGTH} заголовка, еще ${MIN_TITLE_LENGTH-valueLength}`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Максимальная длина заголовка ${MAX_TITLE_LENGTH}, удалите лишнии ${valueLength-MAX_TITLE_LENGTH} символов`);
  } else {
    titleInput.setCustomValidity('');
  }
  titleInput.reportValidity();
}

// const priceInputValidator = () => {
//   const priceValue = titleInput.value;
//   // const selectedTypeValue = type.value;
//   if (priceValue < minPrices[type.value]) {
//     price.setCustomValidity(`Минимальная цена для данного типа жилья(${selectedTypeValue}) - ${minPrices[selectedTypeValue]}`);
//   }
//   price.reportValidity();
// }

export const writeLocation = ({lat, lng}) => {
  addressInput.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`
}

timeInput.addEventListener('change', function (evt) {
  timeIn.value = evt.target.value
  timeOut.value = evt.target.value
})

titleInput.addEventListener('input', titleInputValidator)
addressInput.readOnly = true
adFormSubmitButton.addEventListener('click', selectRoomsHandler);

