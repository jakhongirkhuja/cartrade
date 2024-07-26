<template>
  <div id="map" style="height: 500px; width: 100%;"></div>
</template>

<script>
export default {
  name: 'GoogleMap',
  mounted() {
    this.loadGoogleMapsScript();
  },
  methods: {
    loadGoogleMapsScript() {
      if (!document.getElementById('google-maps-script')) {
        const script = document.createElement('script');
        script.id = 'google-maps-script';
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAFYqOfACbdy8miyddYUnshlin6GEkAzFA`;
        script.async = true;
        script.defer = true;
        script.onload = this.initMap;
        document.head.appendChild(script);
      } else {
        this.initMap();
      }
    },
    initMap() {
      // Tashkent coordinates
      const tashkent = { lat: 41.2995, lng: 69.2401 };

      // Create a map centered in Tashkent
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: tashkent
      });

      // Create a marker at Tashkent location
      const marker = new google.maps.Marker({
        position: tashkent,
        map: map,
        title: 'Tashkent'
      });

      // Custom information to display in the info window
      const infoContent = '<div><h1>Tashkent</h1><p>The capital city of Uzbekistan.</p></div>';

      // Create an info window
      const infowindow = new google.maps.InfoWindow({
        content: infoContent
      });

      // Open the info window when the marker is clicked
      marker.addListener('click', () => {
        infowindow.open(map, marker);
      });
    }
  }
};
</script>

<style scoped>
#map {
  height: 500px;
  width: 100%;
}
</style>
