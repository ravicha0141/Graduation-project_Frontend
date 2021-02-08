<template>
  <div >
    <vue-script-src v-if="$store.getters.loginstatus==true"
      :sources="['https://cdn.onesignal.com/sdks/OneSignalSDK.js']"
      @complete="handleComplete();"
    ></vue-script-src>
    <NavbarSt />
    <TableActivity />
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import TableActivity from '@/components/TableActivity'
import NavbarSt from '@/components/NavbarSt'
import {store} from '../../store/index'
import axios from 'axios'
import VueScriptSrc from 'vue-script-src'

export default {
  store,
  name: 'homest',
  components: {
    TableActivity,
    NavbarSt,
    VueScriptSrc,
  },
  data(){
    return{
    
    }
  },
  mounted(){
    if(this.$store.getters.loginstatus==false){
      this.$router.push({name:"home"})
      }
      console.log("user_id on mounted :"+this.$store.getters.user_id)

      //setInterval(this.handleComplete(this.$store.getters.user_id),20000)
      console.log(this.$store.getters.activitylist)
  },
  methods:{
      handleComplete(){
        var OneSignal = window.OneSignal || [];
                OneSignal.push(function() {
                OneSignal.init({
                appId: "254c6187-3f0e-427d-a68f-b4076f25a8a4",
                    });
              setTimeout(OneSignal.registerForPushNotifications(),10000)
          })
          let checkenable=false
          while(checkenable){
                OneSignal.isPushNotificationsEnabled(function(isEnabled) {
                  if (isEnabled) {
                       checkenable=true
                  }
                });
          }
          let device_code=''
          let user_idinf=this.$store.getters.user_id
          OneSignal.push(function() {
            OneSignal.getUserId(function(userId) {
              device_code=userId
              console.log("user_id in function :"+user_idinf)
                    axios.post("https://rmutp01.herokuapp.com/api/saveDevice",{
                      "user_id":user_idinf,
                      "device_code":userId
                      }).then((response) => {
                        console.log(response)
                        })    
                        .catch((errors) => { 
                      }) 
                      console.log("device_code : "+userId)
                       })
              }
        )}       
      
    
  },

}
</script>
