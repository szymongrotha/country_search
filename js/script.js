var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
$('#search').click(searchCountries);

function searchCountries() {
 	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';

	$.ajax ({
		url : url + countryName,
		methoud: 'GET',
		success: showCountriesList
	});
}

function showCountriesList(resp) {
	countriesList.empty();
	resp.forEach(function(item){ 
	var url2= 'http://www.geognos.com/api/en/countries/flag/' + item.alpha2Code + '.png';
	$('<div class="list">').appendTo(countriesList)
		.append($('<h3>').text(item.name))
		.append($('<div class="flag">').css("background-image", "url(" + url2 + ")"))
		.append($('<p>').text('Capital: ' + item.capital))
		.append($('<p>').text('Region: ' + item.region))
		.append($('<p>').text('Population: ' + item.population))
		.append($('<p>').text('Currencies: ' + item.currencies));
});
}