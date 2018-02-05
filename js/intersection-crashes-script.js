var layer = new L.StamenTileLayer('terrain');

var map = new L.Map('map').setView([30.364,-81.652],10);
map.addLayer(layer);

var geoJson;

function setStyle(feature) {
	return {
		opacity: 1,
		weight: 2,
		color: "#FFF",
		fillColor: "#000000",
		fillOpacity: 0
	}
}

L.geoJson(counties, {style: setStyle}).addTo(map);

for (var num = 0; num < intersections.length; num++) {
	var intersection = intersections[num];
	var intersection_lat = intersection["latitude"];
	var intersection_long = intersection["longitude"];
	var intersection_name = intersection["Intersection"];
	var intersection_county = intersection["County"];
	var intersection_crashes = intersection["Crashes"];
	
	var marker = L.marker([intersection_lat,intersection_long]).addTo(map);
	
	var popup_html = '<h3>' + intersection_name + '</h3>';
	popup_html += '<div><strong>Crashes in 2016:</strong> ' + intersection_crashes + '</div>';
	
	marker.bindPopup(popup_html);
}