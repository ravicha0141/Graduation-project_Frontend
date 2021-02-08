import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store=new Vuex.Store({
  state: {
    //Loginหรือยัง
    loginstatus:false,
    //กำหนดList กิจรรม    
    ActivityType:'กิจกรรมทั้งหมด',
    ActivityType_id:'all',

    //ข้อมูลlist กิจกรรม
    activitylist:{
      title:'',
      date_act_start:'',
      people_regis:'',
      people:'',
      activity_id:''
    },
    activitylists:[],
    
    //ข้อมูลlist นศ ที่ลงทะเบียนในหน้า report
    reportlist:{
      name:'',
      surname:'',
      stu_id:'',
      branch:'',
      stu_year:'',
      tel:''
    },
    reportlists:[],

    //รายละเอียดกิจกรรม รวมข้อมูลในlist
    activity_id:'',
    maintype_id:'',
    subtype_id:'',
    title:'',
    hours:'',
    place:'',
    faculty:'',
    people:'',
    learn_year:'',
    term:'',
    stusend_year:'',
    detail:'',
    date_act_start:'',
    time_act_start:'',
    date_regis_start:'',
    date_regis_end:'',
    date_post:'',
    people_regis:'',

    //ข้อมูล นศ
    user_id:'',
    name:'',
    surname:'',
    sex_id:'',
    religion:'',
    stu_id:'',
    card_id:'',
    branch_id:'',
    stu_year:'',
    email:'',
    tel:'',
    disease:'',
    be_allergic:'',
    food_allergy:'',
    password:'',

    //มาตรฐาน Transcript
    stand_university_act:'',
    stand_university_hour:'',
    stand_devstudent_act:'',
    stand_devstudent_hour:'',

    //Transript ของนักศึกษา
    university_act:'',
    university_hour:'',
    technical_act:'',
    sport_act:'',
    perform_act:'',
    moral_act:'',
    cultural_act:'',
    devstudent_hour:'',

    //แจ้งเตือน
    device_code:'',

    //Admin
    username:''
  },
  mutations: {
    //Login Status
    set_loginstatus(state,loginstatus){state.loginstatus=loginstatus},

    //ข้อมูลlist กิจกรรม
    set_activitylist(state,key){
      state.activitylist.title=key.title
      state.activitylist.date_act_start=key.date_act_start
      state.activitylist.people_regis=key.people_regis
      state.activitylist.people=key.people
      state.activitylist.activity_id=key.activity_id
      state.activitylists.push(state.activitylist)
      state.activitylist={
        title:'',
        date_act_start:'',
        people_regis:'',
        people:'',
        activity_id:''
      }
    },

    //ข้อมูลหน้า report
    set_reportlist(state,key){
      state.reportlist.name=key.name
      state.reportlist.surname=key.surname
      state.reportlist.stu_id=key.stu_id
      state.reportlist.branch=key.branch
      state.reportlist.stu_year=key.stu_year
      state.reportlist.tel=key.tel
      state.reportlists.push(state.reportlist)
      state.reportlist={
        name:'',
        surname:'',
        stu_id:'',
        branch:'',
        stu_year:'',
        tel:''
      }
    },

    //กำหนดList กิจรรม
    set_ActivityType(state,ActivityType){state.ActivityType=ActivityType},
    set_ActivityType_id(state,ActivityType_id){state.ActivityType_id=ActivityType_id},

    //รายละเอียดกิจกรรม รวมข้อมูลในlist
    set_activity_id(state,activity_id){state.activity_id=activity_id},
    set_maintype_id(state,maintype_id){state.maintype_id=maintype_id},
    set_subtype_id(state,subtype_id){state.subtype_id=subtype_id},
    set_title(state,title){state.title=title},
    set_hours(state,hours){state.hours=hours},
    set_place(state,place){state.place=place},
    set_faculty(state,faculty){state.faculty=faculty},
    set_people(state,people){state.people=people},
    set_learn_year(state,learn_year){state.learn_year=learn_year},
    set_term(state,term){state.term=term},
    set_stusend_year(state,stusend_year){state.stusend_year=stusend_year},
    set_detail(state,detail){state.detail=detail},
    set_date_act_start(state,date_act_start){state.date_act_start=date_act_start},
    set_time_act_start(state,time_act_start){state.time_act_start=time_act_start},
    set_date_regis_start(state,date_regis_start){state.date_regis_start=date_regis_start},
    set_date_regis_end(state,date_regis_end){state.date_regis_end=date_regis_end},
    set_date_post(state,date_post){state.date_post=date_post},
    set_people_regis(state,people_regis){state.people_regis=people_regis},

    //ข้อมูล นศ
    set_user_id(state,user_id){state.user_id=user_id},
    set_name(state,name){state.name=name},
    set_surname(state,surname){state.surname=surname},
    set_sex_id(state,sex_id){state.sex_id=sex_id},
    set_religion(state,religion){state.religion=religion},
    set_stu_id(state,stu_id){state.stu_id=stu_id},
    set_card_id(state,card_id){state.card_id=card_id},
    set_branch_id(state,branch_id){state.branch_id=branch_id},
    set_stu_year(state,stu_year){state.stu_year=stu_year},
    set_email(state,email){state.email=email},
    set_tel(state,tel){state.tel=tel},
    set_disease(state,disease){state.disease=disease},
    set_be_allergic(state,be_allergic){state.be_allergic=be_allergic},
    set_food_allergy(state,food_allergy){state.food_allergy=food_allergy},
    set_password(state,password){state.password=password},

    //มาตรฐาน Transcript
    set_stand_university_act(state,stand_university_act){state.stand_university_act=stand_university_act},
    set_stand_university_hour(state,stand_university_hour){state.stand_university_hour=stand_university_hour},
    set_stand_devstudent_act(state,stand_devstudent_act){state.stand_devstudent_act=stand_devstudent_act},
    set_stand_devstudent_hour(state,stand_devstudent_hour){state.stand_devstudent_hour=stand_devstudent_hour},
    
    //Transript ของนักศึกษา
    set_university_act(state,university_act){state.university_act=university_act},
    set_university_hour(state,university_hour){state.university_hour=university_hour},
    set_technical_act(state,technical_act){state.technical_act=technical_act},
    set_sport_act(state,sport_act){state.sport_act=sport_act},
    set_perform_act(state,perform_act){state.perform_act=perform_act},
    set_moral_act(state,moral_act){state.moral_act=moral_act},
    set_cultural_act(state,cultural_act){state.cultural_act=cultural_act},
    set_devstudent_hour(state,devstudent_hour){state.devstudent_hour=devstudent_hour},

    //แจ้งเตือน
    set_device_code(state,device_code){state.device_code=device_code},

    //Admin
    set_username(state,username){state.username=username}
  },
  getters:{
    //Login Status
    loginstatus:state=>state.loginstatus,

    //ข้อมูลlist กิจกรรม
    activitylist:state=>state.activitylist,
    activitylists:state=>state.activitylists,

    //ข้อมูลlist report
    reportlist:state=>state.reportlist,
    reportlists:state=>state.reportlists,

    //กำหนดList กิจรรม
    ActivityType:state=>state.ActivityType,
    ActivityType_id:state=>state.ActivityType_id,

    //รายละเอียดกิจกรรม รวมข้อมูลในlist
    activity_id:state=>state.activity_id,
    maintype_id:state=>state.maintype_id,
    subtype_id:state=>state.subtype_id,
    title:state=>state.title,
    hours:state=>state.hours,
    place:state=>state.place,
    faculty:state=>state.faculty,
    people:state=>state.people,
    learn_year:state=>state.learn_year,
    term:state=>state.term,
    stusend_year:state=>state.stusend_year,
    detail:state=>state.detail,
    date_act_start:state=>state.date_act_start,
    time_act_start:state=>state.time_act_start,
    date_regis_start:state=>state.date_regis_start,
    date_regis_end:state=>state.date_regis_end,
    date_post:state=>state.date_post,
    people_regis:state=>state.people_regis,

    //ข้อมูล นศ
    user_id:state=>state.user_id,
    name:state=>state.name,
    surname:state=>state.surname,
    sex_id:state=>state.sex_id,
    religion:state=>state.religion,
    stu_id:state=>state.stu_id,
    card_id:state=>state.card_id,
    branch_id:state=>state.branch_id,
    stu_year:state=>state.stu_year,
    email:state=>state.	email,
    tel:state=>state.tel,
    disease:state=>state.disease,
    be_allergic:state=>state.be_allergic,
    food_allergy:state=>state.food_allergy,
    password:state=>state.password,

    //มาตรฐาน Transcript
    stand_university_act:state=>state.stand_university_act,
    stand_university_hour:state=>state.stand_university_hour,
    stand_devstudent_act:state=>state.stand_devstudent_act,
    stand_devstudent_hour:state=>state.stand_devstudent_hour,

    //Transript ของนักศึกษา
    university_act:state=>state.university_act,
    university_hour:state=>state.university_hour,
    technical_act:state=>state.technical_act,
    sport_act:state=>state.sport_act,
    perform_act:state=>state.perform_act,
    moral_act:state=>state.moral_act,
    cultural_act:state=>state.cultural_act,
    devstudent_hour:state=>state.devstudent_hour,

    //แจ้งเตือน
    device_code:state=>state.device_code,
    
    //Admin
    username:state=>state.username
  },
  actions: {
    set_activitylist:(context,key)=>{
      context.commit('set_activitylist',key)
    },
    set_reportlist:(context,key)=>{
      context.commit('set_reportlist',key)
    }
  },
  modules: {
  },
})
