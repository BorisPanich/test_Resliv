const url = 'https://jsonplaceholder.typicode.com/posts';

const firstReques = new Promise((res, rej) => {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', url)
    xhr.send()

    xhr.onload = () => res(xhr.response)
    xhr.onerror = () => rej(xhr.status)
})

const secondRequest = fetch(`${url}/1`)

Promise.all([firstReques, secondRequest])
    .then(() => {
        console.log("оба ответа получены");
    })
    .catch(() => {
        console.log("ответов нет");
    })