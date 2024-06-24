<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__sections">
        <div class="footer__item1">
          <h2 class="footer__title">company</h2>
          <ul class="footer__list">
            <router-link class="list__link"
                         tag="li"
                         to="">about us</router-link>
            <router-link class="list__link"
                         tag="li"
                         to="">faq</router-link>
            <router-link class="list__link"
                         tag="li"
                         to="">contact us</router-link>
          </ul>
        </div>
        <div class="footer__item2">
          <h2 class="footer__title">legal</h2>
          <ul class="footer__list">
            <router-link class="list__link"
                         tag="li"
                         to="">terms & conditions</router-link>
            <router-link class="list__link"
                         tag="li"
                         to="">privacy policy</router-link>
            <router-link class="list__link"
                         tag="li"
                         to="">disclaimer</router-link>
          </ul>
        </div>
        <div class="footer__item3">

          <h2 class="footer__title">social media</h2>
          <div class="footer__link">
            <a class="link-item facebook__wrap"
               href="https://www.facebook.com/"
               target="_blank">
              <font-awesome-icon icon="fa-brands fa-facebook-f"
                                 class="facebook" />
            </a>
            <a class="link-item twitter__wrap"
               href="https://twitter.com/"
               target="_blank">
              <font-awesome-icon icon="fa-brands fa-twitter"
                                 class="twitter" />
            </a>
            <a class="link-item instagram__wrap"
               href="https://www.instagram.com/"
               target="_blank">
              <font-awesome-icon icon="fa-brands fa-instagram"
                                 class="instagram" />
            </a>
            <a class="link-item youtube__wrap"
               href="https://www.youtube.com/"
               target="_blank">
              <font-awesome-icon icon="fa-brands fa-youtube"
                                 class="youtube" />
            </a>
          </div>

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
.footer {
  display: flex;
  justify-content: center;
  padding-bottom: 0.5rem;
  padding-top: 1.5rem;
  background: #f0f0f0;
}

.footer__container {
  display: flex;
  flex-direction: column;
}

.footer__sections {
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  padding: 0 12px;

}

.footer__item1,
.footer__item2 {
  padding: 0 12px;
  flex: 1 0 0;
  margin: 24px 0;
}

.footer__item3 {
  display: flex;
  flex: 0 0 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 12px;
  margin: 24px 0;
}

.footer__title {
  font-size: calc(1.325rem + .9vw);
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
  white-space: nowrap;
}

.footer__list {
  margin: 0;
  padding: 0;
}

.list__link {
  position: relative;
  width: max-content;
  padding: 8px 0;
  color: #724cf9;
  list-style-type: none;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;

}

.list__link:after {
  position: absolute;
  bottom: 0;
  left: 0;
  content: '';
  height: 2px;
  background: #724cf9;
  width: 0;
  transition: width .2s;
}

.list__link:hover:after {
  width: 100%;
}

.footer__link {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .1s;
}

.footer__bottom {
  text-align: center;
  margin-bottom: 8px;
}


.link-item {
  position: relative;
  padding: 10px;
  height: 36px;
  width: 36px;
  margin: 12px 20px;
  border-radius: 50%;
  transition: .1s;
}

.facebook__wrap {
  color: #3b5998;
}

.facebook__wrap:hover {
  color: white;
  background: #3b5998;
  filter: drop-shadow(0 0 8px #3b5998);
  transform: scale(1.2);
}

.facebook {
  position: absolute;
  top: 10px;
  left: 13px;
}

.twitter__wrap {
  color: #00acee;
}

.twitter__wrap:hover {
  color: white;
  background: #00acee;
  filter: drop-shadow(0 0 8px #00acee);
  transform: scale(1.2);
}

.twitter {
  position: absolute;
  top: 10px;
  left: 10px;
}

.instagram__wrap {
  color: #dd2a7b;
}

.instagram__wrap:hover {
  color: white;
  background: #f09433;
  background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  background: -webkit-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  filter: drop-shadow(0 0 8px #bc1888);
  transform: scale(1.2);
}

.instagram {
  position: absolute;
  top: 10px;
  left: 11px;
}

.youtube__wrap {
  color: red;
}

.youtube__wrap:hover {
  color: white;
  background: red;
  filter: drop-shadow(0 0 8px red);
  transform: scale(1.2);
}

.youtube {
  position: absolute;
  top: 10px;
  left: 9px;
}

@media screen and (min-width: 576px) {
  .footer__container {
    width: 540px;
  }
}

@media screen and (min-width:768px) {
  .footer__container {
    width: 720px;
  }
}

@media screen and (min-width: 992px) {
  .footer__container {
    width: 960px;
  }
}

@media screen and (min-width: 992px) {
  .footer__container {
    width: 960px;
  }

  .footer__item3 {
    flex: 1 0 0;
  }
}

@media screen and (min-width: 1200px) {
  .footer__container {
    width: 1140px;
  }
}

@media screen and (min-width: 1400px) {
  .footer__container {
    width: 1320px;
  }
}
</style>