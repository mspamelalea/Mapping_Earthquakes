// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level. 
// Set view between LA and San Francisco
// The '5' sets the zoom level
// on a scale 0–20
let map = L.map('mapid').setView([36.1733, -122.3790], 5);

// Coordinates for each point to be used in the line.
// (LAX to SFO) and two more airport stops:
//Salt Lake City International Airport (SLC) 
//and Seattle-Tacoma International Airport (SEA).
// let line = [
//     [33.9416, -118.4085], //LAX
//     [37.6213, -122.3790], //SFO
//     [40.7899, -111.9791], //SLC
//     [47.4502, -122.3088]  //SEA
//   ];
let line = [
    [37.6213, -122.3790], //SFO
    [30.1974, -97.6663], //AUS
    [36.1245, -86.6781], //BNA
    [43.6775, -79.6308], //YYZ
    [40.6437, -73.79]   //JFK
];
// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    //color: "red"
    color: "blue",
    dashArray: '10,10',
    opacity: 0.5,
    weight: '4'
  }).addTo(map);
  
// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', 

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);