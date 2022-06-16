<template>
<div class="sidebar" 
  @click="$store.state.isActiveSidebar = false"
  :class="{'sidebar_on':$store.state.isActiveSidebar} "
>
  <div class="sidebar__conteiner"
  :class="{'sidebar_on':$store.state.isActiveSidebar}"
  @click="$store.state.isActiveSidebar = false"
  >
    <a class="sidebar__logo">
      <img src="@/assets/static/Logo.png" alt="logo">
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
.sidebar{
  visibility: hidden;
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:rgb(0,0,0, 0.5);
  z-index: 99;
}
.sidebar_on{
  visibility: visible;
}
.sidebar__conteiner{
  width: 40vw;
  height: 100%;
  background: white;
  padding: 0 16px;
  transform:translateX(-100%);
  transition: transform .2s;
}
.sidebar_on{
  transform:translateX(0);
  transition: transform .2s;
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

@media screen and ( max-width:576px){
  .sidebar__conteiner{
    width: 70vw;
  }
}

</style>