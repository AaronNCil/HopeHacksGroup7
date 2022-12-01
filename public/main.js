console.log('file hit')
// Upon the page loading call the 'fetchapi function'
// document.addEventListener('DOMContentLoaded', fetchApi)

function fetchApi() {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7087214a9emsh2b3eb209e31f6ccp1afb12jsnc9ce2ca2d443',
            'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
        }
    };

    fetch('https://air-quality.p.rapidapi.com/current/airquality?lon=-73.00597&lat=40.71427', options)
        .then(response => response.json())
        .then(response => handleFetch(response))
        .catch(err => console.error(err));

}

function handleFetch(data) {

    console.log(data.data[0]['aqi']);

}

// const data = {
//     aqui: 22,
//     co: 188.5891,
//     mold_level: 0,
//     no2: 5,
//     pm10: 6.961684,
//     pm25: 5.221263,
//     pollen_level_grass: 0,
//     pollen_level_tree: 0,
//     pollen_level_weed: 0,
//     predominant_pollen_tyoe: "Molds"
// }
