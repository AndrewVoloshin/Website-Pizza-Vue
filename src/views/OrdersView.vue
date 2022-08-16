<template>
  <div class="orders">
    <div class="orders__container">
      <app-title :titleText="'orders'" class="title" />
        <h1 v-if="!$store.state.ordersHistory.length">You haven't ordered anything yet!</h1>
      <div class="orders__content" v-if="$store.state.ordersHistory.length"  >
        <div class="line"></div>
        <div class="order__section" 
        v-for=" (order,index) in $store.state.ordersHistory" :key="index">
          <strong class="order__time">Time: </strong> {{order.time}}
          <app-address :address="order.address"/>
          <table class="order__table">
            <thead >
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody v-for="(position, index) in order.orderProduct" :key="index">
              <tr>
                <th>{{index +1}}</th>
                <td>{{position.name}}</td>
                <td>{{position.cost}}</td>
                <td>{{position.order}}</td>
                <td>{{position.cost * position.order }}</td>
              </tr>
            </tbody>
          </table>
          <strong>Total Price: </strong> {{order.total}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppTitle from '@/components/AppTitle.vue'
import AppAddress from '@/components/AppAddress.vue';

export default {
  components: { AppTitle,AppAddress },
}
</script>

<style scoped>
h1{
  font-size: calc(1.475rem + 2.7vw);
  font-weight: 300;
  line-height: 1.2;
  margin: 0;
}
strong{
  font-weight: bold;
}

.orders{
  display: flex;
  justify-content: center;
  margin: 56px 0 48px;
}

.orders__container{
  width: 100%;
  height: 100%;
  padding:0 16px;
}

.title{
  margin-bottom: 24px;
}

.line{
  width: 100%;
  height: 1px;
  background-color: black;
}
.order__section{
  padding: 16px 0;
  border-bottom: 1px solid black;
}
.order__time{
  display:inline-block;
  margin-bottom: 8px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
  text-align: left;
    
}

th, td {
  padding: 0.5rem 0.5rem;
}

thead tr{
  border-bottom: 1px solid black;
}

tbody tr{
  border-bottom: 1px solid #ddd;
}
tbody tr:hover{
  background: rgba(0, 0, 0, 0.075);
}


@media screen and (min-width: 576px){
  .orders__container{
    width:540px;
  }
}

@media screen and ( min-width:768px){
  .orders__container{
    width: 720px;
  }
}

@media screen and ( min-width:992px){
 .orders__container{
    width: 960px;
  }
}

@media screen and (min-width:1200px) {
  .orders__container{
   width: 1140px;
  }
}

@media screen and (min-width:1400px) {
  .orders__container{
    width: 1320px;
  }
}

</style>
