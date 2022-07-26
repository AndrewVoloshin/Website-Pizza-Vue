<template>
  <div class="orders">
    <div class="orders__container">
      <app-title :titleText="'orders'" class="title" />
      <h1>You haven't ordered anything yet!</h1>
    </div>
  </div>
</template>

<script>
import AppTitle from '@/components/AppTitle.vue'

export default {
  components: { AppTitle },
  data() {
    return {
      
    }
  },
}
</script>

<style scoped>
h1{
  font-size: calc(1.475rem + 2.7vw);
  font-weight: 300;
  line-height: 1.2;
  margin: 0;
}

.orders{
   display: flex;
  justify-content: center;
  margin-top: 56px;
}

.orders__container{
  width: 100%;
  height: 100vh;
  padding:0 16px;
}

.title{
  margin-bottom: 28px;
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
