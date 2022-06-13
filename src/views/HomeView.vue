<template>
  <div class="home">
   <div class="home__container">
     <div class="home__logo">
       <img class="home__img" src="@/assets/static/Logo.png" alt="logo">
     </div>
     <h2  class="home__subtitle">Pizza Man Online Ordering</h2>
     <h1 class="home__title">Your Yummy Pizza Delivered Fast & Fresh</h1>
     <router-link tag="button" class="home__btn" to="/menu">Order Now</router-link>
   </div>
  </div>
</template>

<script>

</script>

<style scoped>
.home{
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(@/assets/static/Background\ Pizza.jpg);
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: 50%;
  background-attachment: fixed;
}
.home__container{
  margin-top: 3rem;
  padding: 3rem 1rem 0 ;
  
}
.home__logo{
  position: relative;
  width: 300px;
  height: 150px;
  left: -20px;
}
.home__img{
  position:absolute;
  width:100%;
  height:100%;
}
.home__subtitle{
  font-size: 28px;
  margin: 4px 0;
  color: white;
  font-weight: 500;
  line-height: 1.2;
}
.home__title{
  font-size: 44px;
  margin: 8px 0;
  color: white;
  font-weight: 300;
  line-height: 1.2;
}

.home__btn{
  color: #fff;
  border: none;
  outline: none!important;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: large;
  transition: .15s ease-in-out;
  background-color: #724cf9;
}

.home__btn:hover{
  background-color: #5a2ff3;
  filter: drop-shadow(0 0 8px #724cf9);
}

@media screen and (min-width: 768px){
  .home__container{
    width: 720px;
  }
}

@media screen and (min-width: 992px){
  .home__container{
    width: 960px;
  }

  .home__logo{
    width: 400px;
    height: 200px;
  }
}

@media screen and (min-width: 1200px){
  .home__container{
    width: 1140px;
  }
}

@media screen and (min-width: 1400px){
  .home__container{
    width: 1320px;
  }
}
</style>
