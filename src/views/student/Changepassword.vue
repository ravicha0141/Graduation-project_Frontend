<template>
    <div>
        <NavbarSt />
    <v-content>
      <v-container
        fluid
        fill-height
      >
        <v-layout
          align-center
          justify-center
        >
          <v-flex
            xs10
            sm10
            md10
            lg10
            xl10
          >
        <v-card class="elevation-12">
        <v-row class="conchange">
            <v-col class="cmart">
                <v-subheader class="font sub">รหัสผ่านเดิม</v-subheader>
            </v-col>
            <v-col class="marrt">
                <v-text-field
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required ]"
                    :type="show1 ? 'text' : 'password'"
                    name="oldpassword"
                    v-model="oldpass"
                    @click:append="show1 = !show1"
                    shape
                    outlined
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row class="conchange">
            <v-col cenself>
                <v-subheader class="font sub">รหัสผ่านใหม่</v-subheader>
            </v-col>
            <v-col class="marr">
                <v-text-field
                    :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show2 ? 'text' : 'password'"
                    name= "newpssword"
                    v-model="newpass1"
                    @click:append="show2 = !show2"
                    shape
                    outlined
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row class="conchange">
            <v-col cenself>
                <v-subheader class="font sub"> ยืนยันรหัสผ่าน </v-subheader>
            </v-col>
            <v-col class="marr">
                <v-text-field
                    :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show3 ? 'text' : 'password'"
                    name="confirmpassword"
                    v-model="newpass2"
                    @click:append="show3 = !show3"
                    shape
                    outlined
                ></v-text-field>
            </v-col>
        </v-row>
    <!-- </div> -->
        <v-row class="conchange">
            <v-col  class="r"> 
                <v-btn color="success" @click="changepass()">ยืนยัน</v-btn>
            </v-col>
            <v-col >
                <v-btn color="error" @click="cancel()" >ยกเลิก</v-btn>
            </v-col>
        </v-row>
        <!-- </div> -->
        </v-card>
        </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    </div> 
</template>
<script>
import NavbarSt from '@/components/NavbarSt'
import axios from 'axios'
import {store} from '../../store/index'
  export default {
    store,
    components : {
        NavbarSt
    },
    data(){
      return {
        show1: false,
        show2: false,
        show3: false,
        oldpass:'',
        newpass1:'',
        newpass2:'',
         rules: {
           //required: value => !!value || 'Required.',
           min: v => v.length >= 8 || 'Min 8 characters',
           emailMatch: () => ('The email and password you entered don\'t match'), 
           compare:value=>value==this.$store.getters.password || 'password wrong!'
         },
      }
    },
    methods:{
        changepass(){
            if(this.oldpass!=this.$store.getters.password){alert('รหัสผ่านเดิมผิด')}
            else{
                if(this.newpass1.length>=8 && this.newpass2.length>=8){
                    if(this.newpass1==this.newpass2){
                        axios.post('https://rmutp01.herokuapp.com/api/updatepassword',
                        {
                            user_id:this.$store.getters.user_id,
                            password:this.newpass1
                        }
                        ).then(response => {
                            alert('เปลี่ยนรหัสผ่านเสร็จสิ้น')
                            this.$store.commit('set_password',this.newpass1)
                            this.oldpass=''
                            this.newpass1=''
                            this.newpass2=''
                    })
                    }else{alert('รหัสผ่านใหม่ไม่ตรงกัน')}
                }else{alert('รหัสผ่านต้องมีอย่างน้อย 8 ตัว')}
            }
        },
        cancel(){
            this.oldpass='',
            this.newpass1='',
            this.newpass2=''
        }

    },
    mounted(){
        if(this.$store.getters.loginstatus=false){
        this.$router.push({name:'home'})
      }
    }
  }
</script>