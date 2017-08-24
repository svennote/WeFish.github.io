var html = '';
var tempStr = '';
$(document).ready(function () {
  $.simpleWeather({
    location: 'Ghent, Oost-Vlaanderen',
    woeid: '',
    unit: 'C',
    success: function (weather) {
      html += '<h5><i class="icon-' + weather.code + '"></i> ' + weather.temp + '&deg;' + weather.units.temp + '</h5>';

      $("#weather").html(html);
    },
    error: function (error) {
      $("#weather").html('<p>' + error + '</p>');
    }
  })
});