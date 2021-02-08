<template>
  <div>
      <NavbarSt />
      <div style="height:225px;"></div>
     <center><qrcode-vue :value="myqr" :size="225" level="H"></qrcode-vue></center>
    
  </div>
</template>

<script>

import {store} from '../../store/index'
import axios from 'axios'
import NavbarSt from '../../components/NavbarSt'
import QrcodeVue from 'qrcode.vue'
export default {
    store,
    components: {
    QrcodeVue,
    NavbarSt,
    
  },
  data(){
      return{
        myqr:this.$store.getters.stu_id  
      }
  },
  methods:{

  },
  mounted(){
      if(this.$store.getters.loginstatus==false){
        this.$router.push({name:'home'})
      }
      console.log(this.myqr)
  }

}
</script>

<style>

</style>