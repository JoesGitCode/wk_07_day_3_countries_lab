const Countries = require('./models/countries.js')
const SelectView = require('./views/select_view.js')
const InfoView = require('./views/info_view.js')

document.addEventListener('DOMContentLoaded', () => {
  
  const selectElement = document.querySelector('select#countries');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const infoContainer = document.querySelector('div#country-info')
  const countryInfoView = new InfoView(infoContainer)
  countryInfoView.bindEvents();
  

  const countries = new Countries()
  countries.getData();
});
