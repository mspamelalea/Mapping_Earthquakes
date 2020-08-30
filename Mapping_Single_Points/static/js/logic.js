// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level. 
// Set view to geological center of U.S. The '4' sets the zoom level
// on a scale 0–18
let map = L.map('mapid').setView([40.7, -94.5], 4);
// Alternative code
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);
// Change the marker to a circle with radious 1000 meters
// L.circle([34.0522, -118.2437], {
	// radius: 1000
//  }).addTo(map);
// L.circle([37.354107, -121.955238], {
// 	radius: 30000, //This is meters
// 	color: "black",
// 	fillColor: '#ffffa1'
// }).addTo(map);
L.circleMarker([34.0522, -118.2437], {
	radius: 30, //This is pixels
	color: "black",
	fillColor: '#ffffa1'
}).addTo(map);
 
// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', 
//Change map to dark
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

