import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // home guest
  {
    path: '/',
    name: 'home',
    component: Home
  },
  //view guest
  {
    path: '/view/:activity_id',
    name: 'view',
    component: ()=>import('../views/View')
  },
  // home นักศึกษา
  {
    path: '/home/student',
    name: 'homest',
    component: ()=>import('../views/student/HomeSt')
  },
  // home admin
  {
    path: '/Home/admin',
    name: 'HomeAdmin',
    component: ()=>import('../views/admin/HomeAdmin')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // เพิ่มกิจกรรม
  {
    path: '/admin/InsertActivity',
    name: 'InsertActivity',
    component: () => import('../views/admin/InsertActivity')
  },
  // เปลี่ยนรหัสผ่านของนักศึกษา
  {
    path: '/Changepassword/Student',
    name: 'Changepassword',
    component: () => import('../views/student/Changepassword')
  },
  // เปลี่ยนรหัสผ่านของแอดมิน
  {
    path: '/Changepassword/admin',
    name: 'Changepasswordadmin',
    component: () => import('../views/admin/Changepasswordadmin')
  },
  // 
  {
    path: '/Historyregister',
    name: 'HistoryR',
    component: ()=>import('../views/student/HistoryR')
  },
  // ข้อมูลนักศึกษา
  {
    path: '/profile',
    name: 'Profile',
    component: ()=>import('../views/student/Profile')
  },
  // เข้าสู่ระบบแอดมิน
  {
    path: '/login/admin',
    name: 'loginadmin',
    component: ()=>import('../views/admin/loginadmin')
  },
  // สรุปข้อมูลนักศึกษาที่ลงทะเบียน
  {
    path: '/report/:activity_id',
    name: 'report',
    component: ()=>import('../views/admin/Report')
  },
  // รายละเอียดกิจกรรมของแอดมิน
  {
    path: '/viewactivity/admin/:activity_id',
    name: 'viewadmin',
    component: ()=>import('../views/admin/ViewAdmin')
  },
  // รายละเอียดกิจกรรมของนักศึกษา
  {
    path: '/viewactivity/student/:activity_id',
    name: 'viewst',
    component: ()=>import('../views/student/ViewSt')
  },
  // QRCode
  {
    path: '/QRCode',
    name: 'qrcode',
    component: ()=>import('../views/student/QRCode')
  },
  // ทรานสคริปกิจกรรม
  {
    path: '/transript',
    name: 'transript',
    component: ()=>import('../views/student/Transcript')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
