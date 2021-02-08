<template>
  <div>
    <br>
    <center><h1>{{$store.getters.ActivityType}}</h1></center>
    <center><v-btn color="primary" @click="send" v-if="$store.getters.loginstatus==true">ส่งนาา</v-btn></center>
    
    <v-simple-table
      :dense="dense"
      :fixed-header="fixedHeader"
    >
      <template v-slot:default >
        <thead >
        <tr>
            <th class="text-left">ชื่อกิจกรรม</th>
            <th class="text-left">วันที่</th>
            <th class="text-left">จำนวนคน</th>
            <th class="text-left">รายละเอียดกิจกรรม</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item) in $store.getters.activitylists" v-bind:key="item.activity_id">
            <td class="text-left">{{ item.title }}</td>
            <td class="text-left">{{ item.date_act_start }}</td>
            <td class="text-left">{{ item.people_regis }}/{{ item.people }}</td>
            <td>
                <v-btn icon >
                    <v-icon @click="ViewRouter(item.activity_id)">mdi-file-document-box-outline</v-icon>
                </v-btn>
            </td>
            <!-- <td>
                <v-btn icon class="text-left" @click="isEditing = !isEditing">
                     <v-icon large v-if="isEditing">mdi-star</v-icon>
                     <v-icon large v-else>mdi-star-outline</v-icon>
                     
                </v-btn>
            </td> -->
          </tr>
        </tbody>
      </template>
    </v-simple-table>
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
      axios.post("/api/notification",{
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
      axios.post("/api/notification",{
                    "detail":"Testจากvue กิจกรรมใหม่มาแล้ว"
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
      ViewRouter(activity_id){
            this.$store.commit('set_activity_id',activity_id)
            if(this.$store.getters.username!=''){
            this.$router.push({path:"/viewactivity/admin/"+activity_id})
            }
            //console.log(view)
        }
        
    },
  mounted(){
      if(this.$store.getters.loginstatus=false){
        this.$router.push({name:'loginadmin'})
      }
  },
  }
</script>
