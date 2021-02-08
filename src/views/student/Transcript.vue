<template>
  <div>
      <NavbarSt />
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
          <v-row> 
              <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6"> กิจกรรมที่เข้าร่วม </v-col>
              <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">{{allact}}</v-col>
          </v-row>
          <v-row>
              <v-col  xs="6" sm="6" md="12" lg="12" xl="12">
        <v-progress-linear
            color="#6DE54E"
            height="25"
             v-model="allactpercen"
            :active="show"
            :query="true"
            rounded
        ></v-progress-linear>
              </v-col>
          </v-row>
          <v-row> 
              <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6"> ชั่วโมงที่เข้าร่วม </v-col>
              <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">{{allhour}}</v-col>
          </v-row>
          <v-row>
              <v-col  xs="6" sm="6" md="12" lg="12" xl="12">
        <v-progress-linear
            color="#F19662"
            height="25"
            v-model="allhourpercen"
            :active="show"
            :query="true"
            rounded
        ></v-progress-linear>
              </v-col>
          </v-row>
      <div style="margin-bottom:25px">
      <v-card class="elevation-12 " >
      <v-card-text >            
          <v-row>
              <v-col class="headtran">กิจกรรมมหาวิทยาลัย ไม่น้อยกว่า {{$store.getters.stand_university_act}} กิจกรรม</v-col>
          </v-row>
          <v-row>
              <v-col >{{$store.getters.university_act}}</v-col>
              <v-col class="rr"> 
                  <v-icon v-if="$store.getters.university_act>$store.getters.stand_university_act">mdi-check</v-icon>
                  <v-icon v-if="$store.getters.university_act<$store.getters.stand_university_act">mdi-window-close</v-icon>
              </v-col>
          </v-row>

          <v-row>
              <v-col class="headtran">กิจกรรมมหาวิทยาลัย ไม่น้อยกว่า {{$store.getters.stand_university_hour}} ชั่วโมง</v-col>
          </v-row>
          <v-row>
              <v-col >{{$store.getters.university_hour}}</v-col>
              <v-col class="rr"> <v-icon v-if="$store.getters.university_hour>$store.getters.stand_university_hour">mdi-check</v-icon></v-col>
              <v-col class="rr"> <v-icon v-if="$store.getters.university_hour<$store.getters.stand_university_hour">mdi-window-close</v-icon></v-col>
          </v-row>
          <v-row>
              <v-col class="headtran">กิจกรรมพัฒนานักศึกษาสู่การเป็นบัณฑิตพึงประสงค์ ไม่น้อยกว่า 5 ด้าน</v-col>
          </v-row>
          <v-row>
              <v-col >{{fivetype}}</v-col>
              <v-col class="rr"> 
                  <v-icon v-if="fivetype>5">mdi-check</v-icon>
                  <v-icon v-if="fivetype<5">mdi-window-close</v-icon>
              </v-col>
          </v-row>
                <v-row>
                    <v-col >กิจกรรมวิชาการและวิชาชีพ</v-col>
                    <v-col class="rr">{{$store.getters.technical_act}}</v-col>
                    
                </v-row>
                <v-row>
                    <v-col >กิจกรรมกีฬาและนันทนาการ</v-col>
                    <v-col class="rr">{{$store.getters.sport_act}}</v-col>
                </v-row>
                <v-row>
                    <v-col >กิจกรรมบำเพ็ญประโยชน์ หรือรักษาสิ่งแวดล้อม</v-col>
                    <v-col class="rr">{{$store.getters.perform_act}}</v-col>
                </v-row>
                <v-row>
                    <v-col >กิจกรรมเสริมสร้างคุณธรรม จริยธรรม</v-col>
                    <v-col class="rr">{{$store.getters.moral_act}}</v-col>
                </v-row>
                <v-row>
                    <v-col >กิจกรรมอนุรักษ์ศิลปวัฒนธรรม</v-col>
                    <v-col class="rr">{{$store.getters.cultural_act}}</v-col>
                </v-row>

          <v-row>
              <v-col class="headtran">กิจกรรมพัฒนานักศึกษาสู่การเป็นบัณฑิตพึงประสงค์ ไม่น้อยกว่า {{$store.getters.stand_devstudent_act}} กิจกรรม</v-col>
          </v-row>
          <v-row>
              <v-col >{{alldevact}}</v-col>
              <v-col class="rr"> 
                  <v-icon v-if="alldevact>$store.getters.stand_devstudent_act">mdi-check</v-icon>
                  <v-icon v-if="alldevact<$store.getters.stand_devstudent_act">mdi-window-close</v-icon>
              </v-col>
          </v-row>

          <v-row>
              <v-col class="headtran">กิจกรรมพัฒนานักศึกษาสู่การเป็นบัณฑิตพึงประสงค์ ไม่น้อยกว่า {{$store.getters.stand_devstudent_hour}} ชั่วโมง</v-col>
          </v-row>
          <v-row>
              <v-col >{{$store.getters.devstudent_hour}}</v-col>
              <v-col class="rr"> 
                  <v-icon v-if="$store.getters.devstudent_hour>$store.getters.stand_devstudent_hour">mdi-check</v-icon>
                  <v-icon v-if="$store.getters.devstudent_hour<$store.getters.stand_devstudent_hour">mdi-window-close</v-icon>
              </v-col>
          </v-row>

          <v-row>
              <v-col class="headtran">กิจกรรมรวมทั้งหมดไม่น้อยกว่า {{$store.getters.stand_devstudent_act+$store.getters.stand_university_act}} กิจกรรม</v-col>
          </v-row>
          <v-row>
              <v-col >{{allact}}</v-col>
              <v-col class="rr"> 
                  <v-icon v-if="allact>($store.getters.stand_devstudent_act+$store.getters.stand_university_act)">mdi-check</v-icon>
                  <v-icon v-if="allact<($store.getters.stand_devstudent_act+$store.getters.stand_university_act)">mdi-window-close</v-icon>
              </v-col>
          </v-row>
          
          <v-row>
              <v-col class="headtran">กิจกรรมรวมทั้งหมดไม่น้อยกว่า {{$store.getters.stand_devstudent_hour+$store.getters.stand_university_hour}} ชั่วโมง</v-col>
          </v-row>
          <v-row>
              <v-col >{{allhour}}</v-col>
              <v-col class="rr"> 
                  <v-icon v-if="allhour>($store.getters.stand_devstudent_hour+$store.getters.stand_university_hour)">mdi-check</v-icon>
                  <v-icon v-if="allhour<($store.getters.stand_devstudent_hour+$store.getters.stand_university_hour)">mdi-window-close</v-icon>
              </v-col>
          </v-row>
          </v-card-text>
    </v-card>
      </div>
    
 </v-flex>
    </v-layout>   
  </div>
</template>
<script>
import NavbarSt from '@/components/NavbarSt'
import axios from 'axios'
import {store} from '../../store/index'
export default {
    store,
    components: {
        NavbarSt,
    },
    data: () => ({
    hourrecive:'',
    query:false,
    fivetype:0,
    alldevact:0,
    allact:0,
    allactpercen:0,
    allhour:0,
    allhourpercen:0,
    ispass: true
    
  }),
    methods:{
        gethourstandard(){
            axios.get('https://rmutp01.herokuapp.com/api/gethourstandard'
                ).then(response => {
                  this.$store.commit('set_stand_university_act',response.data[0].stand_university_act)
                  this.$store.commit('set_stand_university_hour',response.data[0].stand_university_hour)
                  this.$store.commit('set_stand_devstudent_act',response.data[0].stand_devstudent_act)
                  this.$store.commit('set_stand_devstudent_hour',response.data[0].stand_devstudent_hour)
              })
        },
        gettranscript(){
            axios.post('https://rmutp01.herokuapp.com/api/gettranscript',{
                user_id:this.$store.getters.user_id
            }).then(response => {
                console.log(response)
                this.allact=(response.data[0].university_act+response.data[0].technical_act+
                            response.data[0].sport_act+response.data[0].perform_act+
                            response.data[0].moral_act+response.data[0].cultural_act)
                this.allhour=(response.data[0].university_hour+response.data[0].devstudent_hour)
                this.allactpercen=(this.allact/(this.$store.getters.stand_devstudent_act+this.$store.getters.stand_university_act))*100
                this.allhourpercen=(this.allhour/(this.$store.getters.stand_devstudent_hour+this.$store.getters.stand_university_hour))*100
                if(response.data[0].technical_act>0){this.fivetype=this.fivetype+1}
                if(response.data[0].sport_act>0){this.fivetype=this.fivetype+1}
                if(response.data[0].perform_act>0){this.fivetype=this.fivetype+1}
                if(response.data[0].moral_act>0){this.fivetype=this.fivetype+1}
                if(response.data[0].cultural_act>0){this.fivetype=this.fivetype+1}
                this.alldevact=this.allact-response.data[0].university_act
                
                  this.$store.commit('set_university_act',response.data[0].university_act)
                  this.$store.commit('set_university_hour',response.data[0].university_hour)
                  this.$store.commit('set_technical_act',response.data[0].technical_act)
                  this.$store.commit('set_sport_act',response.data[0].sport_act)
                  this.$store.commit('set_perform_act',response.data[0].perform_act)
                  this.$store.commit('set_moral_act',response.data[0].moral_act)
                  this.$store.commit('set_cultural_act',response.data[0].cultural_act)
                  this.$store.commit('set_devstudent_hour',response.data[0].devstudent_hour)
              })
        },
    },
  mounted(){
      if(this.$store.getters.loginstatus==false){
        this.$router.push({name:'home'})
      }
      this.gethourstandard()
      this.gettranscript()
      console.log("allact :"+this.allact)
      console.log("allhour :"+this.allhour)
      console.log("allact% :"+this.allactpercen)
      console.log("allhour% :"+this.allhourpercen)
      
  }
}
</script>
