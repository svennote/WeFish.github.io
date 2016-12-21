var html = '';
var tempStr = '';
$(document).ready(function () {
  $.simpleWeather({
    location: 'Ghent, Oost-Vlaanderen',
    woeid: '',
    unit: 'C',
    success: function (weather) {
      html += '<h4>' + weather.code + '' + weather.temp + '&deg;' + weather.units.temp + '</h4>';
      html += '<ul><li><h4>' + weather.city + ', ' + weather.region + '</h4></li>';
      html += '<li class="currently">' + weather.currently + '</li>';
      html += '<li><i class="fa fa-compass" aria-hidden="true"></i> ' + weather.wind.direction + ' ' + weather.wind.speed + ' ' + weather.units.speed + '</li></ul>';

      $("#weather").html(html);
    },
    error: function (error) {
      $("#weather").html('<p>' + error + '</p>');
    }
  })
});