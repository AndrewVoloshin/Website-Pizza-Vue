<template>
  <div class="card" @mouseover="isMouseOver=true" @mouseleave="isMouseOver=false" >
    <div class="card__img">
      <img :class="{'card_hover':isMouseOver}" :src='pizza.img' :alt="pizza.imgSrc"/>
    </div>
    <div class="card__content">
      <div class="card__title"><strong>{{pizza.name}}</strong></div>
        <span class="card__description">{{pizza.description}}</span>
      <div class="card__info">
        <span class="info__item"><strong>$</strong>{{pizza.cost}}</span>
        <div class="info__action">
          <button class="info__btn" @click="changeOrder(-1)" ><i class="minus"></i></button>
          <span class="info__result"> <strong> {{pizza.order}} </strong> </span>
          <button class="info__btn" @click="changeOrder(1)"><i class="plus"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['pizza','index'],
  data(){
    return{
      isMouseOver:false,
    }
  },
  methods:{
    changeOrder(val){
      if( this.$store.state.pizza[this.index].order ===0 && val===(-1)) return
      this.$store.state.pizza[this.index].order += val
    }
  }
}

</script>

<style scoped>
.card{
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