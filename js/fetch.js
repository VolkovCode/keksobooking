// fetch('https://23.javascript.pages.academy/keksobooking/data')
//   .then((response) => response.json())
//   .then((posts) => console.log(posts))

async function getJSON(url) {
  let response = await fetch(url);
  let body = await response.json();
  return body;
}
