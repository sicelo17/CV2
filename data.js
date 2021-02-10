const servicesData = [
    {
        name: "Web Development",
        desc: "Services that I offer and are very passionate about",
        icon: "<i class='bx bx-laptop services_icon'></i>"
    },
    {
        name: "UI/UX Design",
        desc: "Services that I offer and are very passionate about",
        icon: "<i class='bx bx-pallete services_icon'></i>"
    }
];

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

document.getElementsByClassName("services_container").innerHTML = `
    ${servicesData.map(serviceTemplate).join('')}
`;