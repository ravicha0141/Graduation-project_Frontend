<template>

  <div>
    <v-app-bar
      class="toolbar back"
    >
      <v-btn
          icon v-on="on"
          @click.stop="drawer = !drawer"
        >
        <v-app-bar-nav-icon large class="btn nav icon"></v-app-bar-nav-icon>
      </v-btn>

      <v-toolbar-title class="font title">RMUTP Activity</v-toolbar-title>

      <v-spacer></v-spacer>
      <h4 class="nametool">{{$store.getters.name}}  {{$store.getters.surname}}</h4>
      <v-btn icon class="btn nav icon">
        <v-icon large @click="LogoutRouter()" >mdi-logout-variant</v-icon>
      </v-btn>

      <!-- <v-btn icon>
        <v-icon>mdi-bell-alert-outline</v-icon>
      </v-btn> -->
      </v-app-bar>
      <v-row justify="space-around">
      <v-col cols="12">

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
            <v-list-item-title @click="ProfileRouter()" class="fontlist i"> โปร์ไฟล์ </v-list-item-title>
          </v-list-item>

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
          dark
          v-on="on"
        >กิจกรรมพัฒนานักศึกษาสู่<br>การเป็นบัณฑิตพึงประสงค์
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
    <br>
    <v-menu bottom :offset-x="offset">
      <template v-slot:activator="{ on }">
        <v-btn
          text
          class="nav btn"
          v-on="on"
        >
          ประวัติกิจกรรม
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </template>
      <v-list>
          <v-list-item @click="ActivityRouterSave()" class="fontlist i">กิจกรรมที่บันทึก</v-list-item>
          <v-list-item @click="ActivityRouterRegis()" class="fontlist i">กิจกรรมที่ลงทะเบียน</v-list-item>
      </v-list>
    </v-menu>

          <v-list-item>
            <v-list-item-title @click="QRRouter()" class="fontlist i"> คิวอาร์โค้ด </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="ChangepasswordRouter()"> เปลี่ยนรหัสผ่าน </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="TranscriptRouter()"> ทรานสคริปกิจกรรม </v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

</v-col>
</v-row>
    
  </div>
</template>
<script>
import axios from 'axios'
import {store} from '../store/index'
  export default {
    store,
    data: () => ({
      drawer: false,
      group: null,
      dialog: false,
      show1: false,
      history:[
        { title: 'กิจกรรมที่บันทึก' },
        { title: 'กิจกรรมที่ลงทะเบียน' },
        { title: 'กิจรรมที่เคยเข้าร่วม' },
      ],
      offset: true,  
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
    methods: {
        ActivityRouterAll() {
            this.$store.commit('set_ActivityType','กิจกรรมทั้งหมด')
            this.$store.commit('set_ActivityType_id','all')
            this.getactivitylist('all')
            if (this.$route.name !== 'homest') this.$router.push({name:'homest'})
        },
        ActivityRouterU() {
            this.$store.commit('set_ActivityType','กิจกรรมมหาวิทยาลัย')
            this.$store.commit('set_ActivityType_id','univer')
            this.getactivitylist('univer')
            if (this.$route.name !== 'homest') this.$router.push({name:'homest'})
        },
        ActivityRouterD1() {
            this.$store.commit('set_ActivityType','กิจกรรมวิชาการและวิชาชีพ')
            this.$store.commit('set_ActivityType_id',1)
            this.getactivitylist(1)
            if (this.$route.name !== 'homest') this.$router.push({name:'homest'})
        },
        ActivityRouterD2() {
            this.$store.commit('set_ActivityType','กิจกรรมกีฬาและนันทนาการ')
            this.$store.commit('set_ActivityType_id',2)
            this.getactivitylist(2)
            if (this.$route.name !== 'homest') this.$router.push({name:'homest'})
        },
        ActivityRouterD3() {
            this.$store.commit('set_ActivityType','กิจรรมบำเพ็ญประโยชน์หรือรักษาสิ่งแวดล้อม')
            this.$store.commit('set_ActivityType_id',3)
            this.getactivitylist(3)
            if (this.$route.name !== 'homest') this.$router.push({name:'homest'})
        },
        ActivityRouterD4() {
            this.$store.commit('set_ActivityType','กิจกรรมเสริมสร้างคุณธรรม จริยธรรม')
            this.$store.commit('set_ActivityType_id',4)
            this.getactivitylist(4)
            if (this.$route.name !== 'homest') this.$router.push({name:'homest'})
        },
        ActivityRouterD5() {
            this.$store.commit('set_ActivityType','กิจกรรมอนุรักษ์ศิลปวัฒนธรรม')
            this.$store.commit('set_ActivityType_id',5)
            this.getactivitylist(5)
            if (this.$route.name !== 'homest') this.$router.push({name:'homest'})
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
            let date=parseInt(datefull.substring(8,10))+1+" "
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
    ActivityRouterSave() {
            this.$store.commit('set_ActivityType','กิจกรรมที่บันทึก')
            this.getsavelist()
            if(this.$route.name !== 'homest') this.$router.push({name:'homest'})
        },
    ActivityRouterRegis() {
            this.$store.commit('set_ActivityType','กิจกรรมที่ลงทะเบียน')
            this.getregislist()
            if(this.$route.name !== 'homest') this.$router.push({name:'homest'})
        },
        getsavelist(){
          axios.post('https://rmutp01.herokuapp.com/api/getsavelist',
                {
                user_id:this.$store.getters.user_id
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
        getregislist(){
          axios.post('https://rmutp01.herokuapp.com/api/getregislist',
                {
                user_id:this.$store.getters.user_id
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
        ProfileRouter(){
            this.$router.push({name: "Profile"})
        },
        HomeRouter () {
            this.$router.push({name: "homest"})
        },
        ChangepasswordRouter(){
          if(this.$route.name !== 'Changepassword') this.$router.push({name:'Changepassword'})
        },
        LogoutRouter(){
          this.$store.commit('set_loginstatus',false)
          this.$store.commit('set_user_id','')
          this.$router.push({name: 'home'})
        },
        QRRouter(){
          if(this.$route.name !=='qrcode')this.$router.push({name:'qrcode'})
        },
        TranscriptRouter(){
          if(this.$route.name !=='transript')this.$router.push({name:'transript'})
        }
    },
    mounted(){
      if(this.$store.getters.loginstatus==false){
        this.$router.push({name:'home'})
      }
    }
  }
</script>