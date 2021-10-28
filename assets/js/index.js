//const API = "https://rickandmortyapi.com/api/character/"
const API = "https://jsonplaceholder.typicode.com/users/"
const HTMLResponse = document.querySelector('#app');

fetch(`${API}`)
    .then((response) => response.json())
    .then((users) => {
        const tpl = users.map((user) => ` 
                    <figure figure class= 'hover-img col-md-3 col-12 rounded p-2 ' >
                        <img class="rounded" src="${img[Math.floor(Math.random() * img.length)]}" />
                        <figcaption>
                        <h3>${user.name}</h3>
                        </figcaption>
                        <p class="mt-3 h5">📧${user.email} 🙍‍♂️${user.username}</p >
                    </figure > 
                    `);
        HTMLResponse.innerHTML = `${tpl}`;
    });

/* fetch(API)
    .then((response) => response.JSON())
    .then((users) => {
        const tpl = users.map((user) =>
            `<figure figure class= 'hover-img col-md-3 col-12 rounded p-2 ' >
                        <img class="rounded" src="${img[Math.floor(Math.random() * img.length)]}" />
                        <figcaption>
                        <h3>${user.name}</h3>
                        </figcaption>
                        <p class="mt-3 h5">📧${user.email} 🙍‍♂️${user.username}</p >
                    </figure > `);
        HTMLResponse.innerHTML = `${ tpl } `;
    }); */