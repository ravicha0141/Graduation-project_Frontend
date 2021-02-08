<template>
  <div>
    <br>
    <center class="titlefont">{{$store.getters.ActivityType}}</center>
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
    <v-card class="elevation-12 " >
      <v-card-text class="cardbo">
    <v-simple-table
      :dense="dense"
      :fixed-header="fixedHeader"
    >
      <template v-slot:default >
        <thead >
        <tr>
            <th class="text-center">ชื่อกิจกรรม</th>
            <th class="text-center">วันที่</th>
            <th class="text-center">จำนวนคน</th>
            <th class="text-center">รายละเอียดกิจกรรม</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item) in $store.getters.activitylists" v-bind:key="item.activity_id">
            <td class="text-left">{{ item.title }}</td>
            <td class="text-center">{{ item.date_act_start }}</td>
            <td class="text-center">{{ item.people_regis }}/{{ item.people }}</td>
            <td class="text-center">
                <v-btn icon >
                    <v-icon @click="ViewRouter(item.activity_id)">mdi-file-document-box-outline</v-icon>
                </v-btn>
            </td>
          </tr>
        </tbody>
      </template> 
    </v-simple-table>
  </v-card-text>
    </v-card>
    </v-flex>
    </v-layout>
  </div>
</template>
<script>
  import {store} from '../store/index'
  import axios from 'axios'
  export default {
  components:{
  },
  store,
  data(){
      return{
      activityType:'',
      dense: false,
      fixedHeader: true,
      isEditing: null,
      }
    },
  methods: {
    get_activity(){
      axios.post("https://rmutp01.herokuapp.com/api/notification",{
                    "activitytype_id":this.$store.getters.activitytype_id
                })
                    .then((response) => {
                      //console.log(response)
                        //console.log("ส่งแล้ว")
                    })    
                    .catch((errors) => { 
                    //console.log("api error นา")   
                    //console.log(errors)
                    }) 
    },
    send(){
      axios.post("https://rmutp01.herokuapp.com/api/notification",{
                    detail:"Testจากvue กิจกรรมใหม่มาแล้ว"
                })
                    .then((response) => {
                        console.log("ส่งแล้ว")
                    })    
                    .catch((errors) => { 
                    //console.log("api error นา")   
                    //console.log(errors)
                    })   
    },
      ViewRouter(activity_id){
            this.$store.commit('set_activity_id',activity_id)
            if(this.$store.getters.loginstatus==false){
            this.$router.push({path:"/view/"+activity_id})
            }else{
              if(this.$store.getters.username==''){
                this.$router.push({path:"/viewactivity/student/"+activity_id})
              }else{
                this.$router.push({path:"/viewactivity/admin/"+activity_id})
              }
            }
            //console.log(view)
        },
        
    },
  mounted(){
      
  },
    
    
  }
</script>
