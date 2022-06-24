<template>
  <div class="card" @mouseover="isMouseOver=true" @mouseleave="isMouseOver=false" >
    <div class="card__img">
      <img :class="{'card_hover':isMouseOver}" :src='item.img' :alt="item.imgSrc"/>
    </div>
    <div class="card__content">
      <div class="card__title"><strong>{{item.name}}</strong></div>
        <span class="card__description">{{item.description}}</span>
      <div class="card__info">
        <span class="info__item"><strong>$</strong>{{item.cost}}</span>
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
  props:['item','index','store'],
  data(){
    return{
      isMouseOver:false,
    }
  },
  methods:{
    changeOrder(val){
      if( this.store[this.index].order ===0 && val===(-1)) return
      // eslint-disable-next-line vue/no-mutating-props
      this.store[this.index].order +=val
      this.$store.state.generalOrder +=val
      this.$store.state.generalOrder>0 ?
      this.$store.state.isActiveButtonOrder=true : this.$store.state.isActiveButtonOrder= false
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

.info__btn{
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


.plus:after{
  content:'+';
}

.minus:after{
  content:'-';
}

</style>