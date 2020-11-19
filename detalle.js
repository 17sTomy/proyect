const banderas = document.getElementById("banderas"),
query = new URLSearchParams(window.location.search),
params = query.get('name');

document.addEventListener("DOMContentLoaded", (e) => {
    fetchData();
})

const fetchData = async() => {
    try {
        const res = await fetch('api.json') 
        //console.log(res)
        const data = await res.json()
        //console.log(data)  
        const filtroData = data.filter(item => item.name === params)
        banderillas(filtroData)
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
                <h4>${el.nativeName}</h4>
                <p>
                    <b>Population: </b>
                    ${el.population}
                </p>
                <p>
                    <b>Region: </b>
                    ${el.region}
                </p>
                <p>
                    <b>Subregion: </b>
                    ${el.subregion}
                </p>
                <p>
                    <b>Capital: </b>
                    ${el.capital}
                </p>
                <p>
                    <b>Moneda: </b>
                    ${el.currencies[0].symbol}${el.currencies[0].code}
                </p>
            </div>
        </article>
        `;
    });

    banderas.innerHTML = elementos;
}