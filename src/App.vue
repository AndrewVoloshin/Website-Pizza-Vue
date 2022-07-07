<template>
  <div id="app">
    <app-preloader/>
    <app-header/>
    <app-sidebar/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppPreloader from '@/components/AppPreloader.vue'


export default {
  name: 'HomeView',
  components: {
    AppHeader,
    AppSidebar,
    AppFooter,
    AppPreloader
},
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400&display=swap');
:root{
  --font-sans-serif: 'Noto Sans','Roboto', sans-serif;
}

*{
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: var(--font-sans-serif);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
}

strong{
  font-weight: 500;
}

h1{
  font-weight: 500;
  line-height: 1.2
}
</style>
