let requestURL = "./constants.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = 'json';
request.send();
let res = request.response

request.onload = function () {
    servicesData = request.response;
    //console.log(servicesData);
    //serviceTemplate();
}

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        const serviceTemplate = (service) => {
            return `
                    <div class="services_data">
                        <i class="${service.icon}"></i>
                        <h3 class="services_title">${service.name}</h3>
                        <p class="services_description">Services that I offer and are very passionate about</p>
                        <a href="#" class="button">Know More</a>
                    </div>
                `
        };
        
        // adding the html to the page
        document.getElementById("serv").innerHTML = `
            ${res.map(serviceTemplate).join('')}
            `;
    }
};
xhttp.open("GET", "constants.json", true);
xhttp.send();

