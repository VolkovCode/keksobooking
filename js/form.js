const MIN_TITLE_LENGTH = 30
const MAX_TITLE_LENGTH = 100

const type = document.querySelector('#type')
const price = document.querySelector('#price')
const timeIn = document.querySelector('#timein')
const timeOut = document.querySelector('#timeout')
const timeInput = document.querySelector('.ad-form__element--time')
const titleInput = document.querySelector('#title')
const adFormSubmitButton = document.querySelector('.ad-form__submit');
const roomsQuantityElement = document.querySelector('#room_number');
const guestsQuantityElement = document.querySelector('#capacity');

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

type.addEventListener('change', function () {
  switch (type.value) {
    case 'bungalow':
      price.placeholder = '0';
      price.min = '0'
      break;
    case 'flat':
      price.placeholder = '1000';
      price.min = '1000'
      break;
    case 'house':
      price.placeholder = '3000';
      price.min = '3000'
      break;
    case 'palace':
      price.placeholder = '10000';
      price.min = '10000'
      break;
  }
})

const matchRoomsAndGuests = () => {
  const mismatch = mismatchMessage[roomsQuantityElement.value];
  return roomsToGuests[roomsQuantityElement.value].includes(guestsQuantityElement.value) ? '' : mismatch;
};

const selectRoomsHandler = () => {
  guestsQuantityElement.setCustomValidity(matchRoomsAndGuests());
  // guestsQuantityElement.reportValidity();
};

const titleInputValidator = () => {
  let valueLength = titleInput.value.length;
  if (valueLength < MIN_TITLE_LENGTH ) {
    titleInput.setCustomValidity(`Минимальная длина ${MIN_TITLE_LENGTH}, еще ${MIN_TITLE_LENGTH-valueLength}`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Максимальная длина ${MAX_TITLE_LENGTH}, удалите лишние ${valueLength-MAX_TITLE_LENGTH}`);
  } else {
    titleInput.setCustomValidity('');
  }
  titleInput.reportValidity();
}

timeInput.addEventListener('change', function (evt) {
  timeIn.value = evt.target.value
  timeOut.value = evt.target.value
})

titleInput.addEventListener('input', titleInputValidator)
adFormSubmitButton.addEventListener('click', selectRoomsHandler);
