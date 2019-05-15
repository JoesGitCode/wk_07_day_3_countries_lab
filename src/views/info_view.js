const PubSub = require('../helpers/pub_sub.js')

const InfoView = function(container){
    this.container = container
}

InfoView.prototype.bindEvents = function(){
    PubSub.subscribe('Countries:selected-country-ready', (event) => {
        console.log('InfoView has subscribed to Countries:selected-country-ready')
        const countryInfo = event.detail;
        this.render(countryInfo);
    });
}

InfoView.prototype.render = function(country){
    this.container.innerHTML = ''

    const name = document.createElement('h2');
    name.textContent = country.name;
    this.container.appendChild(name) 

    const img = document.createElement('img')
    img.src = country.flag
    this.container.appendChild(img)

    const region = document.createElement('h3')
    region.textContent = `Region: ${country.region}`;
    this.container.appendChild(region)

    country.languages.forEach((language) => {
        console.log(language.name)

        const li = document.createElement('li')
        li.textContent = language.name

        this.container.appendChild(li)
    })
}




    // for (let language of country.languages){
    //     console.log(language.name)
    //     this.container.appendChild(language)
    // }


// InfoView.prototype.createLi = function(textContent, ul)
//     const li = document.createElement('li')
//     for (language of country.languages){
//         this.container.ul.appendChild(language)
//     }

module.exports = InfoView;