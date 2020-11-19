const banderas = document.getElementById("banderas");

document.addEventListener("DOMContentLoaded", (e) => {
    fetchData();
})

const fetchData = async() => {
    try {
        const res = await fetch('api.json') 
        //console.log(res)
        const data = await res.json()
        console.log(data)  
        banderillas(data)
        formularioCliente(data)
        filtros(data)
    }catch(err) { }
}

const banderillas = data => {
    let elementos = '';
    data.forEach(el => {
        elementos += `
        <article class="card">
            <img src=${el.flag} alt="" class="img-fluid">
            <div class="card-content">
                <h3>${el.name}</h3>
                <p>
                    <b>Population: </b>
                    ${el.population}
                </p>
                <p>
                    <b>Region: </b>
                    ${el.region}
                </p>
                <p>
                    <b>Capital: </b>
                    ${el.capital}
                </p>
                <p>
                    <a href="pais.html?name=${el.name}">Más info</a>
                </p>
            </div>
        </article>
        `;
    });

    banderas.innerHTML = elementos;
}