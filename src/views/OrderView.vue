<template>
 <div class="order">
    <div class="order__container">
      <app-title :titleText="'cart'" class="order__title" />
      <div class="order__list">
        <app-menu-card
        :displayBorder="false"
        :notDiplayImg="notDiplayImg"
        :item="item" 
        :ismodeOrder="true"
        v-for="(item,index) in order" 
        :key="index+'order'" />
      </div>
      <div class="order__content">
        <strong class="order__text">Total Prise: {{total}} </strong>
        <router-link class="order__button" tag="button" to="/">checkout</router-link>
      </div>
    </div>
 </div>
</template>

<script>
import AppTitle from '@/components/AppTitle.vue'
import AppMenuCard from '@/components/AppMenuCard.vue'

export default{
  components:{
    AppTitle,
    AppMenuCard
  },
  computed:{
    order(){
      return  this.$store.getters.computedOrder
    },
    total(){
      return this.$store.getters.computedOrder.reduce((acc,current)=>{
        return acc+ current.order*current.cost
      },0)
    }

  },

  data(){
    return{
      notDiplayImg: false,
    }
  },
  
  created() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  } ,
  destroyed() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      this.notDiplayImg = window.innerWidth < 992;
    }
  }

}

</script>

<style scoped>

strong{
  font-weight: bolder;
}

.order{
  display: flex;
  justify-content: center;
  margin-top: 56px;
}

.order__container{
  width: 100%;
  padding:0 16px;

}

.order__title{
  margin-bottom: 24px;
}

.order__button{
  cursor: pointer;
  background-color: #724cf9;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: large;
  transition: .15s ease-in-out;
  text-transform: uppercase;
}

.order__button:hover{
  background-color: #5a2ff3;
  filter: drop-shadow(0 0 8px #724cf9);
}



.order__text{
  display: block;
  margin: 16px 0;
}

@media screen and (min-width:576px) {
  .order__container{
    width: 540px;
  }
}
@media screen and (min-width:768px) {
  .order__container{
    width: 720px;
  }
}
@media screen and (min-width:992px) {
    .order__container{
    width: 960px;
  }
}

@media screen and (min-width:1200px) {
  .order__container{
    width: 1140px;
  }
}

@media screen and (min-width:1400px) {
  .order__container{
    width: 1320px;
  }
}


</style>