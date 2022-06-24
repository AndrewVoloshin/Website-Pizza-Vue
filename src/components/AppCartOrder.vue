<template>
  <div class="cart-order">
    <h1>Cart</h1>
    <button v-if="$store.state.generalOrder" class="btn__clear">Clear Cart</button>
    <div class="cart-order__conteiner">
      <div class="cart-order__content">
        <span v-if="!$store.state.generalOrder">Cart is Empty!</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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

