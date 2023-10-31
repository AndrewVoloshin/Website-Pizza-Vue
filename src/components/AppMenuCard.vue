<template>
  <div :class="['card',{'card_mode-order':ismodeOrder}]" @mouseover="isMouseOver=true" @mouseleave="isMouseOver=false" >
    <div :class="['card__img',{'card__img_mode-order':ismodeOrder}]" v-if="!notDiplayImg">
      <img :class="{'card_hover':isMouseOver}" :src='item.img' :alt="item.imgSrc"/>
    </div>
    <div :class="['card__content', {'card__border':displayBorder, 'card__content_mode-order':ismodeOrder}]" >
      <div class="card__title"><strong>{{item.name}}</strong></div>
        <span class="card__description">{{item.description}}</span>
      <div class="card__info">
        <span class="info__item">{{item.cost}}</span>
        <div class="info__action">
          <button class="info__btn" @click="changeOrder(-1)" ><i class="minus"></i></button>
          <span class="info__result"> <strong> {{item.order}} </strong> </span>
          <button class="info__btn" @click="changeOrder(1)"><i class="plus"></i></button>
        </div>
      </div>
    </div>
  </div> 
</template>
 
<script>
export default {
  props:['item','notDiplayImg','displayBorder','ismodeOrder'],
  data(){
    return{
      isMouseOver:false,
    }
  },
  methods:{
    changeOrder(val){
      if( this.item.order ===0 && val===(-1)) return
      // eslint-disable-next-line vue/no-mutating-props
      this.item.order +=val
      this.$store.state.valueGeneralOrder +=val
      this.$store.state.isActiveButtonOrder = this.$store.state.valueGeneralOrder>0 ? true : false
      if( this.$store.state.valueGeneralOrder ===0){
        this.$router.push('/Website-Pizza-Vue/menu')
      }
      
    }
  }
}

</script>

<style scoped>
.card{
  display:flex;
  flex-direction: column;
  margin: 8px 0 16px;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
}

.card_mode-order{
  flex-direction: row;
  margin: 8px 0 12px;
}

.card_hover{
  transform:scale(1.2);
}

.card__img{
  position:relative;
   width: auto;
  height: 150px;
  overflow:hidden;
}

.card__img_mode-order{
  width: 200px;
  height: auto;
}


.card__border{
  border-bottom:1px solid black;
  padding: 0 8px !important;
}

img{
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.2s;
}

.card__content{
  display:flex;
  flex-direction: column;
  flex:1 0 auto;
  justify-content: space-between;
  background: #ddd;
  padding: 0 16px;
}

.card__content_mode-order{
  padding: 12px 8px 12px 20px;
}

.card__description{
  display:inline-block;
  margin-bottom:12px;
  color: #6c757d;
  font-size: smaller;
  line-height: 100%;
  font-weight: lighter;
  font-style: italic;
}

.card__info{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
}

.info__action{
  display: flex;
  align-items: center;
}

.info__btn{
  position:relative;
  height: 28px;
  width: 28px;
  border-radius: 2px;
  font-size: 16px;
  border: none;
  background-color: rgba(0,0,0,.5);
  margin: 0 8px;
  transition: .1s;
}

.info__btn:hover{
  background-color: rgba(0,0,0,.8);
  color: #fff;
}

.info__item:after{
 content:'$';
 font-size: 1rem;
 margin-left: 3px;
}

.info__result{
 margin: 4px 2px;
}


.plus:after{
  content:'+';
  position:absolute;
  font-weight: bold;
  font-size: 25px;
  left:6px;
  top:0px;

}

.minus:after{
  content:'-';
  position:absolute;
  font-weight: bold;
  font-size: 25px;
  left:10px;
  top:-2px;

}

</style>