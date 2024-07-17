import { createRouter, createWebHistory } from 'vue-router'
import guestRoutes from '@/modules/guest/route.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...guestRoutes,
  ]
})
router.beforeEach((to, from, next) => {
  console.log('before each');
  // if(to.name!='auth'){
  //   // let token = localStorage.getItem('token');
  //   // if(!token){
      
  //     // localStorage.removeItem('token');
  //     // localStorage.removeItem('userName');
  //     // localStorage.removeItem('role');
  //     // window.location.href = 'https://iqlabs.uz/';
  //   // }
  // }
  
  next()
})
export default router
