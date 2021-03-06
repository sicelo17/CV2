let requestURL = "./constants.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = 'json';

request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        // information from the constants.json
        data = request.response;

        //function to add items to the webpage

        const homeTemplate = (home) => {
            return `
                    <a href="${home.home_link}" class="home_social-icon"><i class='${home.icon}'></i></a>
            `
        };

        const contactTemplate = (contact) => {
            return `
                   <a href="${contact.contact_link}" class="contact_social"><i class="${contact.icon}"></i></a>
            `
        };

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

        const portfolioTemplate = (portfolio) => {
            return `
                <div class="${portfolio.content} ${portfolio.class}">
                    <a href="${portfolio.portfolio_link}"><img src="${portfolio.img}" alt="" class="portfolio_img"></a>
                      <div class="portfolio_data">
                          <span class="portfolio_subtitle">${portfolio.name}</span>
                          <a href="${portfolio.portfolio_link}"><h2 class="portfolio_title">${portfolio.title}</h2></a>
                          <a href="${portfolio.portfolio_link}" class="button button-link">${portfolio.link}</a>
                      </div>
                </div>
            `
        };

        const qualificationTemplate = (qualification) => {
            return `
                <div class="qualification_content">
                    <h2 class="qualification-title">
                        <i class="${qualification.icon2}"></i>
                        ${qualification.title}
                    </h2>

                    <div class="bd-grid">
                        <div class="qualification_data">
                            <h3 class="qualification_area">${qualification.area}</h3>

                            <div class="qualification_box">
                                <span class="qualification_work">
                                    <i class="${qualification.icon}"></i>
                                    ${qualification.place}
                                </span>

                                <span class="qualification_work">
                                    <i class="${qualification.work}"></i>
                                    ${qualification.duration}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        };

        // adding the html to the page
        document.getElementById("home-social").innerHTML = `
            ${data.home.map(homeTemplate).join('')}
        `;

        document.getElementById("contact-info").innerHTML = `
            ${data.contact.map(contactTemplate).join('')}
        `;

        document.getElementById("serv").innerHTML = `
            ${data.serviceData.map(serviceTemplate).join('')}
        `;
        
        document.getElementById("portfolio-content").innerHTML = `
            ${data.portfolio.map(portfolioTemplate).join('')}
        `;

        document.getElementById("qualification-area").innerHTML = `
            ${data.qualification.map(qualificationTemplate).join('')}
        `;

        
    }
};
// request.open("GET", "constants.json", true);
request.send();

