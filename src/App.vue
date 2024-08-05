<template>
  <HeaderVue />
  <HeaderMenu />
  <main >
    
      <router-view></router-view>
   
   
  </main>
  <FooterVue />
  <AuthComponent />
  <PopUpText />
</template>
<script>
import HeaderMenu from '@/components/HeaderMenu.vue';
import HeaderVue from '@/components/HeaderMain.vue';
import FooterVue from '@/components/FooterMain.vue';
import AuthComponent from '@/components/AuthComponent.vue';
import PopUpText from '@/components/PopUpComponent.vue';
export default {
  components: {
    HeaderMenu,
    HeaderVue,
    FooterVue,
    AuthComponent,
    PopUpText
  },
  methods: {
    
  },
  created() {
    
  },
}

</script>