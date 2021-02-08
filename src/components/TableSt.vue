<template>
  <div>
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
          <div style="margin-bottom: 25px">
          <v-card class="elevation-12 " >
      <v-card-text class="cardbo">
              <v-row>
                  
        <v-col xs="2" sm="2" md="4" lg="4" xl="4">
          <p class="text-sm-left">ชาย</p>
        </v-col>
        <v-col xs="1" sm="1" md="2" lg="2" xl="2">
          <p class="text-sm-left" >{{sexmale}}</p>
        </v-col>
        <v-col xs="2" sm="2" md="4" lg="4" xl="4">
          <p class="text-sm-left">หญิง</p>
        </v-col>
        <v-col xs="1" sm="1" md="2" lg="2" xl="2">
          <p class="text-sm-left" >{{sexfemale}}</p>
        </v-col>
      </v-row>
      </v-card-text>
    </v-card>
    
          </div>
    <v-spacer></v-spacer>
    <div>
      
    <v-card class="elevation-12 " >
      <v-card-text class="cardbo">
    <v-simple-table
      :dense="dense"
      :fixed-header="fixedHeader"
      :height="height"
    >
      <template v-slot:default >
        <div id="app">
        <table  cellpadding="6" ref="printTable">
        <thead >
          <tr>
            <th class="text-left"><p>Name</p></th>
            <th class="text-left">รหัสนักศึกษา</th>
            <th class="text-left">สาขา</th>
            <th class="text-left">ชั้นปี</th>
            <th class="text-left">เบอร์โทร</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in $store.getters.reportlists" :key="item.name">
            <td class="text-left">{{ item.name }} {{ item.surname }}</td>
            <td class="text-left">{{ item.stu_id }}</td>
            <td class="text-left">{{ item.branch }}</td>
            <td class="text-left">{{ item.stu_year }}</td>
            <th class="text-left">{{ item.tel}}</th>
          </tr>
        </tbody>
        </table>
        
        </div>
      </template>
    </v-simple-table>
    </v-card-text>
    </v-card>
    </div>
    </v-flex>
    </v-layout>
    
  </div>
</template>


<script>
import NavbarAdmin from '@/components/NavbarAdmin'
import {store} from '../store/index'
import axios from 'axios'
  export default {
      store,
      components:{
          NavbarAdmin,
      },
    data(){
        return{
      dense: false,
      fixedHeader: true,
      height: 300,
      sexmale:'',
      sexfemale:'',
    }
  },
  methods:{
      getreportsex(){
        axios.post('https://rmutp01.herokuapp.com/api/getreportsex',
                { activity_id: this.$route.params.activity_id }
                ).then(response => {
                    console.log(response)
                    this.sexmale=response.data[0].male
                    this.sexfemale=response.data[0].female
                })
      },
      getreportlist(){
          console.log("ใน getrepostlist :"+this.$route.params.activity_id)
          axios.post('https://rmutp01.herokuapp.com/api/getreportlist',
                {
                activity_id:this.$route.params.activity_id
                }
                ).then(response => {
                    console.log(response)
                  this.$store.state.reportlists=[];
                  for (var key of response.data) {
                      console.log(key.name)
                  this.set_reportlist(key.name,key.surname,key.stu_id,this.branchtranslate(key.branch_id)
                  ,key.stu_year,key.tel)
                }
            },err =>{
                console.log(err)
            })
    },
    set_reportlist(name,surname,stu_id,branch,stu_year,tel){  
          this.$store.dispatch('set_reportlist', {
          name:name,
          surname:surname,
          stu_id:stu_id,
          branch:branch,
          stu_year:stu_year,
          tel:tel
      })
    },
    branchtranslate(branch_id){
        let branch_name
        if(branch_id==1){branch_name='วิทยาการคอมพิวเตอร์'}else
        if(branch_id==2){branch_name='วิทยาศาสตร์และเทคโนโลยีสิ่งแวดล้อม'}else
        if(branch_id==3){branch_name='วัสดุศาสตร์อุตสาหกรรม'}
        return branch_name
    }
  },
  mounted(){
      if(this.$store.getters.loginstatus==false){
      this.$router.push({name:"loginadmin"})
      }
      this.getreportsex()
      this.getreportlist()
  }
}
</script>