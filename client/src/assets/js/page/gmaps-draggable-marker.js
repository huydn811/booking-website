const input_lat = $('#input-lat'); // latitude input text
const input_lng = $('#input-lng'); // longitude input text
const map = new GMaps({ // init map
  div: '#map',
  lat: -6.5637928,
  lng: 106.7535061,
});

// add marker
const marker = map.addMarker({
  lat: -6.5637928,
  lng: 106.7535061,
  draggable: true,
});

// when the map is clicked
map.addListener('click', (e) => {
  const lat = e.latLng.lat();
  const lng = e.latLng.lng();

  // move the marker position
  marker.setPosition({
    lat,
    lng,
  });
  update_position();
});

// when the marker is dragged
marker.addListener('drag', (e) => {
  update_position();
});

// set the value to latitude and longitude input
update_position();
function update_position() {
  const lat = marker.getPosition().lat(); const
    lng = marker.getPosition().lng();
  input_lat.val(lat);
  input_lng.val(lng);
}

// move the marker when the latitude and longitude inputs change in value
$('#input-lat,#input-lng').blur(() => {
  const lat = parseInt(input_lat.val());
  const lng = parseInt(input_lng.val());

  marker.setPosition({
    lat,
    lng,
  });
  map.setCenter({
    lat,
    lng,
  });
});
