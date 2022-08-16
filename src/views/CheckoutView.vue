<template>
  <div class="checkout">
    <div class="checkout__container">
      <div class="order__placed" v-if="orderPlaced">
        <app-title :titleText="'order placed'" class="title" />
        <h2 class="order__text">Your yummy pizza will arrive at your doorstep soon! :)</h2>
      </div>

      <div class="order__checkout" v-if="!orderPlaced">
        <app-title :titleText="'checkout'" class="title" />
        <div  class="checkout__section">
          <div class="checkout__subtitle">
            <h2 class="subtitle">Location</h2>
            <div class="hr"></div>
          </div>
          <app-address :address="address" />
          <div v-if="$v.address.$invalid && !isInput" class="checkout__error address__add">
            <strong>No Address Found</strong> 
          </div>
          <button v-if="!isInput && $v.address.$invalid" @click="isInput=true"  class="checkout__btn address__btn">Add Address</button>
          <button v-if="!isInput && !$v.address.$invalid" @click="isInput=true" class="checkout__btn address__btn">Update Address</button>
          <div class="form" v-if="isInput">
            <input v-model.trim="address.buildingNumber" type="text" class="checkout__input" placeholder="Building Number"/>
            <input v-model.trim="address.streetName" type="text" class="checkout__input" placeholder="Street Name"/>
            <input v-model.trim="address.city" type="text" class="checkout__input" placeholder="City"/>
            <input v-model.trim="address.state" type="text" class="checkout__input" placeholder="State"/>
            <input v-model.trim="address.country" type="text" class="checkout__input" placeholder="Country"/>
            <input v-model.trim="address.pinCode" type="text" class="checkout__input" placeholder="Pin Code"/>
            <div  v-if="$v.address.$anyError" class="checkout__error address__valid">
              <strong>Please Enter a valid address</strong> 
            </div>
            <button @click="cancel" class="checkout__btn cancel">Cancel</button>
            <button  @click="update" class="checkout__btn update">Update</button>
          </div>
        </div>
        <div class="checkout__section">
          <div class="checkout__subtitle">
            <h2 class="subtitle">Mode of Payment</h2>
            <div class="hr"></div>
          </div>
          <form class="checkout__form">
            <div class="form__content">
              <input v-model="payment" class="checkout__radio" type="radio" id="cash" name="ModeOfPayment" value="Cash on Delivery">
              <label for="cash">Cash on Delivery</label><br>
            </div>
            <div class="form__content disabled">
              <input v-model="payment" disabled class="checkout__radio" type="radio" id="wallet" name="ModeOfPayment" value="Wallet">
              <label for="wallet ">Wallet</label><br>
            </div>
            <div class="form__content disabled">
              <input v-model="payment" disabled class="checkout__radio " type="radio" id="credit" name="ModeOfPayment" value="Credit / Debit Card">
              <label for="credit">Credit / Debit Card</label> <br/>
            </div>
            <div class="form__content disabled">
              <input v-model="payment" disabled class="checkout__radio" type="radio" id="netBanking" name="ModeOfPayment" value="Net Banking">
              <label for="netBanking">Net Banking</label> <br/>
            </div>
            <div  v-if="$v.$anyError && $v.$anyDirty" class="checkout__error order__error">
              <strong v-if="$v.address.$invalid && !$v.payment.required">Please make sure that all fields are filled</strong> 
              <strong v-else-if="$v.address.$invalid && $v.payment.required">Please fill in the address field</strong> 
              <strong v-else-if="!$v.address.$invalid && !$v.payment.required">Please select the mode of payment field</strong> 
            </div>
            <button class="checkout__btn order" @click.prevent="placeOrder" >Place Order</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import AppTitle from '@/components/AppTitle.vue'
import AppAddress from '@/components/AppAddress.vue'

export default {
  components: { AppTitle,AppAddress },
  data() {
    return {
      orderPlaced:false,
      isInput:false,
      address:{
        buildingNumber:'',
        streetName:'',
        city:'',
        state:'',
        country:'',
        pinCode:'',
        str1:'',
        str2:'',
        str3:'',
      },
      updateAddress:{},
      payment:'',
      currentOrder:{
        time:'',
        address:{},
        orderProduct:[],
        total:'',
      },
    }
  },
  // computed:{
  //   order(){
  //     return  this.$store.getters.computedOrder
  //   },
  // },

  methods:{
    update(){
      this.$v.address.$touch()
      if(this.$v.address.$invalid) return
      this.address.str1= `${this.address.buildingNumber} ${this.address.streetName}`
      this.address.str2= `${this.address.city}, ${this.address.state}, ${this.address.country}`
      this.address.str3= `PIN: ${this.address.pinCode}`
      this.isInput=false
      Object.assign(this.updateAddress, this.address)
    },

    cancel(){
      Object.assign(this.address, this.updateAddress)
      this.isInput=false
    },

    placeOrder(){
      this.$v.$touch()
      if(this.$v.$invalid) return
      this.orderPlaced= true
      Object.assign(this.currentOrder.address, this.updateAddress)

      let date = new Date
      this.currentOrder.time = date.toDateString()

      this.$store.getters.computedOrder.forEach(element => {
        let localObj={}
        Object.assign(localObj, element)
        this.currentOrder.orderProduct.push(localObj)
      });

      this.currentOrder.total= this.currentOrder.orderProduct.reduce(((acc,current)=>{
        return acc + current.order*current.cost
      }),0)

      console.log(this.currentOrder.total,'this.currentOrder.total');



      this.$store.state.ordersHistory.push(this.currentOrder)
      console.log(this.$store.state.ordersHistory,'this.$store.state.ordersHistory');
    
      this.$store.commit('cleanOrder')
      this.$store.state.isActiveButtonOrder=false
    }
  },

  validations: {
    address:{
      buildingNumber:{
        required,
      },
      streetName: {
        required,
      },
      city: {
        required,
      },
      state: {
        required,
      },
      country: {
        required,
      },
      pinCode: {
        required,
      }
    },
    payment: {
      required
    }
  }
}
</script>

<style scoped>
strong{
  font-weight: bolder;
}

h2{
  font-size: calc(1.375rem + 1.5vw);
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
  padding:0 16px;
}

.order__text{
  margin: 24px 0 8px;
}

.checkout__subtitle{
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}

.checkout__section{
  margin: 24px 0;
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

.line{
  margin: 0;
  padding: 0;
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
  margin-bottom: 12px;
}
.checkout__error{
  padding: 16px;
  color: #721c24;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 0.25rem;
}

.address__add{
  margin: 24px 0 16px 0;
}

.address__valid{
  margin: 12px 0 16px 0;
}

.order__error{
  margin: 24px 0 0px 0;
 
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

.cancel:hover{
  background-color: #666 !important;
  filter: drop-shadow(0 0 8px #666) !important;
}

.update{
  background-color: #724cf9;
}

.address__btn{
  background-color: #724cf9;
  margin: 16px 0;
}

.checkout__form{
  margin-top: 24px;
}

.form__content{
  margin: 8px 0;
}

.checkout__radio{
  position: relative;
  top: 3px;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 50%;  
  margin: 0;
  width: 1.25rem;
  height: 1.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.checkout__radio:checked{
    border: 5px solid #0d6efd;
}
.checkout__radio:focus{
  box-shadow: 0 0 0 .2rem rgba(13,110,253,.25);
}

label{
  padding-left: 8px;
}

.order{
  background-color: #724cf9;
  margin: 16px 0;
}

.checkout__btn:hover{
  background-color: #5a2ff3;
  filter: drop-shadow(0 0 8px #724cf9);
}

.disabled{
  opacity:0.5;
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
