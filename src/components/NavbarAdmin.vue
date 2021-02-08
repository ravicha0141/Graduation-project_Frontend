<template>

  <div>
    <div>
    <v-app-bar
      class="toolbar back"
      
    >
      <v-btn
          icon
          @click.stop="drawer = !drawer"
        >
        <v-app-bar-nav-icon class="btn nav icon" large></v-app-bar-nav-icon>
      </v-btn>

      <v-toolbar-title class="font title">ADMIN RMUTP Activity </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon  class="btn nav icon">
        <v-icon large @click="LogoutRouter()" class="btn nav icon">mdi-logout-variant</v-icon>
      </v-btn>
      </v-app-bar>
    </div>

<v-navigation-drawer
      v-model="drawer"
      app class = "navbar bg"
    >
      <v-list
        nav
        dense
        
      >
        <v-list-item-group
          v-model="group"
        >
          <!-- <v-list-item>
            <v-list-item-title class="font title">RMUTP Activity</v-list-item-title>
          </v-list-item> -->
          <v-list-item>
            <v-list-item-title @click="ActivityRouterAll()" class="fontlist i">กิจกรรมทั้งหมด</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="ActivityRouterU()" class="fontlist i">กิจกรรมมหาวิทยาลัย</v-list-item-title>
          </v-list-item>

          <v-menu bottom :offset-x="offset">
      <template v-slot:activator="{ on }">
        <v-btn
          text
          class="nav btn"
          v-on="on"
        >
          กิจกรรมพัฒนานักศึกษาสู่<br>การเป็นบัณฑิตพึงประสงค์
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </template>

      <v-list>
          <v-list-item @click="ActivityRouterD1()" class="fontlist i">กิจกรรมวิชาการและวิชาชีพ</v-list-item>
          <v-list-item @click="ActivityRouterD2()" class="fontlist i">กิจกรรมกีฬาและนันทนาการ</v-list-item>
          <v-list-item @click="ActivityRouterD3()" class="fontlist i">กิจรรมบำเพ็ญประโยชน์หรือรักษาสิ่งแวดล้อม</v-list-item>
          <v-list-item @click="ActivityRouterD4()" class="fontlist i">กิจกรรมเสริมสร้างคุณธรรม จริยธรรม</v-list-item>
          <v-list-item @click="ActivityRouterD5()" class="fontlist i">กิจกรรมอนุรักษ์ศิลปวัฒนธรรม</v-list-item>
      </v-list>
    </v-menu>


          <v-list-item >
            <v-list-item-title @click="ChangeRouter()" class="fontlist i"> เปลี่ยนรหัสผ่าน </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="CreatRouter()" class="fontlist i"> สร้างกิจกรรม </v-list-item-title>
          </v-list-item>



        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    
  </div>
</template>
<script>
import axios from 'axios'
import {store} from '../store/index'
  export default {
    store,
    data (){
      return{
        drawer: false,
      group: null,
      offset: true,
      }
    },
    watch: {
      group() {
        this.drawer = false
      },
    },
    methods: {
        ActivityRouterAll() {
            this.$store.commit('set_ActivityType','กิจกรรมทั้งหมด')
            this.$store.commit('set_ActivityType_id','all')
            this.getactivitylist('all')
            if (this.$route.name !== 'HomeAdmin') this.$router.push({name:'HomeAdmin'})
        },
        ActivityRouterU() {
            this.$store.commit('set_ActivityType','กิจกรรมมหาวิทยาลัย')
            this.$store.commit('set_ActivityType_id','univer')
            this.getactivitylist('univer')
            if (this.$route.name !== 'HomeAdmin') this.$router.push({name:'HomeAdmin'})
        },
        ActivityRouterD1() {
            this.$store.commit('set_ActivityType','กิจกรรมวิชาการและวิชาชีพ')
            this.$store.commit('set_ActivityType_id',1)
            this.getactivitylist(1)
            if (this.$route.name !== 'HomeAdmin') this.$router.push({name:'HomeAdmin'})
        },
        ActivityRouterD2() {
            this.$store.commit('set_ActivityType','กิจกรรมกีฬาและนันทนาการ')
            this.$store.commit('set_ActivityType_id',2)
            this.getactivitylist(2)
            if (this.$route.name !== 'HomeAdmin') this.$router.push({name:'HomeAdmin'})
        },
        ActivityRouterD3() {
            this.$store.commit('set_ActivityType','กิจรรมบำเพ็ญประโยชน์หรือรักษาสิ่งแวดล้อม')
            this.$store.commit('set_ActivityType_id',3)
            this.getactivitylist(3)
            if (this.$route.name !== 'HomeAdmin') this.$router.push({name:'HomeAdmin'})
        },
        ActivityRouterD4() {
            this.$store.commit('set_ActivityType','กิจกรรมเสริมสร้างคุณธรรม จริยธรรม')
            this.$store.commit('set_ActivityType_id',4)
            this.getactivitylist(4)
            if (this.$route.name !== 'HomeAdmin') this.$router.push({name:'HomeAdmin'})
        },
        ActivityRouterD5() {
            this.$store.commit('set_ActivityType','กิจกรรมอนุรักษ์ศิลปวัฒนธรรม')
            this.$store.commit('set_ActivityType_id',5)
            this.getactivitylist(5)
            if (this.$route.name !== 'HomeAdmin') this.$router.push({name:'HomeAdmin'})
        },
        getactivitylist(type_id){
          axios.post('https://rmutp01.herokuapp.com/api/getactivitylist',
                {
                activitytype_id:type_id,
                }
                ).then(response => {
                  console.log(response)
                  this.$store.state.activitylists=[];
                  for (var key of response.data) {
                  this.set_activitylist(key.title,this.datetranslate(key.date_act_start)
                  ,key.people_regis,
                  key.people,key.activity_id)
                }
                })
        },
        set_activitylist(title,date_act_start,people_regis,people,activity_id){  
          this.$store.dispatch('set_activitylist', {
          title: title,
          date_act_start: date_act_start, 
          people_regis: people_regis, 
          people: people,
          activity_id:activity_id
      })
    },
    datetranslate(datefull){
            let date=parseInt(datefull.substring(8,10))+" "
            let month=parseInt(datefull.substring(5,7))
            if(month==1){month='มกราคม'}else
            if(month==2){month='กุมภาพันธ์'}else
            if(month==3){month='มีนาคม'}else
            if(month==4){month='เมษายน'}else
            if(month==5){month='พฤษภาคม'}else
            if(month==6){month='มิถุนายน'}else
            if(month==7){month='กรกฎาคม'}else
            if(month==8){month='สิงหาคม'}else
            if(month==9){month='กันยายน'}else
            if(month==10){month='ตุลาคม'}else
            if(month==11){month='พฤศจิกายน'}else
            if(month==12){month='ธันวาคม'}
            let year=" "+(parseInt(datefull.substring(0,4))+543).toString()
            let date_act_start=date+month+year
            return date_act_start
          },
        CreatRouter(){
          if(this.$route.name !=='InsertActivity')this.$router.push({name:'InsertActivity'})
        },
        ChangeRouter(){
          if(this.$route.name !=='Changepasswordadmin')this.$router.push({name:'Changepasswordadmin'})
        },
        LogoutRouter(){
          this.$store.commit('set_loginstatus',false)
          this.$router.push({name: 'loginadmin'})
        },
    },
    mounted(){
      if(this.$store.getters.loginstatus==false){
        this.$router.push({name:'loginadmin'})
      }
      this.getactivitylist(this.$store.getters.ActivityType_id)
    }
  }
</script>