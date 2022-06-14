export const getRandomInt = (min, max) => {
  if (min < 0 || max < 0 ) {
    return 'Задайте корректный диапазон';
  } else if (max < min) {
    [min, max] = [max, min]
  } else if (max == min) {
    return min
  }
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}

export const getRandomFloat = (min, max, n=1) => {
  if (min < 0 || max < 0 ) {
    return 'Задайте корректный диапазон';
  } else if (max < min) {
    [min, max] = [max, min]
  } else if (max == min) {
    return min
  }
  let randomNumber = (Math.random() * (max - min + 1) + min);
  return randomNumber.toFixed(n);
}

