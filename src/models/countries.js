const RequestHelper = require('../helpers/request_helper')
const PubSub = require('../helpers/pub_sub')

const Countries = function(){
    this.text = null
}

Countries.prototype.getData = function(){
    const request = new RequestHelper('https://restcountries.eu/rest/v2/all');
    request.get((data) => {
        this.text = data;
        PubSub.publish('Countries:country-loaded', this.text)
        console.log('Countries published Countries:country-loaded');

        PubSub.subscribe('SelectView:change', (event) => {
            const selectedChange = event.detail;
            this.publishCountriesDetail(selectedChange)
            console.log('Countries subscribed to SelectView:change')
        })
    })
}

Countries.prototype.publishCountriesDetail = function(countryIndex){
    const selectedCountry = this.text[countryIndex];
    PubSub.publish('Countries:selected-country-ready', selectedCountry)
    console.log('Countries has published Countries:selected-country-ready')
}

module.exports = Countries;
