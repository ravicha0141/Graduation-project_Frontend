<template>
    <div>          
        <NavbarSt />
        <div >
          <v-row class="iconedit">
        <v-col  xs="5" sm="5" md="11" lg="11" xl="11" class="titlepage">ข้อมูลส่วนตัว</v-col>
        <v-col  xs="1" sm="1" md="1" lg="1" xl="1" class="iconeditac">
          <v-btn icon  @click="isEditing = !isEditing">
                      <v-icon large v-if="isEditing==true" >mdi-close</v-icon>
                     <v-icon large v-else>mdi-pencil</v-icon>              
        </v-btn>
        </v-col>
      </v-row>
        </div>
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
    <div class="bbbbb">
        <div style="margin-bottom:25px">
      <v-card class="elevation-12 " >
      <v-card-text >
        <v-row>
            <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
                <p class="text-sm-left">ชื่อ</p >
            </v-col>
            <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
                <p v-if="this.isEditing==false" class="text-sm-left"> {{$store.getters.name}}</p>
                <v-text-field
                    v-if="this.isEditing==true"
                    v-model="name"
                    shape
                    outlined
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
                <p class="text-sm-left">นาสกุล</p >
            </v-col>
            <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
                <p v-if="this.isEditing==false" class="text-sm-left"> {{$store.getters.surname}}</p>
                <v-text-field
                    v-if="this.isEditing==true"
                    v-model="surname"
                    shape
                    outlined
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
                <p class="text-sm-left" >เพศ</p>
            </v-col>
            <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
                <p v-if="this.isEditing==false" class="text-sm-left"> {{$store.getters.sex_id}}</p>
                    <v-select 
                    v-if="this.isEditing==true" class="d-flex"
                    item-text="sex_name"
                    item-value="sex_id"
                    v-model="sex_Selected.sex_id"
                    :items="sexs"
                    shape
                    outlined
                    ></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
                <p class="text-sm-left">ศาสนา</p>
            </v-col>
            <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
                <p v-if="this.isEditing==false" class="text-sm-left"> {{$store.getters.religion}}</p>
                <v-text-field
                    v-if="this.isEditing==true"
                    v-model="religion"
                    shape
                    outlined
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
                <p class="text-sm-left">รหัสนักศึกษา</p>
            </v-col>
            <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
                <p v-if="this.isEditing==false" class="text-sm-left"> {{$store.getters.stu_id}}</p>
                <v-text-field
                    v-if="this.isEditing==true"
                    v-model="stu_id"
                    shape
                    outlined
                    
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
                <p class="text-sm-left">สาขา</p>
            </v-col>
            <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
                <p v-if="this.isEditing==false" class="text-sm-left"> {{$store.getters.branch_id}}</p>
                    <v-select 
                    v-if="this.isEditing==true" class="d-flex"
                    item-text="branch_name"
                    item-value="branch_id"
                    v-model="branch_Selected.branch_id"
                    :items="branchs"
                    
                    shape
                    outlined
                    ></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
                <p class="text-sm-left">ชั้นปี</p>
            </v-col>
            <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
                <p v-if="this.isEditing==false" class="text-sm-left">{{$store.getters.stu_year}}</p>
                <v-text-field
                    v-if="this.isEditing==true"
                    v-model="stu_year"
                    shape
                    outlined
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
                <p class="text-sm-left">รหัสบัตรประชาชน</p>
            </v-col>
            <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
                <p v-if="this.isEditing==false" class="text-sm-left"> {{$store.getters.card_id}}</p>
                <v-text-field
                    v-if="this.isEditing==true"
                    v-model="card_id"
                    shape
                    outlined
                    
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
                <p class="text-sm-left">โรคประจำตัว</p>
            </v-col>
            <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
                <p v-if="this.isEditing==false" class="text-sm-left"> {{$store.getters.disease}}</p>
                <v-text-field
                    v-if="this.isEditing==true"
                    v-model="disease"
                    shape
                    outlined
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
                <p class="text-sm-left">อาหารที่แพ้</p>
            </v-col>
            <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
                <p v-if="this.isEditing==false" class="text-sm-left"> {{$store.getters.food_allergy}}</p>
                <v-text-field
                    v-if="this.isEditing==true"
                    v-model="food_allergy"
                    shape
                    outlined
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
                <p class="text-sm-left">ยาที่แพ้</p>
            </v-col>
            <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
                <p v-if="this.isEditing==false" class="text-sm-left"> {{$store.getters.be_allergic}}</p>
                <v-text-field
                    v-if="this.isEditing==true"
                    v-model="be_allergic"
                    shape
                    outlined
                ></v-text-field>
            </v-col>
        </v-row> 
        <v-row>
            <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
                <p class="text-sm-left">Email</p>
            </v-col>
            <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
                <p v-if="this.isEditing==false" class="text-sm-left">{{$store.getters.email}}</p>
                <v-text-field
                    v-if="this.isEditing==true"
                    v-model="email"
                    shape
                    outlined
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
                <p class="text-sm-left">เบอร์โทรศัทพ์</p>
            </v-col>
            <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
                <p v-if="this.isEditing==false" class="text-sm-left"> {{$store.getters.tel}}</p>
                <v-text-field
                    v-if="this.isEditing==true"
                    v-model="tel"
                    shape
                    outlined
                ></v-text-field>
            </v-col>
        </v-row> 
        </v-card-text>
    </v-card>
      </div>
        <v-spacer></v-spacer>
        <v-row v-if="this.isEditing==true" >
            <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6" class="r">
                <v-btn
                    color="success"
                    @click="save"
                >
                บันทึก
                </v-btn>
            </v-col>
            <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6" >
                <v-btn
                    color="error" @click="isEditing = !isEditing"
                >
                ยกเลิก
                </v-btn>
            </v-col>
        </v-row>
        </div>
        </v-flex>
    </v-layout>
    </div>
</template>
<script>
import NavbarSt from '@/components/NavbarSt'
import {store} from '../../store/index'
import axios from 'axios'
  export default {
      store,
      components : {
        NavbarSt
    },
    data(){
        return{
        isEditing:false,
        hasSaved:false,
        name:this.$store.getters.name,
        surname:this.$store.getters.surname,
        sex_id:this.$store.getters.sex_id,
        religion:this.$store.getters.religion,
        stu_id:this.$store.getters.stu_id,
        card_id:this.$store.getters.card_id,
        branch_id:this.$store.getters.branch_id,
        stu_year:this.$store.getters.stu_year,
        email:this.$store.getters.email,
        tel:this.$store.getters.tel,
        disease:this.$store.getters.disease,
        be_allergic:this.$store.getters.be_allergic,
        food_allergy:this.$store.getters.food_allergy,

        branch_Selected: {
            branch_id:1,
        },
        branchs:[
            {   branch_id:1,
                branch_name:'วิทยาการคอมพิวเตอร์'},
            {   branch_id:2,
                branch_name:'วิทยาศาสตร์และเทคโนโลยีสิ่งแวดล้อม'},
            {   branch_id:3,
                branch_name:'วัสดุศาสตร์อุตสาหกรรม'},
        ],
        sex_Selected: {
            sex_id:1,
        },
        sexs:[
            {   sex_id:1,
                sex_name:'ชาย'},
            {   sex_id:2,
                sex_name:'หญิง'}
            
        ],

    }},
    methods: {
        
        save(){
            var stu_id_form = /^[0-9]{12}\-[0-9]?$/;
            var card_id_form= /^[0-9]{13}?$/;
            var tel_form= /^[0-9]{10}?$/;
            var stu_id_check=true
            var card_id_check=true
            var tel_check=true
            if(stu_id_form.test(this.stu_id)){stu_id_check=false}else{stu_id_check=true}
            if(card_id_form.test(this.card_id)){card_id_check=false}else{card_id_check=true}
            if(tel_form.test(this.tel)){tel_check=false}else{tel_check=true}
            if(stu_id_check){alert('กรุณากรอกรหัสนักศึกษาให้ถูกแบบฟอร์ม')}else
            if(card_id_check){alert('กรุณากรอกรหัสบัตรประชาชนให้ถูกแบบฟอร์ม')}else
            if(tel_check){alert('กรุณากรอกเบอร์โทรติดต่อใหม่ กรอกได้เพียงตัวเลข10หลัก')}else{
            axios.post('https://rmutp01.herokuapp.com/api/updateprofile',
                { user_id:this.$store.getters.user_id,
                  name:this.name,
                  surname:this.surname,
                  sex_id:this.sex_Selected.sex_id,
                  religion:this.religion,
                  stu_id:this.stu_id,
                  card_id:this.card_id,
                  branch_id:this.branch_Selected.branch_id,
                  stu_year:this.stu_year,
                  email:this.email,
                  tel:this.tel,
                  disease:this.disease,
                  be_allergic:this.be_allergic,
                  food_allergy:this.food_allergy
                }
                ).then(response => {
                    alert("อัพเดทโปรไฟล์เสร็จสิ้น")
                    this.$store.commit('set_name',this.name)
                    this.$store.commit('set_surname',this.surname)
                    this.$store.commit('set_sex_id',response.data[0].sex)
                    this.$store.commit('set_religion',this.religion)
                    this.$store.commit('set_stu_id',this.stu_id)
                    this.$store.commit('set_card_id',this.card_id)
                    this.$store.commit('set_branch_id',response.data[0].branch_name)
                    this.$store.commit('set_stu_year',this.stu_year)
                    this.$store.commit('set_email',this.email)
                    this.$store.commit('set_tel',this.tel)
                    this.$store.commit('set_disease',this.disease)
                    this.$store.commit('set_be_allergic',this.be_allergic)
                    this.$store.commit('set_food_allergy',this.food_allergy)
                    this.isEditing=false
                    this.hasSaved = true
                },err=>{ console.log(err)})
            }
        
      },
    },
    mounted(){
        console.log(this.$store.getters.branch_id)
        if(this.$store.getters.loginstatus==false){
        this.$router.push({name:"home"})
      }
    }
  }
</script>