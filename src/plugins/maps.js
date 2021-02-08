import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'YOUR_API_KEY',
    v: 'GOOGLE_MAPS_VERSION',
    libraries: 'places' // Only if you need Autocomplete
  }
})