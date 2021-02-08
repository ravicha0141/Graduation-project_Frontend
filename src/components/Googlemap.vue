<template>
  <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.3312541969035!2d100.51209931465506!3d13.819136890303918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29b877800c9af%3A0xd754c571fc7177b!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14Lie4Lij4Liw4LiI4Lit4Lih4LmA4LiB4Lil4LmJ4Liy4Lie4Lij4Liw4LiZ4LiE4Lij4LmA4Lir4LiZ4Li34Lit!5e0!3m2!1sth!2sth!4v1579847800783!5m2!1sth!2sth" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
    <!-- <div class="google-map" ref="googleMap"></div>
    <template v-if="Boolean(this.google) && Boolean(this.map)">
      <slot
        :google="google"
        :map="map"
      />
    </template> -->
  </div>
</template>
// <script>
// import GoogleMapsApiLoader from 'google-maps-api-loader'
// export default {
//     props: {
//     mapConfig: Object,
//     apiKey: String,
//   },

//   data() {
//     return {
//       google: null,
//       map: null
//     }
//   },

//   async mounted() {
//     const googleMapApi = await GoogleMapsApiLoader({
//       apiKey: this.apiKey
//     })
//     this.google = googleMapApi
//     this.initializeMap()
//   },

//   methods: {
//     initializeMap() {
//       const mapContainer = this.$refs.googleMap
//       this.map = new this.google.maps.Map(
//         mapContainer, this.mapConfig
//       )
//     }
//   }
// }
// </script>