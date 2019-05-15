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
}


module.exports = InfoView;