// Multi-layer Linestring map
// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
	center: [44.0, -80.0],
	zoom: 2,
  layers: [dark]
});
// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/mspamelalea/Mapping_Earthquakes/master/torontoRoutes.json";

// add color Example
// var elevation950Style = {
//   color : "yellow",
//   fillColor : "yellow",
//   opacity : 0.4,
//   weight : 2,
//   };
//   $.getJSON('950.geo.json', function(file) {
//      L.geoJson( file ,  { style: elevation950Style } ).addTo(map);
//   });
var lineStyle = {
  color : "yellow",
  fillColor : "yellow",
  opacity : 0.4,
  weight : 2,
  };
// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
   L.geoJson(data, {style: lineStyle, onEachFeature: function(feature, layer) {

   layer.bindPopup("<h3>" + "Airline: " + feature.properties.airline + "</h3>"
               +   "<hr><p>"  + "Destination: " + feature.properties.dst + "</p>")
  }
 }).addTo(map);
});

// Create a base layer that holds both maps.
let baseMaps = {
  Street: light,
  Dark: dark
};

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

