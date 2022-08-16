import Vue from 'vue'
import Vuex from 'vuex'
import menu from '@/store/menu.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isActiveSidebar: false,
    isActiveButtonOrder:false,
    isRegistered:false,
    valueGeneralOrder:0,
    // ordersHistory:[ { "time": "Mon Aug 15 2022", "address": { "buildingNumber": "sd", "streetName": "f", "city": "f", "state": "f", "country": "f", "pinCode": "f", "str1": "sd f", "str2": "f, f, f", "str3": "PIN: f" }, "order": [ { "name": "Margherita", "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2Fmargherita.webp?alt=media&token=721d918a-1a56-40c4-a882-b168e8220122", "imgSrc": "photo Margherita", "description": "Barbecue chicken for that extra zing", "cost": 15, "order": 5, "isBestSellers": true } ] }, { "time": "Mon Aug 15 2022", "address": { "buildingNumber": "sd", "streetName": "sdf", "city": "sf", "state": "sf", "country": "sf", "pinCode": "sf", "str1": "sd sdf", "str2": "sf, sf, sf", "str3": "PIN: sf" }, "order": [ { "name": "Margherita", "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2Fmargherita.webp?alt=media&token=721d918a-1a56-40c4-a882-b168e8220122", "imgSrc": "photo Margherita", "description": "Barbecue chicken for that extra zing", "cost": 15, "order": 1, "isBestSellers": true }, { "name": "Farmhouse", "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FFarmhouse.webp?alt=media&token=7d776979-1a68-4c22-9679-66c9d82fb439", "imgSrc": "photo Farmhouse", "description": "Delightful combo of grilled mushroom & veggies", "cost": 25, "order": 1, "isBestSellers": true } ] } ],
    // ordersHistory:[{ "time": "Tue Aug 16 2022", "address": { "buildingNumber": "sef", "streetName": "sef", "city": "sef", "state": "f", "country": "f", "pinCode": "f", "str1": "sef sef", "str2": "sef, f, f", "str3": "PIN: f" }, "orderProduct": [ { "name": "Margherita", "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2Fmargherita.webp?alt=media&token=721d918a-1a56-40c4-a882-b168e8220122", "imgSrc": "photo Margherita", "description": "Barbecue chicken for that extra zing", "cost": 15, "order": 2, "isBestSellers": true }, { "name": "Farmhouse", "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FFarmhouse.webp?alt=media&token=7d776979-1a68-4c22-9679-66c9d82fb439", "imgSrc": "photo Farmhouse", "description": "Delightful combo of grilled mushroom & veggies", "cost": 25, "order": 2, "isBestSellers": true }, { "name": "Veggie Paradise", "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FVeggie_Paradise.webp?alt=media&token=41d36b34-d8ef-4377-9184-393edd9da9e6", "imgSrc": "photo Veggie Paradise", "description": "The awesome foursome with exotic veggies!", "cost": 18, "order": 2, "isBestSellers": true } ], "total": 116 }, { "time": "Tue Aug 16 2022", "address": { "buildingNumber": "sef", "streetName": "a", "city": "sf", "state": "sfe", "country": "sf", "pinCode": "sf", "str1": "sef a", "str2": "sf, sfe, sf", "str3": "PIN: sf" }, "orderProduct": [ { "name": "Margherita", "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2Fmargherita.webp?alt=media&token=721d918a-1a56-40c4-a882-b168e8220122", "imgSrc": "photo Margherita", "description": "Barbecue chicken for that extra zing", "cost": 15, "order": 1, "isBestSellers": true }, { "name": "Veggie Paradise", "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FVeggie_Paradise.webp?alt=media&token=41d36b34-d8ef-4377-9184-393edd9da9e6", "imgSrc": "photo Veggie Paradise", "description": "The awesome foursome with exotic veggies!", "cost": 18, "order": 3, "isBestSellers": true }, { "name": "Barbecue Chicken", "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FBarbeque_Chicken.webp?alt=media&token=27f22f19-27f9-4017-a0a1-47aa43cfddb7", "imgSrc": "photo Barbecue Chicken", "description": "Classic delight with 100% real mozzarella cheese", "cost": 10, "order": 1, "isBestSellers": true }, { "name": "Non Veg Supreme", "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FNon_Veg_Supreme.webp?alt=media&token=6a4195fa-dbfd-419e-ac1b-3f1721c54bfa", "imgSrc": "photo Non Veg Supreme", "description": "Supreme combo of 3 types of chicken", "cost": 20, "order": 1, "isBestSellers": true } ], "total": 99 } ],
    ordersHistory:[],
  },                    
  getters: {
    computedOrder(state){
      let localOrderList=[]
      for (let key in state.menu){
        state.menu[key].forEach((elem)=>{
          if(elem.order>0) localOrderList.push(elem)
        })
      }
      return  localOrderList
    },
  },
  
  mutations: {
    cleanOrder(state){
      for (let key in state.menu){
        state.menu[key].forEach(elem=>elem.order= 0)
      }
    }
  },
  actions: {
  },
  modules: {
    menu
  }
})
