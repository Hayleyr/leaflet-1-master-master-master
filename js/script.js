var map = L.map('map').setView([39.8282, -98.5795], 5);

L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 18
}).addTo(map);

//define parks icon

var loveIcon = L.icon({
    iconUrl: 'img/love.png',
    //shadowUrl: 'leaf-shadow.png',

    iconSize:     [32, 37], // size of the icon
    shadowSize:   [51, 37], // size of the shadow
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

$('.seattle').on('click', function(){
	map.panTo(new L.LatLng(47.6097, -122.3331), {animate: true, duration: 1.0});


});

$('.losangeles').on('click', function(){
	map.panTo(new L.LatLng(34.0500, -118.2500), {animate: true, duration: 1.0});


});

$('.atlanta').on('click', function(){
	map.panTo(new L.LatLng(33.7550, -84.3900), {animate: true, duration: 1.0});


});
$('.washingtondc').on('click', function(){
	map.panTo(new L.LatLng(38.8951, -77.0367), {animate: true, duration: 1.0});


});
$('.brooklyn').on('click', function(){
	map.panTo(new L.LatLng(40.6928, -73.9903), {animate: true, duration: 1.0});


});
$('.roanoke').on('click', function(){
	map.panTo(new L.LatLng(37.2667, -79.9333), {animate: true, duration: 1.0});


});
$('.chicago').on('click', function(){
	map.panTo(new L.LatLng(41.8369, -87.6847), {animate: true, duration: 1.0});


});
$('.philadelphia').on('click', function(){
	map.panTo(new L.LatLng(39.9500, -75.1667), {animate: true, duration: 1.0});


});
$('.coloradosprings').on('click', function(){
	map.panTo(new L.LatLng(38.8633, -104.7919), {animate: true, duration: 1.0});


});

//create markers for parks 

var seattlemarker = L.marker([47.6097, -122.3331,], {icon: loveIcon}).addTo(map);
seattlemarker.bindPopup("<h3>Seattle </h3><br>October 2010-December 2011").openPopup();

var atlantamarker = L.marker([33.7550, -84.3900,], {icon: loveIcon}).addTo(map);
atlantamarker.bindPopup("<h3>Atlanta</h3> <br>June 2008-October 2010").openPopup();

var brooklynmarker = L.marker([40.6928, -73.9903,], {icon: loveIcon}).addTo(map);
brooklynmarker.bindPopup("<h3>Brooklyn</h3> <br>January 2013-Present").openPopup();

var losangelesmarker = L.marker([34.0500, -118.2500,], {icon: loveIcon}).addTo(map);
losangelesmarker.bindPopup("<h3>Los Angeles</h3><br>January 2012-January 2013").openPopup();

var washingtondcmarker = L.marker([38.8951, -77.0367,], {icon: loveIcon}).addTo(map);
washingtondcmarker.bindPopup("<h3>Washington DC</h3><br>September 2005-June 2007").openPopup();

var chicagomarker = L.marker([41.8369, -87.6847,], {icon: loveIcon}).addTo(map);
chicagomarker.bindPopup("<h3>Chicago</h3> <br>May 1984-August 1993").openPopup();

var roanokemarker = L.marker([37.2667, -79.9333,], {icon: loveIcon}).addTo(map);
roanokemarker.bindPopup("<h3>Roanoke</h3> <br>August 1993-September 2002").openPopup();

var coloradospringsmarker = L.marker([38.8633, -104.7919,], {icon: loveIcon}).addTo(map);
coloradospringsmarker.bindPopup("<h3>Colo Springs</h3><br>September 2002-March 2004").openPopup();

var philadelphiamarker = L.marker([39.9500, -75.1667,], {icon: loveIcon}).addTo(map);
philadelphiamarker.bindPopup("<h3>Philadelphia</h3><br>June 2007-June 2008").openPopup();

//listeners for sidebar hovers 

$('.index').on('mouseover', function(){

$(this).css('color', '#575757');
});

$('.index').on('mouseout', function(){

$(this).css('color', '#ffffff');
});

// central park click listener

//listeners for map hover 
centralparkmarker.on('mouseover', function(){
	$('.centralPark').toggleClass('hover');
})
	.on('mouseout', function() {
		$('.centralPark').toggleClass('hover');

	

});
	prospectparkmarker.on('mouseover', function(){
	$('.prospectPark').toggleClass('hover');
})
	.on('mouseout', function() {
		$('.prospectPark').toggleClass('hover');

	


});


		riversideparkmarker.on('mouseover', function(){
	$('.riversidePark').toggleClass('hover');
})
	.on('mouseout', function() {
		$('.riversidePark').toggleClass('hover');

	

});


