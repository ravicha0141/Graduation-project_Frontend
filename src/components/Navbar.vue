<template>

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

      <v-toolbar-title class="font title">RMUTP Activity</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on" class="btn nav icon">
        <v-icon large>mdi-account-outline</v-icon>
      </v-btn>
        
      </template>
      <v-card>
        <v-card-title class="headline">RMUTP ACTIVITY</v-card-title>
        <v-card-text>
          <v-form>
          <v-text-field
                    label="Login"
                    v-model="username"
                    name="login"
                    type="text"
                    shape
                    outlined
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    v-model="password"
                    label="Password"
                    name="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    @click:append="show1 = !show1"
                    shape
                    outlined
                  ></v-text-field>
                  
                </v-form>
                <center><v-alert type="error" v-if="passcompare==false">username or password<br>wrong!</v-alert></center>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error"   @click="dialog=false;passcompare=true" >ยกเลิก</v-btn>
          <v-btn color="success"   @click="LoginRouter" >เข้าสู่ระบบ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
      
      </v-app-bar>
      

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
          
          <!-- <v-menu bottom :offset-x="offset"> -->
      <v-menu >
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

        </v-list-item-group>
      </v-list>
      <v-list-item class="adminnav">
            <v-list-item-title @click="admin()" class="fontlist i">Admin</v-list-item-title>
          </v-list-item>
    </v-navigation-drawer>
    
  </div>
</template>
<script>
import axios from 'axios'
import {store} from '../store/index'
  export default {
    store,
    data: () => ({
      username:'',
      password:'',
      activitytype_id:'',
      drawer: false,
      group: null,
      dialog:false,
      show1:false,
      passcompare:true
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
            if(this.$route.name !== 'home') this.$router.push({name:'home'})
        },
        ActivityRouterU() {
            this.$store.commit('set_ActivityType','กิจกรรมมหาวิทยาลัย')
            this.$store.commit('set_ActivityType_id','univer')
            this.getactivitylist('univer')
            if(this.$route.name !== 'home') this.$router.push({name:'home'})
        },
        ActivityRouterD1() {
            this.$store.commit('set_ActivityType','กิจกรรมวิชาการและวิชาชีพ')
            this.$store.commit('set_ActivityType_id',1)
            this.getactivitylist(1)
            if(this.$route.name !== 'home') this.$router.push({name:'home'})
        },
        ActivityRouterD2() {
            this.$store.commit('set_ActivityType','กิจกรรมกีฬาและนันทนาการ')
            this.$store.commit('set_ActivityType_id',2)
            this.getactivitylist(2)
            if(this.$route.name !== 'home') this.$router.push({name:'home'})
        },
        ActivityRouterD3() {
            this.$store.commit('set_ActivityType','กิจรรมบำเพ็ญประโยชน์หรือรักษาสิ่งแวดล้อม')
            this.$store.commit('set_ActivityType_id',3)
            this.getactivitylist(3)
            if(this.$route.name !== 'home') this.$router.push({name:'home'})
        },
        ActivityRouterD4() {
            this.$store.commit('set_ActivityType','กิจกรรมเสริมสร้างคุณธรรม จริยธรรม')
            this.$store.commit('set_ActivityType_id',4)
            this.getactivitylist(4)
            if(this.$route.name !== 'home') this.$router.push({name:'home'})
        },
        ActivityRouterD5() {
            this.$store.commit('set_ActivityType','กิจกรรมอนุรักษ์ศิลปวัฒนธรรม')
            this.$store.commit('set_ActivityType_id',5)
            this.getactivitylist(5)
            if(this.$route.name !== 'home') this.$router.push({name:'home'})
        },
        LoginRouter(){
                axios.post('https://rmutp01.herokuapp.com/api/login',
                { 
                username: this.username,
                password: this.password 
                }
                ).then(response => {
                  if(response.data=='0'){this.passcompare=false}else{
                  this.$store.commit('set_user_id',response.data[0].user_id)
                  this.$store.commit('set_name',response.data[0].name)
                  this.$store.commit('set_surname',response.data[0].surname)
                  this.$store.commit('set_sex_id',response.data[0].sex)
                  this.$store.commit('set_religion',response.data[0].religion)
                  this.$store.commit('set_stu_id',response.data[0].stu_id)
                  this.$store.commit('set_card_id',response.data[0].card_id)
                  this.$store.commit('set_branch_id',response.data[0].branch_name)
                  this.$store.commit('set_stu_year',response.data[0].stu_year)
                  this.$store.commit('set_email',response.data[0].email)
                  this.$store.commit('set_tel',response.data[0].tel)
                  this.$store.commit('set_disease',response.data[0].disease)
                  this.$store.commit('set_be_allergic',response.data[0].be_allergic)
                  this.$store.commit('set_food_allergy',response.data[0].food_allergy)
                  this.$store.commit('set_password',response.data[0].password)
                  //เปลี่ยน loginstatus
                  this.$store.commit('set_loginstatus',true)
                  this.$router.push({name:"homest"})
                  this.dialog=false
                  }
                }).catch((err) => {
                
                })
        },//จบของ Login
        getactivitylist(type_id){
          axios.post('https://rmutp01.herokuapp.com/api/getactivitylist',
                {
                activitytype_id:type_id
                }
                ).then(response => {
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
          admin(){
             if(this.$route.name !== 'loginadmin') this.$router.push({name:'loginadmin'})
          }
    
  },
  mounted(){
    this.$store.state.activitylists=[];
    this.getactivitylist(this.$store.getters.ActivityType_id);
  }
}
</script>