var map;
      function initMap() {
        var UDBS = {lat: 13.715914, lng: -89.153709};
        var UDBSS = {lat: 13.67401, lng: -89.236772};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: UDBS
        });
        var marker = new google.maps.Marker({
          position: UDBS,
          map: map
        });
        var marker = new google.maps.Marker({
          position: UDBSS,
          map: map
        });
      }s