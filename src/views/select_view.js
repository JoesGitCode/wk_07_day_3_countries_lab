const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
    this.element = element
}


SelectView.prototype.bindEvents = function(){
    PubSub.subscribe('Countries:country-loaded', (event) => {
        const allCountries = event.detail;
        this.populate(allCountries)
        console.log(allCountries)
        
        console.log('SelectView is subscribed to Countries:country-loaded')
    });

    this.element.addEventListener('change', (event) => {
        const selectedChange = event.target.value;
        PubSub.publish('SelectView:change', selectedChange);
    });
};

SelectView.prototype.populate = function(countryData) {
    console.log(countryData)
    
    countryData.forEach((country, index) => {
        const option = document.createElement('option');
        option.textContent = country.name;
        option.value = index;
        this.element.appendChild(option)
    })
}

module.exports = SelectView;