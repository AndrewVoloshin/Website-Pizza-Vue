export default{
  state:{
    vegPizzas: [
      {
        name:'Margherita',
        img: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2Fmargherita.webp?alt=media&token=721d918a-1a56-40c4-a882-b168e8220122',
        imgSrc:'photo Margherita',
        description:'Barbecue chicken for that extra zing',
        cost: 15,
        order:0,
        isBestSellers:true,
      },
      {
        name:'Farmhouse',
        img: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FFarmhouse.webp?alt=media&token=7d776979-1a68-4c22-9679-66c9d82fb439',
        imgSrc:'photo Farmhouse',
        description:'Delightful combo of grilled mushroom & veggies',
        cost: 25,
        order:0,
        isBestSellers:true,
      },
      {
        name:'Veggie Paradise',
        img: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FVeggie_Paradise.webp?alt=media&token=41d36b34-d8ef-4377-9184-393edd9da9e6',
        imgSrc:'photo Veggie Paradise',
        description:'The awesome foursome with exotic veggies!',
        cost: 18,
        order:0,
        isBestSellers:true,
      },
      {
        name:'Cheese n Corn',
        img: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FCheese_n_Corn.webp?alt=media&token=55ae0731-ffb6-42c4-ad61-3d1d735b04f1',
        imgSrc:'photo Cheese n Corn',
        description:'A delicacy prepared with golden corn',
        cost: 13,
        order:0,
        isBestSellers:false,
      },
      {
        name:'Peppy Paneer',
        img: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FPeppy_Paneer.webp?alt=media&token=feabb6f1-1121-47ee-9eac-494b7f49e3c3',
        imgSrc:'photo Peppy Paneer',
        description:'Flavorful trio: paneer, capsicum, red paprika',
        cost: 23,
        order:0,
        isBestSellers:false,
      }
     ],
     nonVegPizzas:[
      {
        name:'Barbecue Chicken',
        img: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FBarbeque_Chicken.webp?alt=media&token=27f22f19-27f9-4017-a0a1-47aa43cfddb7',
        imgSrc:'photo Barbecue Chicken',
        description:'Classic delight with 100% real mozzarella cheese',
        cost: 10,
        order:0,
        isBestSellers:true,
      },
      {
        name:'Non Veg Supreme',
        img: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FNon_Veg_Supreme.webp?alt=media&token=6a4195fa-dbfd-419e-ac1b-3f1721c54bfa',
        imgSrc:'photo Non Veg Supreme',
        description:'Supreme combo of 3 types of chicken',
        cost: 20,
        order:0,
        isBestSellers:true,
      },
      {
        name:'Chicken Dominator',
        img: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FChicken_Dominator.webp?alt=media&token=e8b826db-cdc3-4b37-abf1-dc5d999850c9',
        imgSrc:'photo Chicken Dominator',
        description:"Beware! You'll be left craving for more",
        cost: 30,
        order:0,
        isBestSellers:false,
      },  
      {
        name:'Chicken Sausage',
        img: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FChicken_Sausage.webp?alt=media&token=e6943fcc-b821-46e0-9028-5623fe4db525',
        imgSrc:'photo Chicken Sausage',
        description:"Spicy, herbed chicken sausage on pizza",
        cost: 24,
        order:0,
        isBestSellers:false,
      },
      
      {
        name:'Indi Chicken Tikka',
        img: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FIndian_Tandoori_Chicken_Tikka.webp?alt=media&token=c5f625a7-041c-4368-9f89-e6d3cd35dc5b',
        imgSrc:'photo Indi Chicken Tikka',
        description:"The wholesome flavour of tandoori masala",
        cost: 31,
        order:0,
        isBestSellers:false,
      },
      {
        name:'Chicken Pepperoni',
        img: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FPepperoni.webp?alt=media&token=a42a2b10-b651-44c1-a1ea-680987fd23d0',
        imgSrc:'photo Chicken Pepperoni',
        description:"Relish the delectable flavor of Chicken Pepperoni",
        cost: 31,
        order:0,
        isBestSellers:false,
      },
    ],
    sideDishes:[
      {
        name:'Crinkle Fries',
        img: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FCrinkle_Fries.webp?alt=media&token=1b3bad75-67fa-4350-8027-98b2aec8bcbf',
        imgSrc:'photo Crinkle Fries',
        description:"Hot crispy wavy masala coated fries",
        cost: 5,
        order:0,
        isBestSellers:false,
      },
      {
        name:'Garlic Breadsticks',
        img: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FGarlic_bread.webp?alt=media&token=401111b2-370b-4413-b343-553e7bb437c7',
        imgSrc:'photo Garlic Breadsticks',
        description:"Your perfect pizza partner when paired with dip",
        cost: 6,
        order:0,
        isBestSellers:false,
      },
      {
        name:'Non Veg Taco',
        img: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FTaco_Nvg.webp?alt=media&token=afb0085c-cacc-4141-87c9-e6cbf40dc208',
        imgSrc:'photo Non Veg Taco',
        description:"",
        cost: 8,
        order:0,
        isBestSellers:false,
      },
      {
        name:'Veg Taco',
        img: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FTaco_Veg.webp?alt=media&token=2b7791de-415d-401b-b140-19a4932650b1',
        imgSrc:'photo Veg Taco',
        description:"Truly irresistible taco with veg patty",
        cost: 8,
        order:0,
        isBestSellers:false,
      }
    ],
    desserts:[
      {
        name:'Choco Lava Cake',
        img: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FChoco_Lava.webp?alt=media&token=fa50ccb3-7c4a-47bd-96d1-be67e367f79b',
        imgSrc:'photo Choco Lava Cake',
        description:"Indulgent, gooey molten lava filled cake",
        cost: 12,
        order:0,
        isBestSellers:false,
      },
      {
        name:'Butterscotch Mousse',
        img: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FButterscotch.webp?alt=media&token=f84d2cfc-d17c-4dae-810c-d22af8b5e6ac',
        imgSrc:'photo Butterscotch Mousse',
        description:"Sweet temptation! Butterscotch mousse",
        cost: 9,
        order:0,
        isBestSellers:false,
      },
      {
        name:'Brownie Fantasy',
        img: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FBrownie_Fantasy.webp?alt=media&token=61c7f537-b683-4a9b-b6fa-2a85ff35df6f',
        imgSrc:'photo Brownie Fantasy',
        description:"Cholcolate drizzeled Hot Chocolate Brownie",
        cost: 9,
        order:0,
        isBestSellers:false,
      },
    ]
  }
}


  






 

  


