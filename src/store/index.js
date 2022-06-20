import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isActiveSidebar: false,
    bestSellers:[
      {
        name:'Margherita',
        img: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2Fmargherita.webp?alt=media&token=721d918a-1a56-40c4-a882-b168e8220122',
        imgSrc:'photo Margherita',
        description:'Barbecue chicken for that extra zing',
        cost: 15,
        order:0,
      },
      {
        name:'Barbecue Chicken',
        img: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FBarbeque_Chicken.webp?alt=media&token=27f22f19-27f9-4017-a0a1-47aa43cfddb7',
        imgSrc:'photo Barbecue Chicken',
        description:'Classic delight with 100% real mozzarella cheese',
        cost: 10,
        order:0,
      },
      {
        name:'Non Veg Supreme',
        img: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FNon_Veg_Supreme.webp?alt=media&token=6a4195fa-dbfd-419e-ac1b-3f1721c54bfa',
        imgSrc:'photo Non Veg Supreme',
        description:'Supreme combo of 3 types of chicken',
        cost: 20,
        order:0,
      },
      {
        name:'Veggie Paradise',
        img: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FVeggie_Paradise.webp?alt=media&token=41d36b34-d8ef-4377-9184-393edd9da9e6',
        imgSrc:'photo Veggie Paradise',
        description:'The awesome foursome with exotic veggies!',
        cost: 18,
        order:0,
      },
      {
        name:'Farmhouse',
        img: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FFarmhouse.webp?alt=media&token=7d776979-1a68-4c22-9679-66c9d82fb439',
        imgSrc:'photo Farmhouse',
        description:'Delightful combo of grilled mushroom & veggies',
        cost: 25,
        order:0,
      },
    ],
    vegPizzas:[
      {
        name:'Margherita',
        img: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2Fmargherita.webp?alt=media&token=721d918a-1a56-40c4-a882-b168e8220122',
        imgSrc:'photo Margherita',
        description:'Barbecue chicken for that extra zing',
        cost: 15,
        order:0,
      },
      {
        name:'Farmhouse',
        img: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FFarmhouse.webp?alt=media&token=7d776979-1a68-4c22-9679-66c9d82fb439',
        imgSrc:'photo Farmhouse',
        description:'Delightful combo of grilled mushroom & veggies',
        cost: 25,
        order:0,
      },
      {
        name:'Veggie Paradise',
        img: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FVeggie_Paradise.webp?alt=media&token=41d36b34-d8ef-4377-9184-393edd9da9e6',
        imgSrc:'photo Veggie Paradise',
        description:'The awesome foursome with exotic veggies!',
        cost: 18,
        order:0,
      },
      {
        name:'Cheese n Corn',
        img: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FCheese_n_Corn.webp?alt=media&token=55ae0731-ffb6-42c4-ad61-3d1d735b04f1',
        imgSrc:'photo Cheese n Corn',
        description:'A delicacy prepared with golden corn',
        cost: 13,
        order:0,
      },
      {
        name:'Peppy Paneer',
        img: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FPeppy_Paneer.webp?alt=media&token=feabb6f1-1121-47ee-9eac-494b7f49e3c3',
        imgSrc:'photo Peppy Paneer',
        description:'Flavorful trio: paneer, capsicum, red paprika',
        cost: 23,
        order:0,
      },
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
