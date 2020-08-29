// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level. 
// Set view between LA and San Francisco
// The '5' sets the zoom level
// on a scale 0–20
let map = L.map('mapid').setView([30, 30], 2);

// We create the tile layer that will be the background of our map.
//This is outdoors map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/mspamelalea/Mapping_Earthquakes/master/majorAirports.json";


// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
     L.geoJson(data, {onEachFeature: function(feature, layer) {
      layer.bindPopup("<h2>" + "Airport Code: " + feature.properties.faa + "</h2>"
                  +  "<h3>"  + "Airiport Name: " + feature.properties.name + "</h3>")
     }
  // Creating a GeoJSON layer with the retrieved data.
    }).addTo(map);
  });
