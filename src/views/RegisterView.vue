<template>
  <div class="register">
    <div class="register__container">
      <app-title :titleText="'register'" class="title" />
        <form class="register__content">
          <input type="email" placeholder="Email" class="content__input email">
          <input type="password" placeholder="Password" class="content__input password">
          <input type="password" placeholder="Confirm Password" class="content__input confirm-password">
          <p class="content__text"> Already registered? 
            <router-link class="content__link" tag="a" to="/login">Login</router-link>
          </p>
          <button class="content__btn">Register</button>
        </form>
        <p class="sub-content"> <strong>OR</strong> </p>
        <div class="sub-button">
          <button type="button" class="login-with-google-btn" >
            Sign in with Google
          </button>
        </div>
        

</div>
  </div>
</template>

<script>
import AppTitle from '@/components/AppTitle.vue'
export default {
  components: { AppTitle },
  comments:{
    AppTitle
  },
  data() {
    return{

    }
  },
}
</script>


<style scoped>

.register{
  display: flex;
  justify-content: center;
  margin-top: 56px;
  min-height: 100vh;
}

.register__container{
  width: 100%;
  height: 100%;
  padding: 0 16px;
}

.title{
  margin-bottom: 24px;
}

.register__content{
  display: flex;
  flex-direction: column;
}

.content__input{
  background-color: #ddd;
  padding: 12px 16px;
  border-radius: 20px;
  border: none;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  transition: .1s;
}

.password{
  margin: 12px 0 12px 0 ;
}

.confirm-password{
  margin-bottom: 12px;
}

.content__text{
  font-weight: 600;
  margin: 0 0 16px 0;
}

.content__btn{
  display:inline-block;
  width: max-content;
  color: #fff;
  background-color: #724cf9;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: large;
  line-height: 1.5;
  cursor: pointer;
  transition: .15s ease-in-out;

}

.sub-content{
  text-align: center;
  margin: 0;
  padding: 0;
}

strong{
  font-weight: bolder;
}

.sub-button{
  display:flex;
  justify-content: center;
  margin: 16px 0;
}

.login-with-google-btn {
  transition: background-color .3s, box-shadow .3s;
    
  margin: 0 auto; 
  padding: 12px 16px 12px 16px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
  
  color: #757575;
  font-size: 14px;
  font-weight: 500;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
  
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
  background-color: white;
  background-repeat: no-repeat;
  background-position: 12px 11px;

  max-width: 220px;
  width: 100%;
}
  
  .login-with-google-btn:hover {
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25);
  }
  
  .login-with-google-btn:active {
    background-color: #eeeeee;
  }
  
  .login-with-google-btn:focus {
    outline: none;
    box-shadow: 
      0 -1px 0 rgba(0, 0, 0, .04),
      0 2px 4px rgba(0, 0, 0, .25),
      0 0 0 3px #c8dafc;
  }
  
  /* .login-with-google-btn:disabled {
    filter: grayscale(100%);
    background-color: #ebebeb;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
    cursor: not-allowed;
  } */


body {
  text-align: center;
  padding-top: 2rem;
}






@media screen and (min-width: 576px){
  .register__container{
    width:540px;
  }
}

@media screen and ( min-width:768px){
  .register__container{
    width: 720px;
  }
}

@media screen and ( min-width:992px){
 .register__container{
    width: 960px;
  }

}

@media screen and (min-width:1200px) {
  .register__container{
   width: 1140px;
  }

}

@media screen and (min-width:1400px) {
  .register__container{
    width: 1320px;
  }
}
</style>