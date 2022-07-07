<template>
  <div class="menu" >
    <div class="menu__container">
      <app-title :titleText="'menu'" class="title" />
      <div class="menu__content">
        <div class="menu__section1">
          <app-preloader-menu/>
          <app-menu-title :title="'Best Sellers'"/>
          <div class="content__section">
            <app-menu-card
            :item="item" 
            v-for="(item,index) in bestSellers"
            :key="index+'bestSellers'"/>
          </div>
          <app-menu-title :title="'Veg Pizzas'"/>
          <div class="content__section">
            <app-menu-card
            :item="item"  
            v-for="(item,index) in $store.state.menu.vegPizzas"
            :key="index+'vegPizzas'"/>
          </div>
          <app-menu-title :title="'Non Veg Pizzas'"/>
          <div class="content__section">
            <app-menu-card 
            :item="item"  
            v-for="(item,index) in $store.state.menu.nonVegPizzas" 
            :key="index+'vegPizzas'"/>
          </div>
          <app-menu-title :title="'Side Dishes'"/>
          <div class="content__section">
            <app-menu-card 
            :item="item"  
            v-for="(item,index) in $store.state.menu.sideDishes" 
            :key="index+'vegPizzas'"/>
          </div>
          <app-menu-title :title="'Desserts'"/>
          <div class="content__section">
            <app-menu-card 
            :img="true"  
            :item="item" 
            v-for="(item,index) in $store.state.menu.desserts" 
            :key="index+'vegPizzas'"/>
          </div>
          <div v-if="$store.state.isActiveButtonOrder && isButtonOn" class="section__button">
            <app-button-order  />
          </div>

        </div>
        <div class="menu__section2">
          <div class="menu__order">
            <app-card-order/>
          </div>
        </div>
      </div>
    </div>
  </div> 
</template>
<script>
import AppMenuCard from '@/components/AppMenuCard.vue'
import AppMenuTitle from '@/components/AppMenuTitle.vue'
import AppButtonOrder from '@/components/AppButtonOrder.vue'
import AppCardOrder from '@/components/AppCartOrder.vue'
import AppTitle from '@/components/AppTitle.vue'
import AppPreloaderMenu from '@/components/AppPreloaderMenu.vue'

export default {
  components:{
    AppMenuCard,
    AppMenuTitle,
    AppButtonOrder,
    AppCardOrder,AppTitle,
    AppPreloaderMenu
  },
  computed:{
    bestSellers(){
      let localBestSellers=[]
      for(let key in this.$store.state.menu){
        this.$store.state.menu[key].forEach((elem)=>{
          if(elem.isBestSellers) localBestSellers.push(elem)
        })
      }
    return localBestSellers
    },
   
  },
  
  data(){
    return{
      isButtonOn: false,
    }
  },
   created() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },
   destroyed() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      this.isButtonOn = window.innerWidth < 992;
    }
  }
}

</script>

<style scoped>
.menu{
  display: flex;
  justify-content: center;
  margin-top: 56px;
}

.menu__container{
  width: 100%;
  height: 100%;
  padding: 0 16px;

}
.menu__content{
  display:flex;
  margin-bottom: 24px;
}
.menu__section1{
  flex: 0 0 100%;
}

.menu__section2{
  position: sticky;
  top:64px;
  padding:0 8px;
}

.title{
  margin-bottom: 24px;
}

.menu__section2{
  display:none;
}

.menu__order{
  position: sticky;
  top:64px;
  margin-top: 24px;
}

.section__button{
  position:fixed;
  bottom:0;
  left:0;
  width: 100%;
}

@media screen and (min-width: 576px){
  .menu__container{
    width:540px;
  }
}

@media screen and ( min-width:768px){
  .menu__container{
    width: 720px;
  }
  
  .content__section{
    display:flex;
    flex-wrap: wrap;
  }

  .card{
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

  .card{
    margin: 8px 16px 8px 0;
    width: 185px;
  }
}

@media screen and (min-width:1200px) {
  .menu__container{
   width: 1140px;
  }

  .card{
    margin: 8px 40px 8px 0;
    width: 200px;
  }
}

@media screen and (min-width:1400px) {
  .menu__container{
    width: 1320px;
  }

  .card{
    margin: 8px 32px 8px 0;
    width: 250px;
  }
}
</style>

