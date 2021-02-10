
function change_myselect(sel) {

    
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            servicesData = JSON.parse(this.responseText);
            // function to display data in services
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
            ${servicesData.map(serviceTemplate).join('')}
            `;

            }
        };
    xmlhttp.open("GET", "constants.json", true);
    xmlhttp.responseType = 'json';
    xmlhttp.send();
}