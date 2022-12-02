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
    let ct = document.getElementById('cityName')
    function handleError(){
        if ( data.overall_aqi=== undefined) {
            return 'Please try something else your input may not be supported'
        } else  {
            return `${data.overall_aqi}`
        }
    }
    
    aqi.innerHTML = handleError()
    ct.innerHTML = handleCity()
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

function handleCity(){
    if (input.value == ""){
        input.value = "London"
        return input.value;
    } else {
        return `${input.value}`;
    }
}