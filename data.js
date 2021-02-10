const servicesData = [
    {
        name: "Web Development",
        desc: "Services that I offer and are very passionate about",
        icon: "bx bx-laptop services_icon"
    },
    {
        name: "UI/UX Design",
        desc: "Services that I offer and are very passionate about",
        icon: "bx bx-palette services_icon"
    }
];


// function to display data 
const serviceTemplate = (service) => {
    return `
         <div class="services_data">
            <i class="${service.icon}"></i>
            <h3 class="services_title">${service.name}</h3>
            <p class="services_description">Services that I offer and are very passionate about</p>
            <a href="#" class="button">Know More</a>
        </div>
    `
}

// adding the html to the page
document.getElementById("serv").innerHTML = `
    ${servicesData.map(serviceTemplate).join('')}
`;