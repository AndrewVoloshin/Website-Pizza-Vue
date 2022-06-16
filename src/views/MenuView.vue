<template>
  <div class="menu">
    <div class="menu__container">
      <h1 class="menu__title"> <strong>menu</strong></h1>
      <div class="menu__line"></div>
      <div class="menu__content">
        <div class="content__title">
          <h2 class="title__section1">Best Sellers</h2>
          <div class="title__section2"></div>
        </div>
        <app-menu-card></app-menu-card>
      </div>
    </div>
  </div>
</template>
<script>
import AppMenuCard from '@/components/AppMenuCard.vue'
export default {
  components:{
    AppMenuCard
  }
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
strong{
  font-weight: bolder;
}

.menu__line{
  height: 2px;
  background: #000;
  margin: 4px 0 24px ;
}

.menu__content{
  padding-top:24px;
}

.content__title{
  display: flex;
  align-items: center;
  justify-content: center;
}

.title__section1{
  margin: 0 8px 8px 0;
  white-space: nowrap ;
  font-weight: 500;
  line-height: 1.2;
}

.title__section2{
  height: 1px;
  background-color: #888;
  flex: 1 0 0;
}

</style>

