let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 59.330287, lng: 18.068278 },
    zoom: 12,
  });

  //////////////////////////////////////////////////////////////////////////////////////////
  const KTHLibraryLatLng = { lat: 59.34797912864201, lng: 18.07287220429032 };
  const KTHLibraryMarker = new google.maps.Marker({
    position: KTHLibraryLatLng,
    map,
    title: "Click to zoom",
  });

  KTHLibraryMarker.addListener("click", () => {
    map.setZoom(18);
    map.setCenter(KTHLibraryMarker.getPosition());
  });

  //////////////////////////////////////////////////////////////////////////////////////////
  map.data.loadGeoJson("static/data.geojson");

  //////////////////////////////////////////////////////////////////////////////////////////
  //HIGHLIGHT METRO DATA
  const initStyle = {
    strokeColor: "gray",
    strokeOpacity: "0.5",
  };

  //0.initiate metro data style
  map.data.setStyle(initStyle);

  //1.when the mouse hovers on the metro line, the line will highlight
  map.data.addListener("mouseover", function (event) {
    map.data.setStyle({
      strokeColor: "blue",
      strokeOpacity: "1",
      strokeWeight: 3,
    });
  });

  //2.when the mouse leave the metro line, the line will become its original style
  map.data.addListener("mouseout", function (event) {
    map.data.setStyle(initStyle);
  });

  //////////////////////////////////////////////////////////////////////////////////////////
  //DISPLAY LINE NUMBER
}

initMap();
