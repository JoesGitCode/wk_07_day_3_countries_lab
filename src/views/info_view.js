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
}


module.exports = InfoView;