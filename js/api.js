// export const getData = (url) => {
//   const data = fetch(url).then(response => response.json())
//   return data
// }

export const API_URL = 'https://23.javascript.pages.academy/keksobooking/data'

export async function getData(onSuccess, url) {
  let response = await fetch(url);
  let body = await response.json();
  return onSuccess(body);
}

