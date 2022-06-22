<template>
  <div class="menu">
    <div class="menu__container">
      <h1 class="menu__title"> <strong>menu</strong></h1>
      <div class="menu__line"></div>
      <div class="menu__content">
        <app-menu-title :title="'Best Sellers'"/>
        <app-menu-card :store="$store.state.bestSellers" :item="item" :index="index" v-for="(item,index) in $store.state.bestSellers" :key="index+'bestSellers'"/>
        <app-menu-title :title="'Veg Pizzas'"/>
        <app-menu-card :store="$store.state.vegPizzas" :item="item" :index="index" v-for="(item, index) in $store.state.vegPizzas" :key="index+'vegPizza'"/>
        <app-menu-title :title="'Non Veg Pizzas'"/>
        <app-menu-card :store="$store.state.nonVegPizzas" :item="item" :index="index" v-for="(item, index) in $store.state.nonVegPizzas" :key="index+'nonVegPizzas'"/>
        <app-menu-title :title="'Side Dishes'"/>
        <app-menu-card :store="$store.state.sideDishes" :item="item" :index="index" v-for="(item, index) in $store.state.sideDishes" :key="index+'sideDishes'"/>
        <app-menu-title :title="'Desserts'"/>
        <app-menu-card :store="$store.state.desserts" :item="item" :index="index" v-for="(item, index) in $store.state.desserts" :key="index+'desserts'"/>
        <app-button-order v-if="$store.state.isActiveButtonOrder" />
      </div>
    </div>
  </div> 
</template>
<script>
import AppMenuCard from '@/components/AppMenuCard.vue'
import AppMenuTitle from '@/components/AppMenuTitle.vue'
import AppButtonOrder from '@/components/AppButtonOrder.vue'
export default {
  components:{
    AppMenuCard,
    AppMenuTitle,
    AppButtonOrder
  },
  data(){
    return{
    }
  },

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



</style>

