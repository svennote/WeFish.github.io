function myMap() {
  var mapCanvas = document.getElementsByClassName("stedenwrapper");
  var mapOptions = {
    center: new google.maps.LatLng(51,3.8),
    zoom: 10
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);
}