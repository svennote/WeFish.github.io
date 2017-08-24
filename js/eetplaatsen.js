var requestURL = 'https://datatank.stad.gent/4/milieuennatuur/ecoplan.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var Data = request.response;
  var i = 0;
  var resultaten = "";
while (i < Data.length) {
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
    resultaten += "<div class='extra-info'>";
    resultaten += Data[i].LABEL;
    resultaten += "</div>";
    resultaten += "<br />";
    resultaten += "<br />";
	resultaten += "</div>";
	i++;
};
document.querySelector('.resultaten').innerHTML = resultaten;
}