<template>
  <div>
  <Navbar />
  <v-layout
          align-center
          justify-center
        >
    <v-flex
            xs10
            sm10
            md11
            lg11
            xl11
          >
  <v-container>
      <v-row>
        <v-col>
          <p class="titlepage">รายละเอียดกิจกรรม <br> {{$store.getters.title}}</p>
        </v-col>
      </v-row>
      <div style="margin-bottom:25px">
      <v-card class="elevation-12 " >
      <v-card-text >
      <v-row>
        <v-col xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">ชื่อกิจกรรม</p>
        </v-col>
        <v-col xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" >{{$store.getters.title}}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">ประเภทกิจกรรม</p>
        </v-col>
        <v-col cols="6" sm="6">
          <p class="text-sm-left" >{{$store.getters.maintype_id}}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">ด้านกิจกรรม</p>
        </v-col>
        <v-col xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" >{{$store.getters.subtype_id}}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">ปีการศึกษา</p>
        </v-col>
        <v-col xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" >{{$store.getters.learn_year}}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">เทอม</p>
        </v-col>
        <v-col xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" >{{$store.getters.term}}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">ชั่วโมงที่ได้รับ</p>
        </v-col>
        <v-col xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" >{{$store.getters.hours}}</p>    
        </v-col>
      </v-row>
      <v-row>
        <v-col xs="3" sm="3" md="6" lg="6" xl="6"><p class="text-sm-left">วันที่</p></v-col>
        <v-col xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" >{{$store.getters.date_act_start}}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col xs="3" sm="3" md="6" lg="6" xl="6"><p class="text-sm-left">เวลา</p></v-col>
        <v-col xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">{{$store.getters.time_act_start}}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">คำอธิบายเพิ่มเติม</p>
        </v-col>
        <v-col cols="6" sm="6">
          <p class="text-sm-left" >{{$store.getters.detail}}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">สถานที่</p>
        </v-col>
        <v-col cols="6" sm="6">
          <p class="text-sm-left" >{{$store.getters.place}}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">คณะ</p>
        </v-col>
        <v-col cols="6" sm="6">
          <p class="text-sm-left" >{{$store.getters.faculty}}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">จำนวนคน</p>
        </v-col>
        <v-col xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" >{{$store.getters.people_regis}} / {{$store.getters.people}}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">ชั้นปี</p>
        </v-col>
        <v-col xs="3" sm="3" md="6" lg="6" xl="6">
         <p class="text-sm-left" >{{$store.getters.stusend_year}}</p>
        </v-col>
      </v-row>
      <v-row>
      <v-col xs="3" sm="3" md="6" lg="6" xl="6">
        <p class="text-sm-left">ลงทะเบียนก่อนวันที่</p>
        </v-col>
        <v-col cols="6" sm="6">
         <p class="text-sm-left" >{{$store.getters.date_regis_end}}</p>
        </v-col>
      </v-row>
      </v-card-text>
    </v-card>
      </div>
      <v-row justify="center">
      <iframe v-if="this.googlemap1==true" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.353135364267!2d100.50979091414366!3d13.81782129948458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29b9f54b53151%3A0x73d2b2a69752fd89!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14Lij4Liy4LiK4Lih4LiH4LiE4Lil4Lie4Lij4Liw4LiZ4LiE4LijIOC4qOC4ueC4meC4ouC5jOC4nuC4o-C4sOC4meC4hOC4o-C5gOC4q-C4meC4t-C4rQ!5e0!3m2!1sen!2sth!4v1580320374770!5m2!1sen!2sth" allowfullscreen=""></iframe>
      <iframe v-if="this.googlemap2==true" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.1328389048913!2d100.50153781744385!3d13.770861700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299663395992f%3A0xc55aab59e29b6188!2sRajamangala%20University%20of%20Technology%20Phra%20Nakhon!5e0!3m2!1sen!2sth!4v1580322869611!5m2!1sen!2sth"  allowfullscreen=""></iframe>
      <iframe v-if="this.googlemap3==true" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.2756386972846!2d100.51138331414315!3d13.762244200760888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29946c66f59bb%3A0xd17babef1865aa08!2sRmutp%20-%20Bangkok%20Commercial%20Campus!5e0!3m2!1sen!2sth!4v1580322961164!5m2!1sen!2sth"  allowfullscreen=""></iframe>
      <iframe v-if="this.googlemap4==true" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7750.387982635953!2d100.508143!3d13.767172!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299436430d48f%3A0xc82c00266e09e3f0!2z4Liq4LiW4Liy4Lia4Lix4LiZ4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14Lij4Liy4LiK4Lih4LiH4LiE4LilIOC4p-C4tOC4l-C4ouC4suC5gOC4guC4leC5guC4iuC4leC4tOC5gOC4p-C4ig!5e0!3m2!1sth!2sus!4v1580767704214!5m2!1sth!2sus" allowfullscreen=""></iframe>
      </v-row>
      </v-container>
          </v-flex>
    </v-layout>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar'
import {store} from '../store/index'
import axios from 'axios'
export default {
  store,
  components:{
    Navbar,
  },
  data(){
    return{
      googlemap1:false,
      googlemap2:false,
      googlemap3:false,
      googlemap4:false,
    }
  },
  methods: {
    getdetail(){
                axios.post('https://rmutp01.herokuapp.com/api/getactivitydetail',
                { activity_id: this.$route.params.activity_id }
                ).then(response => {
                  this.$store.commit('set_activity_id',response.data[0].activity_id)
                  this.$store.commit('set_maintype_id',response.data[0].maintype_name)
                  this.$store.commit('set_subtype_id',response.data[0].subtype_name)
                  this.$store.commit('set_title',response.data[0].title)
                  this.$store.commit('set_hours',response.data[0].hours)
                  this.$store.commit('set_place',response.data[0].place)
                  //เช็ค googlemap 
                  if(response.data[0].place=='มหาวิทยาลัยเทคโนโลยีรามงคลพระนคร ศูนย์พระนครเหนือ')
                  {
                    this.googlemap1=true; this.googlemap2=false; this.googlemap3=false; this.googlemap4=false;
                  }else
                  if(response.data[0].place=='มหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร ศูนย์เทเวศน์')
                  {
                    this.googlemap2=true; this.googlemap1=false; this.googlemap3=false; this.googlemap4=false;
                  }else
                  if(response.data[0].place=='มหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร ศูนย์พณิชยการพระนคร')
                  {
                    this.googlemap3=true; this.googlemap1=false; this.googlemap2=false; this.googlemap4=false;
                  }
                  if(response.data[0].place=='มหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร ศูนย์โชติเวช')
                  {
                    this.googlemap4=true; this.googlemap1=false; this.googlemap2=false; this.googlemap3=false;
                  }

                  this.$store.commit('set_faculty',response.data[0].faculty)
                  this.$store.commit('set_people',response.data[0].people)
                  this.$store.commit('set_learn_year',response.data[0].learn_year)
                  this.$store.commit('set_term',response.data[0].term)
                  this.$store.commit('set_stusend_year',response.data[0].stusend_year)
                  this.$store.commit('set_detail',response.data[0].detail)
                  this.$store.commit('set_date_act_start',this.datetranslate(response.data[0].date_act_start))
                  this.$store.commit('set_time_act_start',response.data[0].time_act_start)
                  this.$store.commit('set_date_regis_start',this.datetranslate(response.data[0].date_regis_start))
                  this.$store.commit('set_date_regis_end',this.datetranslate(response.data[0].date_regis_end))
                  this.$store.commit('set_people_regis',response.data[0].people_regis)
                }).catch((err) => {
                console.log(err)
                })
        },
        datetranslate(datefull){
            let date=datefull.substring(8,10)+" "
            let month=parseInt(datefull.substring(5,7))
            if(month=1){month='มกราคม'}else
            if(month=2){month='กุมภาพันธ์'}else
            if(month=3){month='มีนาคม'}else
            if(month=4){month='เมษายน'}else
            if(month=5){month='พฤษภาคม'}else
            if(month=6){month='มิถุนายน'}else
            if(month=7){month='กรกฎาคม'}else
            if(month=8){month='สิงหาคม'}else
            if(month=9){month='กันยายน'}else
            if(month=10){month='ตุลาคม'}else
            if(month=11){month='พฤศจิกายน'}else
            if(month=12){month='ธันวาคม'}
            let year=" "+(parseInt(datefull.substring(0,4))+543).toString()
            let date_act_start=date+month+year
            return date_act_start
          }
          
          
    
  },
  mounted(){
      this.$store.state.activitylists=[];
      this.getdetail()
    }
};
</script>