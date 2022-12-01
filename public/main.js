console.log('file hit')
// Upon the page loading call the 'fetchapi function'
// document.addEventListener('DOMContentLoaded', fetchApi)

function fetchApi() {
    const options = {
        method: 'GET',
        headers: {
            'X-Api-Key': '8RUTY+XAjAVFEnXtdwZ+pw==Zfc7t1qOSLxoQL1o',
        }
    };
    fetch('https://api.api-ninjas.com/v1/airquality?city=London', options)
        .then(response => response.json())
        .then(response => handleFetch(response))
        .catch(err => console.error(err));
}
function handleFetch(data) {
    console.log(data)
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


//fetching first party api
const dataList = document.querySelector('.containercard');
const solutionList = document.querySelector('.containercards')

function loadJSON(){
    fetch('data.json') // grabs json data
    .then(response => response.json()) // sends a response and returns promise (parses data from json)
    .then(data => {
        let html = '';  // sets html variable
        data.forEach(data => { // runs for each product array/object.
            html += `
            <div class="card d-flex justify-content-center border-0" style="width: 18rem;">
            <div class="card-body" style="background-color: #f3f4f8;">
              <h3 class="card-title">${data.title}</h3>
              <div class='container'></div>
              <p class="card-text">${data.description}</p>
              <a href="${data.link}" class="btn btn-primary btn-md active" role="button" aria-pressed="true">Our solutions</a>
            </div>
          </div>
      ` 
        });
        dataList.innerHTML = html; // loads html and data into .product-list class.
    })
}

function solutionJSON(){
    fetch('solution.json') // grabs json data
    .then(response => response.json()) // sends a response and returns promise (parses data from json)
    .then(data => {
        let html = '';  // sets html variable
        data.forEach(data => { // runs for each product array/object.
            html += `
            <div class="card border-0 mb-5 p-5" style="background-color: #f3f4f8;">
        <div class="row">
            <div class="col-md-4">
                <img src="..." alt="" class="img-fluid">
            </div>
            <div class="col-md-8">
                <h2 class="card-title mt-3">${data.title}</h2>
                <p>${data.description}</p>
                <button class="btn mb-3" href="${data.link}">Learn more</button>
            </div>
        </div>
    </div>
      ` 
        });
        solutionList.innerHTML = html; // loads html and data into .product-list class.
    })
}
