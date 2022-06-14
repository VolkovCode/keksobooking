

const getData = (url) => {
    data = fetch(url).then(response => response.json())
    return data
}