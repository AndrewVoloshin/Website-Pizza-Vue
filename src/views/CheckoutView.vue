<template>
  <div class="checkout">
    <div class="checkout__container">
      <app-title :titleText="'checkout'" class="title" />
      <div class="checkout__subtitle">
        <h2 class="subtitle">Location</h2>
        <div class="hr"></div>
      </div>
      <div>
      <strong>Address:</strong>
      </div>
      <input v-model.trim="$v.name.$model" type="text" class="checkout__input" placeholder="Street Name"/>
      <input type="text" class="checkout__input" placeholder="City"/>
      <input type="text" class="checkout__input" placeholder="State"/>
      <input type="text" class="checkout__input" placeholder="Country"/>
      <input type="text" class="checkout__input" placeholder="Pin Code"/>
      <div class="checkout__error">
        <strong>Please Enter a valid address</strong>
      </div>
      <button class="checkout__btn cancel">Cancel</button>
      <button class="checkout__btn update">Update</button>
      <div class="checkout__subtitle">
        <h2 class="subtitle">Mode of Payment</h2>
        <div class="hr"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import { required } from 'vuelidate/lib/validators'
import AppTitle from '@/components/AppTitle.vue'

export default {
  components: { AppTitle },
  data() {
    return {
      
    }
  },
  //   validations: {
  //   name: {
  //     required,
  //     minLength: minLength(4)
  //   },
  //   age: {
  //     between: between(20, 30)
  //   }
  // }
}
</script>

<style scoped>
strong{
  font-weight: bolder;
}

h1{
  font-size: calc(1.475rem + 2.7vw);
  font-weight: 300;
  line-height: 1.2;
  margin: 0;
}

.checkout{
   display: flex;
  justify-content: center;
  margin-top: 56px;
}

.checkout__container{
  width: 100%;
  /* height: 100vh; */
  padding:0 16px;
}

.title{
  margin-bottom: 24px;
}

.checkout__subtitle{
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}
.subtitle{
  font-size: calc(1.325rem + .9vw);
  margin: 0 8px 8px 0;
  font-weight: 500;
  line-height: 1.2;
  white-space: nowrap;
  
}
.hr{
  width: 100%;
  height: 1px;
  flex:1 0 basic;
  background: #888;
}
.checkout__input{
    background-color: #ddd;
    width: 100%;
    margin: 6px 0;
    padding: 12px 16px;
    border-radius: 20px;
    border: none;
    outline: none;
    transition: .1s;
    font-size: 1rem;
    line-height: 1.5;
}

.checkout__input:hover{
  background-color: #bbb;
}

.checkout__input:focus{
  background-color: #888;
}

.checkout__input:focus::placeholder{
  color:white;
}

.checkout__input:first-of-type{
  margin-top: 12px;
}
.checkout__input:last-of-type{
  margin-bottom: 0px;
}
.checkout__error{
  padding: 16px;
  margin: 24px 0 16px 0;
  color: #721c24;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 0.25rem;
}

.checkout__btn{
  cursor: pointer;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: large;
  font-size: 18px;
  line-height: 1.5;
  transition: .15s ease-in-out;
}

.cancel{
  background-color: #888;
  margin-right: 16px;
}

.update{
  background-color: #724cf9;
}



@media screen and (min-width: 576px){
  .checkout__container{
    width:540px;
  }
}

@media screen and ( min-width:768px){
  .checkout__container{
    width: 720px;
  }
}

@media screen and ( min-width:992px){
 .checkout__container{
    width: 960px;
  }
}

@media screen and (min-width:1200px) {
  .checkout__container{
   width: 1140px;
  }
}

@media screen and (min-width:1400px) {
  .checkout__container{
    width: 1320px;
  }
}

</style>
