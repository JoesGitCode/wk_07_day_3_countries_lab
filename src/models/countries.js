const RequestHelper = require('../helpers/request_helper')
const PubSub = require('../helpers/pub_sub')

const Countries = function(){
    this.text = null
}

Countries.prototype.getData = function(){
    const request = new RequestHelper('https://restcountries.eu/rest/v2/all');
    request.get((data) => {
        console.log("data", data)
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

module.exports = Countries;
