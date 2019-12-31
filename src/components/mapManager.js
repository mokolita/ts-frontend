class MapManager {
    //instiantated by any pagemanger, and spit out map HTML.

    constructor(container){
        this.container = container 
        this.map = new google.maps.Map(this.container, {
            zoom: 8,
            center: {lat: 40.72, lng: -73.96}
          });
        this.geocoder = new google.maps.Geocoder;
        this.infowindow = new google.maps.InfoWindow;
        geocodePlaceId(geocoder, map, infowindow)
    }

    

      // This function is called when the user clicks the UI button requesting
      // a geocode of a place ID.
      geocodePlaceId(geocoder, map, infowindow) {
        var placeId = document.getElementById('place-id').value;
        geocoder.geocode({'placeId': placeId}, function(results, status) {
          if (status === 'OK') {
            if (results[0]) {
              map.setZoom(11);
              map.setCenter(results[0].geometry.location);
              var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
              });
              infowindow.setContent(results[0].formatted_address);
              infowindow.open(map, marker);
            } else {
              window.alert('No results found');
            }
          } else {
            window.alert('Geocoder failed due to: ' + status);
          }
        });
      }

      getAllPlaceIds(){
          //
      }
}