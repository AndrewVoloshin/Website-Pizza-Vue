<template>
  <div class="cart-order">
    <h1>Cart</h1>
    <button v-if="$store.state.generalOrder" class="btn__clear">Clear Cart</button>
    <div class="cart-order__conteiner">
      <div v-if="!$store.state.generalOrder" class="cart-order__content">
        <span >Cart is Empty!</span>
      </div>

      <app-menu-card
      :displayBorder="true"
      :notDiplayImg="true"
      :item="item" 
      v-for="(item,index) in order" 
      :key="index+'order'" />

    </div>
  </div>
</template>

<script>
import AppMenuCard from '@/components/AppMenuCard.vue'

export default {
  components:{
    AppMenuCard,
  },
  computed:{
    order(){
      let localOrder=[]
      for (let key in this.$store.state.menu){
        this.$store.state.menu[key].forEach((elem)=>{
          if(elem.order>0) localOrder.push(elem)
        })
      }
      return localOrder
    }
  }

}
</script>


<style scoped>
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
  justify-content: center;
  align-items: center;
}

.cart-order__content{
  margin: 0 8px;
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

</style>

