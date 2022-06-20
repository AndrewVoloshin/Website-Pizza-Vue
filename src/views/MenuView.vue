<template>
  <div class="menu">
    <div class="menu__container">
      <h1 class="menu__title"> <strong>menu</strong></h1>
      <div class="menu__line"></div>
      <div class="menu__content">
        <app-menu-title-vue :title="'Best Sellers'"/>
        <app-menu-card :pizza="item" :index="index" v-for="(item, index) in $store.state.bestSellers" :key="index"/>
        <app-menu-title-vue :title="'Veg Pizzas'"/>
        <app-menu-card :pizza="item" :index="index" v-for="(item, index) in $store.state.vegPizzas" :key="index"/>
      </div>
    </div>
  </div>
</template>
<script>
import AppMenuCard from '@/components/AppMenuCard.vue'
import AppMenuTitleVue from '@/components/AppMenuTitle.vue'
export default {
  components:{
    AppMenuCard,
    AppMenuTitleVue,
  },

  computed:{
    isActiveSidebar(){
      return this.$store.state.isActiveSidebar
    }
  }
}
</script>

<style scoped>
.menu{
  display: flex;
  justify-content: center;
  margin-top: 56px;
  padding: 0 16px;
}

.menu__container{
  width: 100%;
  height: 100%;
}

.menu__title{
  text-transform: uppercase;
  font-weight:300;
  margin: 0;
}

.menu__line{
  height: 2px;
  background: #000;
  margin: 4px 0 48px ;
}

.menu__content{
  /* padding-top:24px; */
}


</style>

