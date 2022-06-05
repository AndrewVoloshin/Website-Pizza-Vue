<template>
  <div class="sidebar__overlay " 
  v-if="isActiveSidebar"
  @click="$store.state.isActiveSidebar = false"
  @click.stop
  >
    <div class="sidebar">
      <div class="sidebar__conteiner">
        <a class="sidebar__logo">
          <img src="@/assets/Logo.png" alt="logo">
        </a>
        <nav>
          <ul class="sidebar__menu">
            <router-link class="menu__item" tag="li" to="/" exact active-class="menu__item_on" >Home</router-link>
            <router-link class="menu__item" tag="li" to="/menu" exact active-class="menu__item_on">Menu</router-link>
            <router-link class="menu__item" tag="li" to="/login" exact active-class="menu__item_on">Log In</router-link>
            <router-link class="menu__item" tag="li" to="/register" exact active-class="menu__item_on">Register</router-link>
          </ul>
        </nav>
      </div> 
    </div>
  </div>
</template>

<script>
export default {
   computed:{
    isActiveSidebar(){
      return this.$store.state.isActiveSidebar
    }
  }
}
</script>

<style scoped>
.sidebar__overlay{
  position:absolute;
  top:0px;
  left:0px;
  background: 	rgb(0,0,0, 0.5);
  height: 100vh;
  width: 100vw;
}
.sidebar{
  width: 40vw;
  height: 100vw;
  background: white;
  padding: 0 16px;
}
.sidebar__logo{
  position: relative;
  width: 150px;
  height: 75px;
  display: inline-block;
  margin: 28px 0px;
}

img{
  top: 0px;
  left: 0px;
  position: absolute;
  width: 100%;
  height: 100%;
}
.sidebar__menu{
  display:flex;
  flex-direction: column;
  align-items: start;
  list-style: none;
  padding:0;
  margin:0;
}
.menu__item{
  position: relative;
  text-decoration:none;
  margin: 12px 0;
  font-weight: 700;
  color: #724cf9;
}
.menu__item_on{
  position:relative;
  color: #0041bb;
}
.menu__item_on:after{
  content:'';
  position: absolute;
  bottom:0;
  left:0;
  width:100% !important;
  height:2px;
  background-color: #0041bb!important;
}
.menu__item::after{
  position: absolute;
  content:'';
  bottom:0;
  left:0;
  width:0;
  height:2px;
  background-color: #724cf9;
  transition:width 0.2s;
}
.menu__item:hover:after{
width:100%;
}






</style>