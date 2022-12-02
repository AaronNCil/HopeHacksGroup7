// Upon the page loading call the 'fetchapi function'
document.addEventListener('DOMContentLoaded', fetchApi)

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
    let aqi = document.getElementById('AQI')
    let cm = document.getElementById('CM')
    let nd = document.getElementById('ND')
    let oz = document.getElementById('OZ')
    let sd = document.getElementById('SD')
    function handleError(){
        if ( data.overall_aqi=== undefined) {
            return 'Please try something else your input may not be supported'
        } else  {
            return `${data.overall_aqi}`
        }
    }
    
    aqi.innerHTML = handleError()
    cm.innerHTML = `Carbon monoxide (CO): ${data.CO.concentration}`
    nd.innerHTML = `Nitrogen dioxide (NO2): ${data.NO2.concentration}`
    oz.innerHTML = `Ozone (O3):${data.O3.concentration}`
    sd.innerHTML = `Sulphur dioxide (SO2): ${data.SO2.concentration}`
}
const input = document.getElementById("searchInput");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        handleSearch(event)
    }
});
function handleSearch(event) {
    let city = input.value
    const options = {
        method: 'GET',
        headers: {
            'X-Api-Key': '8RUTY+XAjAVFEnXtdwZ+pw==Zfc7t1qOSLxoQL1o',
        }
    };
    fetch(`https://api.api-ninjas.com/v1/airquality?city=${city}`, options)
        .then(response => response.json())
        .then(response => handleFetch(response))
        .catch(err => console.error(err));
}

//fetching first party api
const dataList = document.querySelector('.containercard1');
const solutionList = document.querySelector('.containercard2');
function loadJSON() {
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
function solutionJSON() {
    fetch('solution.json') // grabs json data
        .then(response => response.json()) // sends a response and returns promise (parses data from json)
        .then(data => {
            let html = '';  // sets html variable
            data.forEach(data => { // runs for each product array/object.
                html += `
            <div class="card border-0 p-5" style="background-color: #f3f4f8;">
        <div class="row">
            <div class="col-md-4">
                <img src="${data.img}" alt="" class="img-fluid">
            </div>
            <div class="col-md-8">
                <h2 class="card-title mt-3">${data.title}</h2>
                <p>${data.description}</p>
                <a href="${data.link}" class="btn btn-md active" role="button" aria-pressed="true">Learn more</a>
            </div>
        </div>
    </div>
      `
            });
            solutionList.innerHTML = html; // loads html and data into .product-list class.
        })
}