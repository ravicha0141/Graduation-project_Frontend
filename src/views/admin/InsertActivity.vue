<template>
<v-form>
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
        <v-col  xs="5" sm="3" md="11" lg="11" xl="11" class="titlepage">เพิ่มกิจกรรม</v-col>
          </v-row>
      <div style="margin-bottom:25px">
      <v-card class="elevation-12 " >
      <v-card-text >
            <v-row>
                 <v-col xs="3" sm="3" md="6" lg="6" xl="6" >
                    ชื่อกิจกรรม
                </v-col>
                 <v-col xs="3" sm="3" md="6" lg="6" xl="6" >
                    <v-text-field
                        v-model="title"
                        outlined
                        shaped
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                 <v-col xs="3" sm="3" md="6" lg="6" xl="6" >
                    ประภทกิจกรรม
                </v-col>
                 <v-col xs="3" sm="3" md="6" lg="6" xl="6" >
                    <v-select   
                    item-text="maintype_name"
                    item-value="maintype_id"
                    v-model="maintype_Selected.maintype_id"
                    :items="maintypes"
                    label="ประเภทกิจกรรม"
                    outlined
                    shaped></v-select>
                </v-col>
            </v-row>
            <v-row>
                 <v-col xs="3" sm="3" md="6" lg="6" xl="6" >
                    ด้านกิจกรรม
                </v-col>
                 <v-col xs="3" sm="3" md="6" lg="6" xl="6" >
                    <v-select   
                    item-text="subtype_name"
                    item-value="subtype_id"
                    v-model="subtype_Selected.subtype_id"
                    :items="subtypes"
                    label="ด้านกิจกรรม"
                    outlined
                    shaped></v-select>
                </v-col>
            </v-row>
            <v-row>
                 <v-col xs="3" sm="3" md="6" lg="6" xl="6" >
                    ปีการศึกษา
                </v-col>
                 <v-col xs="3" sm="3" md="6" lg="6" xl="6" >
                    <v-text-field
                        v-model="learn_year"
                        outlined
                        shaped
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                 <v-col xs="3" sm="3" md="6" lg="6" xl="6" >
                    เทอม
                </v-col>
                 <v-col xs="3" sm="3" md="6" lg="6" xl="6" >
                    <v-select  
                    item-text="term"
                    item-value="term"
                    v-model="term_Selected.term"
                    :items="terms"
                    label="เทอม"
                    outlined
                    shaped></v-select>
                </v-col>
            </v-row>
            <v-row>
                 <v-col xs="3" sm="3" md="6" lg="6" xl="6" >
                    ชั่วโมงที่ได้รับ
                </v-col>
                 <v-col xs="3" sm="3" md="6" lg="6" xl="6" >
                    <v-text-field
                        v-model="hours"
                        outlined
                        shaped
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                 <v-col xs="3" sm="3" md="6" lg="6" xl="6" >
                    วันที่จัดกิจกรรม
                </v-col>
                 <v-col xs="3" sm="3" md="6" lg="6" xl="6" >
                    <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date_act_start"
        transition="scale-transition"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date_act_start"
            label="Picker in menu"
            :append-icon="'mdi-calendar'"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date_act_start" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(date_act_start)">OK</v-btn>
        </v-date-picker>
      </v-menu>
                </v-col>
            </v-row>
            <v-row>
                 <v-col xs="3" sm="3" md="6" lg="6" xl="6" >
                    เวลา
                </v-col>
                 <v-col xs="3" sm="3" md="6" lg="6" xl="6" >
                    <vue-timepicker v-model="start_time"  format="HH:mm" placeholder="Start Time"></vue-timepicker>
                    <br><span> to </span><br>
                    <vue-timepicker v-model="end_time" format="HH:mm" placeholder="End Time"></vue-timepicker>
                </v-col>
            </v-row>
            <v-row>
                 <v-col xs="3" sm="3" md="6" lg="6" xl="6" >
                    คำอธิบายเพิ่มเติม
                </v-col>
                 <v-col xs="3" sm="3" md="6" lg="6" xl="6" >
                    <v-textarea 
                    v-model="detail"
                    outlined
                    ></v-textarea>
                </v-col>
            </v-row>
            <v-row>
                 <v-col xs="3" sm="3" md="6" lg="6" xl="6" >
                    สถานที่
                </v-col>
                 <v-col xs="3" sm="3" md="6" lg="6" xl="6" >
                    <v-select   
                    item-text="place"
                    item-value="place"
                    v-model="place_Selected.place"
                    :items="places"
                    label="สถานที่"
                    dense outlined></v-select>
                </v-col>
            </v-row>
            <v-row>
                 <v-col xs="3" sm="3" md="6" lg="6" xl="6" >
                    คณะ
                </v-col>
                 <v-col xs="3" sm="3" md="6" lg="6" xl="6" >
                    <v-select   
                    item-text="faculty"
                    item-value="faculty"
                    v-model="faculty_Selected.faculty"
                    :items="facultys"
                    label="คณะ"
                    dense outlined></v-select>
                </v-col>
            </v-row>
            <v-row>
                 <v-col xs="3" sm="3" md="6" lg="6" xl="6" >
                    จำนวนคน
                </v-col>
                 <v-col xs="3" sm="3" md="6" lg="6" xl="6" >
                    <v-text-field
                        v-model="people"
                        outlined
                        shaped
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                 <v-col xs="2" sm="2" md="4" lg="4" xl="4" >
                    กำหนดชั้นปี
                </v-col>
                 <v-col xs="1" sm="1" md="2" lg="2" xl="2" ><v-checkbox v-model="stusend_year1" class="mx-2" label="ปี 1"></v-checkbox></v-col>
                 <v-col xs="1" sm="1" md="2" lg="2" xl="2" ><v-checkbox v-model="stusend_year2" class="mx-2" label="ปี 2"></v-checkbox></v-col>
                 <v-col xs="1" sm="1" md="2" lg="2" xl="2" ><v-checkbox v-model="stusend_year3" class="mx-2" label="ปี 3"></v-checkbox></v-col>
                 <v-col xs="1" sm="1" md="2" lg="2" xl="2" ><v-checkbox v-model="stusend_year4" class="mx-2" label="ปี 4"></v-checkbox></v-col>
            </v-row>
             <v-row>
                 <v-col xs="3" sm="3" md="6" lg="6" xl="6" >
                    วันที่เปิดลงทะเบียน
                </v-col>
                 <v-col xs="3" sm="3" md="6" lg="6" xl="6" >
                    <v-menu
                ref="menu2"
                v-model="menu2"
                :close-on-content-click="false"
                :return-value.sync="date_regis_start"
                transition="scale-transition"
            >
                <template v-slot:activator="{ on }">
                <v-text-field
                    v-model="date_regis_start"
                    label="Picker in menu"
                    :append-icon="'mdi-calendar'"
                    readonly
                    v-on="on"
                ></v-text-field>
                </template>
                <v-date-picker v-model="date_regis_start" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu2 = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.menu2.save(date_regis_start)">OK</v-btn>
                </v-date-picker>
            </v-menu>
                </v-col>
            </v-row>

            <v-row>
                 <v-col xs="3" sm="3" md="6" lg="6" xl="6" >
                    วันที่ปิดลงทะเบียน
                </v-col>
                 <v-col xs="3" sm="3" md="6" lg="6" xl="6" >
                    <v-menu
                ref="menu3"
                v-model="menu3"
                :close-on-content-click="false"
                :return-value.sync="date_regis_end"
                transition="scale-transition"
            >
                <template v-slot:activator="{ on }">
                <v-text-field
                    v-model="date_regis_end"
                    label="Picker in menu"
                    :append-icon="'mdi-calendar'"
                    readonly
                    v-on="on"
                ></v-text-field>
                </template>
                <v-date-picker v-model="date_regis_end" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu3 = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.menu3.save(date_regis_end)">OK</v-btn>
                </v-date-picker>
            </v-menu>
                </v-col>
            </v-row>
            
            <v-row>
                 <v-col xs="3" sm="3" md="6" lg="6" xl="6" class="r">
                    <v-btn 
                     color="success"
                     @click="createActivity()"
                    >สร้างกิจกรรม </v-btn>
                </v-col>
                 <v-col xs="3" sm="3" md="6" lg="6" xl="6" >
                    <v-btn 
                     color="error" @click="cancel()"
                    > ยกเลิก </v-btn>
                </v-col>
            </v-row>
            </v-card-text>
    </v-card>
    </div>
    </v-flex>
    </v-layout>  
    </div>
</v-form>
</template>
<script>
import NavbarAdmin from '@/components/NavbarAdmin'
import VueTimepicker from 'vue2-timepicker'
import {store} from '../../store/index'
import axios from 'axios'
export default {
    store,
    components : {
        NavbarAdmin,
        VueTimepicker
    },
    data(){
        return{
        date_act_start:this.getdatenow(),// new Date().toISOString().substr(0, 10),
        menu: false,
        menu2: false,
        menu3: false,
        modal: false,
        title:'',
        hours:'',
        people:'',
        learn_year:'',
        stusend_year1:false,
        stusend_year2:false,
        stusend_year3:false,
        stusend_year4:false,
        detail:'',
        time_act_start:'',
        date_regis_start:this.getdatenow(),//new Date().toISOString().substr(0, 10),
        date_regis_end:this.getdatenow(),//new Date().toISOString().substr(0, 10),
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
            {   place:'มหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร ศูนย์โชติเวช'}
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
         getdatenow(){
             var offset = +7;
                var datenow = new Date( new Date().getTime() + offset * 3600 * 1000);
            return datenow.toISOString().substr(0, 10)
         },
        createActivity(){
            if(parseInt(this.start_time.HH)>=parseInt(this.end_time.HH)){alert('กรุณาตรวจสอบเวลาจัดกิจกรรม')}else{
            let timeall=this.start_time.HH+'.'+this.start_time.mm+' - '+this.end_time.HH+'.'+this.end_time.mm+' น.'
            this.time_act_start=timeall
            let stusend_yearall=''
            if(this.stusend_year1){stusend_yearall=stusend_yearall+'1,'}
            if(this.stusend_year2){stusend_yearall=stusend_yearall+'2,'}
            if(this.stusend_year3){stusend_yearall=stusend_yearall+'3,'}
            if(this.stusend_year4){stusend_yearall=stusend_yearall+'4'}
            let offset = +7;
            let datenowf = new Date( new Date().getTime() + offset * 3600 * 1000);
            let datenow = Date.parse(datenowf.toISOString().substr(0, 10))
            if(datenow>=Date.parse(this.date_act_start.substr(0,10))){alert('กรุณาเลือกวันที่จัดกิจกรรม ขั้นต่ำเป็นวันพรุ่งนี้')}else
            if(datenow>Date.parse(this.date_regis_start.substr(0,10))||Date.parse(this.date_regis_start.substr(0,10))>=Date.parse(this.date_act_start.substr(0,10))){alert('กรุณาเลือกวันที่เปิดลงทะเบียน ขั้นต่ำเป็นวันนี้ และก่อนวันจัดกิจกรรม')}else
             if(datenow >Date.parse(this.date_regis_end.substr(0,10))||(Date.parse(this.date_regis_end.substr(0,10))<Date.parse(this.date_regis_start.substr(0,10)))||(Date.parse(this.date_regis_end.substr(0,10))>=Date.parse(this.date_act_start.substr(0,10)))){alert('กรุณาเลือกวันที่ปิดลงทะเบียน หลังวันเปิดลงทะเบียนและก่อนวันจัดกิจกรรม')}else{
            axios.post('https://rmutp01.herokuapp.com/api/createActivity',
                { 
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
                  date_act_start:this.date_act_start,
                  time_act_start:this.time_act_start,
                  date_regis_start:this.date_regis_start,
                  date_regis_end:this.date_regis_end,
                  date_post:datenowf.toISOString().substr(0, 10),
                  people_regis:'0'
                }
                ).then(response => {
                    alert('สร้างกิจกรรมเสร็จสิ้น')
                    this.$router.push({path:"/viewactivity/admin/"+response.data[0].activity_id})
                    
                },err=>{
                    console.log(err)
                })
              }
            }
           
         },
         cancel(){
            this.title='',
            this.hours='',
            this.people='',
            this.learn_year='',
            this.stusend_year1=false,
            this.stusend_year2=false,
            this.stusend_year3=false,
            this.stusend_year4=false,
            this.detail='',
            this.time_act_start='',
            this.date_regis_start=new Date().toISOString().substr(0, 10),
            this.date_regis_end=new Date().toISOString().substr(0, 10)
         },
     
        
     },
     mounted(){
         if(this.$store.getters.loginstatus==false){
        this.$router.push({name:'loginadmin'})
      }
      
     }

}
</script>