var html = '';
var tempStr = '';
$(document).ready(function () {
  $.simpleWeather({
    location: 'Ghent, Oost-Vlaanderen',
    woeid: '',
    unit: 'C',
    success: function (weather) {
      html += '<h2><i class="icon-' + weather.code + '"></i> ' + weather.temp + '&deg;' + weather.units.temp + '</h2>';

      $("#weather").html(html);
    },
    error: function (error) {
      $("#weather").html('<p>' + error + '</p>');
    }
  })
});

var requestURL = 'https://datatank.stad.gent/4/milieuennatuur/ecoplan.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var Data = request.response;
  var i = 0;
  var resultaten = "";
while (i < 3) {
	resultaten += "<div class='eetplaatstotaal'>";
    resultaten += "<br />";
    resultaten += "<br />";
	resultaten += Data[i].NAAM;
    resultaten+= "" + "|" + "";
	resultaten += Data[i].STRAAT+ ' ' + Data[i].NUMMER;
    resultaten+= "" + "|" + "";
    resultaten += Data[i].telefoon;
    resultaten += "";
    resultaten += "<br />";
    resultaten += "<br />";
    resultaten += "<br />";
	resultaten += "</div>";
	i++;
};
document.querySelector('.resultaten').innerHTML = resultaten;
}

