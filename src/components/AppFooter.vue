<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__sections">
        <div class="footer__item1">
          <h2 class="footer__title">company</h2>
          <ul class="footer__list">
            <router-link class="list__link" tag="li" to="">about us</router-link>
            <router-link class="list__link" tag="li" to="">faq</router-link>
            <router-link class="list__link" tag="li" to="">contact us</router-link>
          </ul>
        </div>
        <div class="footer__item2">
          <h2 class="footer__title">legal</h2>
          <ul class="footer__list">
            <router-link class="list__link" tag="li" to="">terms & conditions</router-link>
            <router-link class="list__link" tag="li" to="">privacy policy</router-link>
            <router-link class="list__link" tag="li" to="">disclaimer</router-link>
          </ul>
        </div>
        <div class="footer__item3">
          
            <h2 class="footer__title">social media</h2>
            <font-awesome-icon icon="fa-brands fa-facebook-f" />
            <div class="footer__link">
              <i class="link__facebook"></i>
            </div>
              <i class="link-item"></i>
              <i class="link-item"></i>
              <i class="link-item"></i>
          
        </div>
      </div>
      <div class="footer__bottom">
        <span class="bottom__content">
          Copyright © 
          2022
          Tap FoodWorks Ltd. | All Rights Reserved
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer{
  display: flex;
  justify-content: center;
  padding-bottom: 0.5rem;
  padding-top: 1.5rem;
  background: #f0f0f0;
}

.footer__container{
  display: flex;
  flex-direction: column;
}

.footer__sections{
  display:flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  padding: 0 12px;

}
.footer__item1, .footer__item2 {
  padding: 0 12px;
  flex:1 0 0;
  margin: 24px 0;
}
.footer__item3{
  flex:0 0 100%;
  display: flex;
  justify-content: center;
  height: 170px;
  padding: 0 12px;
  margin: 24px 0;
}

.footer__title{
  font-size: calc(1.325rem + .9vw);
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
  white-space: nowrap;
}

.footer__list{
  margin: 0;
  padding: 0;
}

.list__link{
  position:relative;
  width: max-content;
  padding: 8px 0;
  color: #724cf9;
  list-style-type: none;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  
}
.list__link:after{
  position:absolute;
  bottom:0;
  left:0;
  content:'';
  height: 2px;
  background: #724cf9;
  width:0;
  transition: width .2s;
}

.list__link:hover:after{
  width:100%;
}

.footer__link{
  height: 36px;
  width: 36px;
  border-radius: 50%;
  margin: 12px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .1s;
}

.link__facebook{
  display: inline-block;
  color: #3b5998;
  font: normal normal normal 14px/1 FontAwesome;
}

.link__facebook:after{
  content:"\f09a"
}

.footer__item3{
 display: flex;
 justify-content: center;
}

.footer__item3 h2{
  text-align: center;
}

.footer__bottom{
  text-align: center;
  margin-bottom: 8px;
}

.bottom__content{
    font-weight: 500;
    text-transform: uppercase;
}

@media screen and (min-width:768px){
  .footer__container{
    width:720px;
  }
}

@media screen and (min-width: 992px){
  .footer__container{
    width: 960px;
  }
}

@media screen and (min-width: 992px){
  .footer__container{
    width: 960px;
  }

  .footer__item3{
    flex: 1 0 0;
  }
}

@media screen and (min-width: 1200px){
  .footer__container{
    width: 1140px;
  }
}

@media screen and (min-width: 1400px){
  .footer__container{
    width: 1320px;
  }
}

</style>