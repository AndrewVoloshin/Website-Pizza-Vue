<template>
  <div class="orderPlaced">
    <div class="orderPlaced__container">
      <app-title :titleText="'order placed'" class="title" />
     
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

body {
  text-align: center;
  padding-top: 2rem;
}

.orderPlaced{
  display: flex;
  justify-content: center;
  margin-top: 56px;
  min-height: 100vh;
}

.orderPlaced__container{
  width: 100%;
  height: 100%;
  padding: 0 16px;
}

.title{
  margin-bottom: 24px;
}


@media screen and (min-width: 576px){
  .orderPlaced__container{
    width:540px;
  }
}

@media screen and ( min-width:768px){
  .orderPlaced__container{
    width: 720px;
  }
}

@media screen and ( min-width:992px){
 .orderPlaced__container{
    width: 960px;
  }
}

@media screen and (min-width:1200px) {
  .orderPlaced__container{
   width: 1140px;
  }
}

@media screen and (min-width:1400px) {
  .orderPlaced__container{
    width: 1320px;
  }
}
</style>