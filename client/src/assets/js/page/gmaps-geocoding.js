// initialize map
const map = new GMaps({
  div: '#map',
  lat: -6.5637928,
  lng: 106.7535061,
});

// when the form is submitted
$('#search-form').submit((e) => {
  e.preventDefault();

  // initialize map geocode
  GMaps.geocode({
    address: $('#address').val(),
    callback(results, status) {
      if (status == 'OK') {
        const latlng = results[0].geometry.location;
        map.setCenter(latlng.lat(), latlng.lng());
        map.addMarker({
          lat: latlng.lat(),
          lng: latlng.lng(),
        });
      }
    },
  });
});
