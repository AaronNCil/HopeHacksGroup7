//fetching first party api
const dataList = document.querySelector('.containercard1');
const solutionList = document.querySelector('.containercard2');

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