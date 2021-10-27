//const API = "https://rickandmortyapi.com/api/character/"
const API = "https://jsonplaceholder.typicode.com/users/"
const xhr = new XMLHttpRequest();

function onRequestHandler(params) {
    if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.response);
        const HTMLResponse = document.querySelector('#app');

        const tpl = data.map((user) => `
        <figure class='hover-img col-md-3 col-12 rounded p-2 '>
            <img class="rounded" src="${img[Math.floor(Math.random() * img.length)]}" />
            <figcaption>
            <h3>${user.name}</h3>
            </figcaption>
            <p class="mt-3 h5">📧${user.email} 🙍‍♂️${user.username}</p >

        </figure >
        `)
        HTMLResponse.innerHTML = `${tpl} `;
        /* console.log(data.info.count); */
    }
}
xhr.addEventListener('load', onRequestHandler);
xhr.open('GET', `${API} `);
xhr.send();