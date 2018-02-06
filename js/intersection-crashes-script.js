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

var navDuval = L.Toolbar2.Action.extend({
	options: {
		toolbarIcon: {
			html: 'Duval County',
			tooltip: 'Duval County'
		}
	},
	
	addHooks: function() {
		map.setView([30.364,-81.652],10);
	}
});

var navClay = L.Toolbar2.Action.extend({
	options: {
		toolbarIcon: {
			html: 'Clay County',
			tooltip: 'Clay County'
		}
	},
	
	addHooks: function() {
		map.setView([30.077,-81.801],12);
	}
});

var navStJohns = L.Toolbar2.Action.extend({
	options: {
		toolbarIcon: {
			html: 'St. Johns County',
			tooltip: 'St. Johns County'
		}
	},
	
	addHooks: function() {
		map.setView([29.987,-81.482],11);
	}
});

var navNassau = L.Toolbar2.Action.extend({
	options: {
		toolbarIcon: {
			html: 'Nassau County',
			tooltip: 'Nassau County'
		}
	},
	
	addHooks: function() {
		map.setView([30.563,-81.801],11);
	}
});

var navBaker = L.Toolbar2.Action.extend({
	options: {
		toolbarIcon: {
			html: 'Baker County',
			tooltip: 'Baker County'
		}
	},
	
	addHooks: function() {
		map.setView([30.360,-82.394],11);
	}
});

var navColumbia = L.Toolbar2.Action.extend({
	options: {
		toolbarIcon: {
			html: 'Columbia County',
			tooltip: 'Columbia County'
		}
	},
	
	addHooks: function() {
		map.setView([30.211,-82.907],10);
	}
});

var navUnion = L.Toolbar2.Action.extend({
	options: {
		toolbarIcon: {
			html: 'Union County',
			tooltip: 'Union County'
		}
	},
	
	addHooks: function() {
		map.setView([30.033,-82.425],12);
	}
});

var navBradford = L.Toolbar2.Action.extend({
	options: {
		toolbarIcon: {
			html: 'Bradford County',
			tooltip: 'Bradford County'
		}
	},
	
	addHooks: function() {
		map.setView([29.930,-82.372],11);
	}
});

var navPutnam = L.Toolbar2.Action.extend({
	options: {
		toolbarIcon: {
			html: 'Putnam County',
			tooltip: 'Putnam County'
		}
	},
	
	addHooks: function() {
		map.setView([29.594,-81.912],11);
	}
});

var navFlagler = L.Toolbar2.Action.extend({
	options: {
		toolbarIcon: {
			html: 'Flagler County',
			tooltip: 'Flagler County'
		}
	},
	
	addHooks: function() {
		map.setView([29.466,-81.422],11);
	}
});

var navAlachua = L.Toolbar2.Action.extend({
	options: {
		toolbarIcon: {
			html: 'Alachua County',
			tooltip: 'Alachua County'
		}
	},
	
	addHooks: function() {
		map.setView([29.685,-82.479],11);
	}
});


new L.Toolbar2.Control({
	position: "topright",
	actions: [navAlachua,navBaker,navBradford,navClay,navColumbia,navDuval,navFlagler,navNassau,navPutnam,navStJohns,navUnion]
}).addTo(map)

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