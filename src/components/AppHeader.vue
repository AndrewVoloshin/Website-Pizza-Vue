<template>
  <div class="header">
    <div class="header__container">
      <a class="header__logo">
        <img src="@/assets/Logo.png" alt="logo">
      </a>
    <!-- <div class="header__menu">
      <ul class="header__menu__list">
        <li class="menu__list__item">Home</li>
        <li class="menu__list__item">Menu</li>
        <li class="menu__list__item">Log In</li>
        <li class="menu__list__ite m">Register</li>
      </ul>
    </div> -->
    <div class="header__burger" 
    
    @click=" $store.state.isActiveSidebar = !$store.state.isActiveSidebar "
    :class=" {'header__burger_on':$store.state.isActiveSidebar} " 
    >
      <span :class="{'center-line': !$store.state.isActiveSidebar}"></span>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data(){
    return{
      
    }
  }
}
</script>

<style scoped>
.header{
  position:fixed;
  top:0;
  left:0;
  background-color: #f0f0f0;
  width:100vw;
  height: 56px;
}
.header__container{
  display: flex;
  min-width: 720px;
  padding: 0 16px;
  align-items: center;
  justify-content: center;
}
.header__logo{
  position: relative;
  width: 80px;
  height: 40px;
  display: inline-block;
  margin: 8px 0px;
}

img{
  top: 0px;
  left: 0px;
  position: absolute;
  width: 100%;
  height: 100%;
}

.header__burger{
  margin-left:563px;
  width:28px;
  height: 18px;
  position: relative;
  
}

.center-line{
  width:100%;
  height: 2px;
  background-color: #333;
  position:absolute;
  top: 8px;
}
.header__burger::before,
.header__burger::after {
  content:'';
  width:100%;
  height: 2px;
  background-color: #333;
  position:absolute;
  transition:all .2s;
}

.header__burger::before{
  top:0px;
}

.header__burger::after{
  bottom: 0;
}

.header__burger_on::before{
  transform: rotate(-45deg) translate(-8px,4px);
}

.header__burger_on::after{
  transform: rotate(45deg) translate(-8px,-4px);
}



@media screen and (min-width: 768px) {
  .header__container{
    min-width: 720px;
  }
}

</style>