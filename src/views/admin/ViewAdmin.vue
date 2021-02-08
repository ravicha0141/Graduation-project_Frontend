<template>
  <div>
    <NavbarAdmin />
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
          <v-row >
        <v-col  xs="5" sm="3" md="11" lg="11" xl="11" class="titlepage">รายละเอียดกิจกรรม</v-col>
        <v-col  xs="1" sm="3" md="1" lg="1" xl="1" class="iconeditac">
          <v-btn icon  @click="edit()">
                     <v-icon large v-if="isEditing" >mdi-close</v-icon>
                     <v-icon large v-else>mdi-pencil</v-icon>             
        </v-btn>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
      <div style="margin-bottom:25px">
      <v-card class="elevation-12 " >
      <v-card-text >
      <v-row>
        <v-col xs="3" sm="3" md="6" lg="6" xl="6" >
          <p>ชื่อกิจกรรม</p>
        </v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{this.title}}</p>
          <v-text-field v-if="this.isEditing==true" v-model="title" outlined shaped></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">ประเภทกิจกรรม</p>
        </v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{this.maintype_id}}</p>
          <v-select  
          v-if="this.isEditing==true" 
          item-text="maintype_name"
          item-value="maintype_id"
          v-model="maintype_Selected.maintype_id"
          :items="maintypes"
          label="ประเภทกิจกรรม"
          dense outlined></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">ด้านกิจกรรม</p>
        </v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{this.subtype_id}}</p>
          <v-select  
          v-if="this.isEditing==true" 
          item-text="subtype_name"
          item-value="subtype_id"
          v-model="subtype_Selected.subtype_id"
          :items="subtypes"
          label="ด้านกิจกรรม"
          dense outlined></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">ปีการศึกษา</p>
        </v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{this.learn_year}}</p>
          <v-text-field v-if="this.isEditing==true" v-model="learn_year" outlined shaped></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">เทอม</p>
        </v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{this.term}}</p>
          <v-select  
          v-if="this.isEditing==true" 
          item-text="term"
          item-value="term"
          v-model="term_Selected.term"
          :items="terms"
          label="เทอม"
          dense outlined></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">ชั่วโมงที่ได้รับ</p>
        </v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{this.hours}}</p>    
          <v-text-field v-if="this.isEditing==true" v-model="hours" outlined shaped></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6" ><p class="text-sm-left">วันที่</p></v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{this.date_act_start}}</p>
          <v-menu
            ref="menu1"
            v-model="menu1"
            :close-on-content-click="false"
            :return-value.sync="date1"
            transition="scale-transition"
            v-if="this.isEditing==true"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date1"
                label="Picker in menu"
                :append-icon="'mdi-calendar'"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date1" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu1 = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menu1.save(date1)">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6"><p class="text-sm-left">เวลา</p></v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{this.time_act_start}}</p>
          <div v-if="this.isEditing==true">
          <vue-timepicker v-model="start_time"  format="HH:mm" placeholder="Start Time"></vue-timepicker>
           <br><span> to </span><br>
          <vue-timepicker v-model="end_time" format="HH:mm" placeholder="End Time"></vue-timepicker>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">คำอธิบายเพิ่มเติม</p>
        </v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{this.detail}}</p>
          <v-textarea v-if="this.isEditing==true" v-model="detail" outlined></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">สถานที่</p>
        </v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{this.place}}</p>
          <v-select  
          v-if="this.isEditing==true" 
          item-text="place"
          item-value="place"
          v-model="place_Selected.place"
          :items="places"
          label="สถานที่"
          dense outlined></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">คณะ</p>
        </v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{this.faculty}}</p>
          <v-select  
          v-if="this.isEditing==true" 
          item-text="faculty"
          item-value="faculty"
          v-model="faculty_Selected.faculty"
          :items="facultys"
          label="คณะ"
          dense outlined></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">จำนวนคน</p>
        </v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{this.people}}</p>
          <v-text-field v-if="this.isEditing==true" v-model="people" outlined shaped></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false" >ชั้นปี</p>
        </v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
         <p class="text-sm-left" v-if="this.isEditing==false">{{this.stusend_year}}</p>
        </v-col>

        <v-col xs="2" sm="2" md="4" lg="4" xl="4" v-if="this.isEditing==true" >
                    กำหนดชั้นปี
                </v-col>
                 <v-col xs="1" sm="1" md="2" lg="2" xl="2" v-if="this.isEditing==true" ><v-checkbox v-model="stusend_year1" class="mx-2" label="ปี 1"></v-checkbox></v-col>
                 <v-col xs="1" sm="1" md="2" lg="2" xl="2" v-if="this.isEditing==true" ><v-checkbox v-model="stusend_year2" class="mx-2" label="ปี 2"></v-checkbox></v-col>
                 <v-col xs="1" sm="1" md="2" lg="2" xl="2" v-if="this.isEditing==true" ><v-checkbox v-model="stusend_year3" class="mx-2" label="ปี 3"></v-checkbox></v-col>
                 <v-col xs="1" sm="1" md="2" lg="2" xl="2" v-if="this.isEditing==true" ><v-checkbox v-model="stusend_year4" class="mx-2" label="ปี 4"></v-checkbox></v-col>
      </v-row>
      <!--วันที่เปิดลงทะเบียนกิจกรรม -->
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6" ><p class="text-sm-left">วันที่เปิดลงทะเบียนกิจกรรม</p></v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{this.date_regis_start}}</p>
          <v-menu
            ref="menu2"
            v-model="menu2"
            :close-on-content-click="false"
            :return-value.sync="date2"
            transition="scale-transition"
            v-if="this.isEditing==true"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date2"
                label="Picker in menu"
                :append-icon="'mdi-calendar'"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date2" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu2 = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menu2.save(date2)">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <!-- จบของวันที่เปิดลงทะเบียนกิจกรรม-->

      <!--วันที่ปิดลงทะเบียนกิจกรรม -->
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6" ><p class="text-sm-left">วันที่ปิดลงทะเบียนกิจกรรม</p></v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{this.date_regis_end}}</p>
          <v-menu
            ref="menu3"
            v-model="menu3"
            :close-on-content-click="false"
            :return-value.sync="date3"
            transition="scale-transition"
            v-if="this.isEditing==true"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date3"
                label="Picker in menu"
                :append-icon="'mdi-calendar'"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date3" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu3 = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menu3.save(date3)">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <!-- จบของวันที่ปิดลงทะเบียนกิจกรรม-->
      <v-row>
        
        <v-col class="r">
          <v-btn icon color="error"  @click.stop="dialog = true">
              <v-icon large v-if="this.isEditing==false" >mdi-delete-outline</v-icon>         
        </v-btn>
        <center><v-btn color="success" v-if="this.isEditing==true" @click="updateactivity()" >ยืนยันแก้ไขกิจกรรม</v-btn></center>
        </v-col>
        
      </v-row>
      <v-row>
        <v-col class="r">
      <v-btn color="success" v-if="this.isEditing==false" @click="report()">ดูสรุปข้อมูลการลงทะเบียนกิจกรรม</v-btn>
        </v-col>
      </v-row>
        <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">ต้องการลบกิจกรรม</v-card-title>
        <v-card-text>
          <v-form>
                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    
                    :type="show1 ? 'text' : 'password'"
                    @click:append="show1 = !show1"
                  ></v-text-field>
                </v-form>
                <center><v-alert type="error" v-if="passcompare==false">Password Wrong!</v-alert></center>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="error"
            text
            @click="dialog = false"
          >
            ยกเลิก
          </v-btn>

          <v-btn
            color="success"
            text
            @click="deleteActivity()"
          >
            ตกลง
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
    </v-card-text>
    </v-card>
    </div>
    </v-flex>
    </v-layout>     
  </div>
</template>


<script>
import NavbarAdmin from '@/components/NavbarAdmin'
import VueTimepicker from 'vue2-timepicker'
import {store} from '../../store/index'
import axios from 'axios'
export default {
  store,
  components:{
      NavbarAdmin,
      VueTimepicker
  },
  data(){
    return{
    passcompare:true,
    password:'',
    activity_id:this.$route.params.activity_id,
    maintype_id:this.$store.getters.maintype_id,
    subtype_id:this.$store.getters.subtype_id,
    title:this.$store.getters.title,
    hours:this.$store.getters.hours,
    place:this.$store.getters.place,
    faculty:this.$store.getters.faculty,
    people:this.$store.getters.people,
    learn_year:this.$store.getters.learn_year,
    term:this.$store.getters.term,
    detail:this.$store.getters.detail,
    date_act_start:this.$store.getters.date_act_start,
    time_act_start:this.$store.getters.time_act_start,
    date_regis_start:this.$store.getters.date_regis_start,
    date_regis_end:this.$store.getters.date_regis_end,
    stusend_year:this.$store.getters.stusend_year,
    stusend_year1:false,
    stusend_year2:false,
    stusend_year3:false,
    stusend_year4:false,
    isEditing:false,
    date1:'', //new Date().toISOString().substr(0, 10),
    date2:'',
    date3:'',
    menu1: false,
    menu2: false,
    menu3: false,
    //modal: false,
    show1:false, //กดลบ
    dialog: false,
    maintype_Selected: {
            maintype_id:1,
        },
        maintypes:[
            {   maintype_id:1,
                maintype_name:'มหาวิทยาลัย'},
            {   maintype_id:2,
                maintype_name:'พัฒนานักศึกษาสู่การเป็นบัณฑิตพึงประสงค์'}
        ],
    subtype_Selected: {
            subtype_id:1,
        },
        subtypes:[
            {   subtype_id:1,
                subtype_name:'วิชาการและวิชาชีพ'},
            {   subtype_id:2,
                subtype_name:'กีฬาและนันทนาการ'},
            {   subtype_id:3,
                subtype_name:'บำเพ็ญประโยชน์ หรือรักษาสิ่งแวดล้อม'},
            {   subtype_id:4,
                subtype_name:'เสริมสร้างคุณธรรม จริยธรรม'},
            {   subtype_id:5,
                subtype_name:'อนุรักษ์ศิลปวัฒนธรรม'},
        ],
    term_Selected:{
            term:1
    },
        terms:[
            {term:1},
            {term:2}
        ],
    place_Selected: {
            place:'มหาวิทยาลัยเทคโนโลยีรามงคลพระนคร ศูนย์พระนครเหนือ',
        },
        places:[
            {   place:'มหาวิทยาลัยเทคโนโลยีรามงคลพระนคร ศูนย์พระนครเหนือ'},
            {   place:'มหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร ศูนย์เทเวศน์'},
            {   place:'มหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร ศูนย์พณิชยการพระนคร'},
            {   place:'มหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร ศูนย์โชติเวช'},
        ],
    faculty_Selected:{
            faculty:'คณะวิทยาศาสตร์และเทคโนโลยี'
        },
        facultys:[
            {   faculty:'คณะวิทยาศาสตร์และเทคโนโลยี'},
            {   faculty:'คณะวิศวกรรมศาสตร์'},
            {   faculty:'คณะศิลปศาสตร์'},
            {   faculty:'คณะอุตสาหกรรมสิ่งทอและออกแบบแฟชั่น'},
            {   faculty:'คณะสถาปัตยกรรมศาสตร์และการออกแบบ'},
            {   faculty:'คณะครุศาสตร์อุตสาหกรรม'},
            {   faculty:'คณะเทคโนโลยีคหกรรมศาสตร์'},
            {   faculty:'คณะเทคโนโลยีสื่อสารมวลชน'},
            {   faculty:'คณะบริหารธุรกิจ'},
        ],
        start_time:{HH:'08',mm:'00'},
        end_time:{HH:'12',mm:'00'}
    }
  },
  methods: {
    
    edit(){
      this.isEditing = !this.isEditing;
    },
    updateactivity(){
      if(parseInt(this.start_time.HH)>=parseInt(this.end_time.HH)){alert('กรุณาตรวจสอบเวลาจัดกิจกรรม')}else{
      let timeall=this.start_time.HH+'.'+this.start_time.mm+' - '+this.end_time.HH+'.'+this.end_time.mm+' น.'
      this.time_act_start=timeall
      var offset = +7;
      var datenow = new Date( new Date().getTime() + offset * 3600 * 1000);
      datenow = Date.parse(datenow.toISOString().substr(0, 10))
      if(datenow>=Date.parse(this.date1.substr(0,10))){alert('กรุณาเลือกวันที่จัดกิจกรรม ขั้นต่ำเป็นวันพรุ่งนี้')}else
      if(datenow>Date.parse(this.date2.substr(0,10))||Date.parse(this.date2.substr(0,10))>=Date.parse(this.date1.substr(0,10))){alert('กรุณาเลือกวันที่เปิดลงทะเบียน ขั้นต่ำเป็นวันนี้ และก่อนวันจัดกิจกรรม')}else
      if(datenow>Date.parse(this.date3.substr(0,10))||(Date.parse(this.date3.substr(0,10))<Date.parse(this.date2.substr(0,10)))||(Date.parse(this.date3.substr(0,10))>=Date.parse(this.date1.substr(0,10)))){alert('กรุณาเลือกวันที่ปิดลงทะเบียน หลังวันเปิดลงทะเบียนและก่อนวันจัดกิจกรรม')}else{
      let stusend_yearall=''
      let stusend_year1='0'
      let stusend_year2='0'
      let stusend_year3='0'
      let stusend_year4='0'
      if(this.stusend_year1){
        stusend_yearall=stusend_yearall+'1,'
        stusend_year1='1'
      }
      if(this.stusend_year2){
        stusend_yearall=stusend_yearall+'2,'
        stusend_year2='1'
      }
      if(this.stusend_year3){
        stusend_yearall=stusend_yearall+'3,'
        stusend_year3='1'
      }
      if(this.stusend_year4){
        stusend_yearall=stusend_yearall+'4'
        stusend_year4='1'
      }
      axios.post('https://rmutp01.herokuapp.com/api/updateactivity',
          { activity_id: this.$route.params.activity_id,
            maintype_id:this.maintype_Selected.maintype_id,
            subtype_id:this.subtype_Selected.subtype_id,
            title:this.title,
            hours:this.hours,
            place:this.place_Selected.place,
            faculty:this.faculty_Selected.faculty,
            people:this.people,
            learn_year:this.learn_year,
            term:this.term_Selected.term,
            stusend_year:stusend_yearall,
            detail:this.detail,
            date_act_start:this.date1,
            time_act_start:this.time_act_start,
            date_regis_start:this.date2,
            date_regis_end:this.date3,
            stusend_year1:stusend_year1,
            stusend_year2:stusend_year2,
            stusend_year3:stusend_year3,
            stusend_year4:stusend_year4
          }
          ).then(response => {
            console.log(response)
           alert("อัพเดทกิจกรรมแล้ว")
            this.isEditing = !this.isEditing;
            this.getdetail()
          })  
      }
      }
    },
      getdetail(){
        console.log(this.$route.params.activity_id)
                axios.post('https://rmutp01.herokuapp.com/api/getactivitydetail',
                { activity_id: this.$route.params.activity_id }
                ).then(response => {
                  this.$store.commit('set_activity_id',response.data[0].activity_id)
                  this.$store.commit('set_maintype_id',response.data[0].maintype_name)
                  this.maintype_id=response.data[0].maintype_name
                  //เช็คเพื่อมาแก้ไข
                  if(response.data[0].maintype_name=='มหาวิทยาลัย'){this.maintype_Selected.maintype_id=1}else
                  if(response.data[0].maintype_name=='พัฒนานักศึกษาสู่การเป็นบัณฑิตพึงประสงค์'){this.maintype_Selected.maintype_id=2}
                  
                  this.$store.commit('set_subtype_id',response.data[0].subtype_name)
                  this.subtype_id=response.data[0].subtype_name
                  //เช็คเพื่อมาแก้ไข
                  if(response.data[0].subtype_name=='วิชาการและวิชาชีพ'){this.subtype_Selected.subtype_id=1}else
                  if(response.data[0].subtype_name=='กีฬาและนันทนาการ'){this.subtype_Selected.subtype_id=2}else
                  if(response.data[0].subtype_name=='บำเพ็ญประโยชน์ หรือรักษาสิ่งแวดล้อม'){this.subtype_Selected.subtype_id=3}else
                  if(response.data[0].subtype_name=='เสริมสร้างคุณธรรม จริยธรรม'){this.subtype_Selectedsubtype_id=4}else
                  if(response.data[0].subtype_name=='อนุรักษ์ศิลปวัฒนธรรม'){this.subtype_Selected.subtype_id=5}
      
                  this.$store.commit('set_title',response.data[0].title)
                  this.title=response.data[0].title
                  this.$store.commit('set_hours',response.data[0].hours)
                  this.hours=response.data[0].hours
                  this.$store.commit('set_place',response.data[0].place)
                  this.place=response.data[0].place
                  //เช็ค place
                  if(response.data[0].place=='มหาวิทยาลัยเทคโนโลยีรามงคลพระนคร ศูนย์พระนครเหนือ')
                  {this.place_Selected.place='มหาวิทยาลัยเทคโนโลยีรามงคลพระนคร ศูนย์พระนครเหนือ'}else
                  if(response.data[0].place=='มหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร ศูนย์เทเวศน์')
                  {this.place_Selected.place='มหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร ศูนย์เทเวศน์'}else
                  if(response.data[0].place=='มหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร ศูนย์พณิชยการพระนคร')
                  {this.place_Selected.place='มหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร ศูนย์พณิชยการพระนคร'}else
                  if(response.data[0].place=='มหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร ศูนย์โชติเวช')
                  {this.place_Selected.place='มหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร ศูนย์โชติเวช'}
                  
                  //set faculty
                  if(response.data[0].faculty=='คณะวิทยาศาสตร์และเทคโนโลยี')
                  {this.faculty_Selected.faculty='คณะวิทยาศาสตร์และเทคโนโลยี'}else
                  if(response.data[0].faculty=='คณะวิศวกรรมศาสตร์')
                  {this.faculty_Selected.faculty='คณะวิศวกรรมศาสตร์'}else
                  if(response.data[0].faculty=='คณะศิลปศาสตร์')
                  {this.faculty_Selected.faculty='คณะศิลปศาสตร์'}else
                  if(response.data[0].faculty=='คณะอุตสาหกรรมสิ่งทอและออกแบบแฟชั่น')
                  {this.faculty_Selected.faculty='คณะอุตสาหกรรมสิ่งทอและออกแบบแฟชั่น'}else
                  if(response.data[0].faculty=='คณะสถาปัตยกรรมศาสตร์และการออกแบบ')
                  {this.faculty_Selected.faculty='คณะสถาปัตยกรรมศาสตร์และการออกแบบ'}else
                  if(response.data[0].faculty=='คณะครุศาสตร์อุตสาหกรรม')
                  {this.faculty_Selected.faculty='คณะครุศาสตร์อุตสาหกรรม'}else
                  if(response.data[0].faculty=='คณะเทคโนโลยีคหกรรมศาสตร์')
                  {this.faculty_Selected.faculty='คณะเทคโนโลยีคหกรรมศาสตร์'}else
                  if(response.data[0].faculty=='คณะเทคโนโลยีสื่อสารมวลชน')
                  {this.faculty_Selected.faculty='คณะเทคโนโลยีสื่อสารมวลชน'}else
                  if(response.data[0].faculty=='คณะบริหารธุรกิจ')
                  {this.faculty_Selected.faculty='คณะบริหารธุรกิจ'}

                  
                  this.$store.commit('set_faculty',response.data[0].faculty)
                  this.faculty=response.data[0].faculty
                  this.$store.commit('set_people',response.data[0].people)
                  this.people=response.data[0].people
                  this.$store.commit('set_learn_year',response.data[0].learn_year)
                  this.learn_year=response.data[0].learn_year
                  this.$store.commit('set_term',response.data[0].term)
                  this.term=response.data[0].term
                  this.$store.commit('set_stusend_year',response.data[0].stusend_year)
                  this.stusend_year=response.data[0].stusend_year
                  //ดึงชั้นปีมาแก้ไข
                  if(response.data[0].stusend_year.includes('1')){this.stusend_year1=true}
                  if(response.data[0].stusend_year.includes('2')){this.stusend_year2=true}
                  if(response.data[0].stusend_year.includes('3')){this.stusend_year3=true}
                  if(response.data[0].stusend_year.includes('4')){this.stusend_year4=true}
                  
                  this.$store.commit('set_detail',response.data[0].detail)
                  this.detail=response.data[0].detail

                  this.$store.commit('set_date_act_start',this.datetranslate(response.data[0].date_act_start))
                  this.date_act_start=this.datetranslate(response.data[0].date_act_start)
                  this.date1=(response.data[0].date_act_start).substr(0, 10)

                  this.$store.commit('set_time_act_start',response.data[0].time_act_start)
                  this.time_act_start=response.data[0].time_act_start
                  console.log('start_time HH : '+response.data[0].time_act_start.substring(0,2))
                  console.log('start_time mm : '+response.data[0].time_act_start.substring(3,5))
                  console.log('end_time HH : '+response.data[0].time_act_start.substring(8,10))
                  console.log('end_time mm : '+response.data[0].time_act_start.substring(11,13))
                  this.start_time.HH=response.data[0].time_act_start.substring(0,2)
                  this.start_time.mm=response.data[0].time_act_start.substring(3,5)
                  this.end_time.HH=response.data[0].time_act_start.substring(8,10)
                  this.end_time.mm=response.data[0].time_act_start.substring(11,13)
                  this.$store.commit('set_date_regis_start',this.datetranslate(response.data[0].date_regis_start))
                  this.date_regis_start=this.datetranslate(response.data[0].date_regis_start)
                  this.date2=(response.data[0].date_regis_start).substr(0, 10)
                  

                  this.$store.commit('set_date_regis_end',this.datetranslate(response.data[0].date_regis_end))
                  this.date_regis_end=this.datetranslate(response.data[0].date_regis_end)
                  this.date3=(response.data[0].date_regis_end).substr(0, 10)

                  this.$store.commit('set_people_regis',response.data[0].people_regis)
                }).catch((err) => {
                console.log(err)
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
          deleteActivity(){
            if(this.password!=this.$store.getters.password){
              this.passcompare=false
            }else{
              
              
            axios.post('https://rmutp01.herokuapp.com/api/deleteActivity',
                { activity_id: this.$store.getters.activity_id }
                ).then(response => {
                    console.log(response)
                      alert("ลบกิจกรรมเสร็จสิ้น")
                      this.dialog=false
                      if(this.$route.name !== 'HomeAdmin') this.$router.push({name:'HomeAdmin'})
                },err=>{
                  console.log(err)
                })
            }
          },
      report(){
        this.$router.push({path:"/report/"+this.activity_id})
      }
  },
  mounted(){
    if(this.$store.getters.loginstatus==false){
      this.$router.push({name:"loginadmin"})
      }
    this.getdetail()
    
  }
};
</script>