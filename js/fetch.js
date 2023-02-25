// fetch('https://23.javascript.pages.academy/keksobooking/data')
//   .then((response) => response.json())
//   .then((posts) => console.log(posts))

export const API_URL = 'https://23.javascript.pages.academy/keksobooking/data'

export async function getJSON(onSuccess, url) {
  let response = await fetch(url);
  let body = await response.json();
  return onSuccess(body);
}
