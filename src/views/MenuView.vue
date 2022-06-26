<template>
  <div class="menu">
    <div class="menu__container">
      <h1 class="menu__title"> <strong>menu</strong></h1>
      <div class="menu__line"></div>
      <div class="menu__content">
        <div class="menu__section1">
          <app-menu-title :title="'Best Sellers'"/>
          <div class="content__section">
            <app-menu-cart :store="$store.state.bestSellers" :item="item" :index="index" v-for="(item,index) in $store.state.bestSellers" :key="index+'bestSellers'"/>
          </div>
          <app-menu-title :title="'Veg Pizzas'"/>
          <div class="content__section">
            <app-menu-cart :store="$store.state.vegPizzas" :item="item" :index="index" v-for="(item, index) in $store.state.vegPizzas" :key="index+'vegPizza'"/>
          </div>
          <app-menu-title :title="'Non Veg Pizzas'"/>
          <div class="content__section">
            <app-menu-cart :store="$store.state.nonVegPizzas" :item="item" :index="index" v-for="(item, index) in $store.state.nonVegPizzas" :key="index+'nonVegPizzas'"/>
          </div>
          <app-menu-title :title="'Side Dishes'"/>
          <div class="content__section">
            <app-menu-cart :store="$store.state.sideDishes" :item="item" :index="index" v-for="(item, index) in $store.state.sideDishes" :key="index+'sideDishes'"/>
          </div>
          <app-menu-title :title="'Desserts'"/>
          <div class="content__section">
            <app-menu-cart :store="$store.state.desserts" :item="item" :index="index" v-for="(item, index) in $store.state.desserts" :key="index+'desserts'"/>
          </div>
          <app-button-order v-if="$store.state.isActiveButtonOrder" />
        </div>
        <div class="menu__section2">
          <div class="menu__order">
            <app-cart-order/>
          </div>
        </div>
      </div>
    </div>
  </div> 
</template>
<script>
import AppMenuCart from '@/components/AppMenuCart.vue'
import AppMenuTitle from '@/components/AppMenuTitle.vue'
import AppButtonOrder from '@/components/AppButtonOrder.vue'
import AppCartOrder from '@/components/AppCartOrder.vue'
export default {
  components:{
    AppMenuCart,
    AppMenuTitle,
    AppButtonOrder,
    AppCartOrder
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
.menu__content{
  display:flex;
}
.menu__section1{
  flex: 0 0 100%;
  padding:0 8px;
}

.menu__section2{
  position: sticky;
  top:64px;
  padding:0 8px;
}

.menu__title{
  text-transform: uppercase;
  font-weight:300;
  margin: 0;
}

.menu__line{
  height: 2px;
  background: #000;
  margin: 4px 0 24px ;
}

.menu__section2{
  display:none;
}

.menu__order{
  position: sticky;
  top:64px;
  margin-top: 24px;
}

@media screen and ( min-width:768px){
  .menu__container{
    width: 688px;
  }
  
  .content__section{
    display:flex;
    flex-wrap: wrap;
  }

  .cart{
    margin: 8px 24px 8px 0;
    width: 200px;
  }
}


@media screen and ( min-width:992px){
 .menu__container{
    width: 960px;
  }

  .menu__section1{
    flex: 0 0 auto;
    width:66%;
    
  }

  .menu__section2{
    display:block;
    flex: 0 0 auto;
    width:33%;
  }

  .menu__content{

  }

  .cart{
  margin: 8px 16px 8px 0;
  width: 185px;
}

}
</style>

