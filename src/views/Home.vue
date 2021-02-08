<template>
  <div class="home">
    <Navbar />
    <TableActivity />
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import TableActivity from '@/components/TableActivity'
import Navbar from '@/components/Navbar'
import {store} from '../store/index'
export default {
  store,
  name: 'home',
  components: {
    TableActivity,
    Navbar
  },
  methods:{
    mounted(){
      
    }
  }
}
</script>
