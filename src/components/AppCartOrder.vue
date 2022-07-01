<template>
  <div class="cart-order">
    <h1>Cart</h1>
    <button v-if="$store.state.valueGeneralOrder" @click="clear()" class="btn__clear">Clear Cart</button>
    <div :class="['cart-order__conteiner',{'order':$store.state.valueGeneralOrder}]">
      
      <div v-if="!$store.state.valueGeneralOrder" class="cart-order__content">
        <span >Cart is Empty!</span>
      </div>
      
      <div class="menu__container">
        <app-menu-card
        :displayBorder="true"
        :notDiplayImg="true"
        :item="item" 
        v-for="(item,index) in order" 
        :key="index+'order'" />
      </div>
     
    </div>

     <div v-if="$store.state.valueGeneralOrder" class="cart__section">
        <strong> Total: {{total}}</strong> 
        <div class="section__button">
          <app-button-order/>
        </div>
      </div>
  </div>
</template>

<script>
import AppMenuCard from '@/components/AppMenuCard.vue'
import AppButtonOrder from './AppButtonOrder.vue'

export default {
  components:{
    AppMenuCard,
    AppButtonOrder
  },
  data(){
    return{
    }
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
  methods:{
    clear(){
      this.$store.getters.computedOrder.forEach(elem=>elem.order=0)
      this.$store.state.valueGeneralOrder =0
    }
  }
}
</script>


<style scoped>

strong{
  margin: 8px 8px 12px;
  font-weight: bolder;
}

span{
  font-size: 32px;
  font-weight: 700;
}

h1{
  font-size: calc(1.375rem + 1.5vw);
  margin: 8px;

}
.cart-order{
  background: #ddd;
}

.cart-order__conteiner{
  height: 400px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  
  align-items: center;
  margin: 8px 8px 0 ;
  }

.order{
  justify-content: space-between;
  border-top: 1px solid #000;
  height: 310px;
}

.cart-order__content{
  margin: 0 8px;
}

.menu__container{
  width: 100%;
  overflow-y: auto;
}

.btn__clear{
  position:absolute;
  top:0;
  right: 0;
  cursor: pointer;
  background-color: #f33;
  border:none;
  color:white;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: large;
  margin: 8px;
  line-height: 1.5;
  transition: .15s ease-in-out;
}

.section__button{
  position:relative;
  width: 100%;
  height: auto;

}

.cart__section{
  display: flex;
  flex-direction: column;
}

</style>

