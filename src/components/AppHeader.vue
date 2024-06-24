<template>
  <div class="header">
    <div class="header__container">
      <router-link class="header__logo"
                   tag="a"
                   to="/Website-Pizza-Vue">
        <img src="@/assets/static/Logo.png"
             alt="logo" />
      </router-link>
      <div class="header__burger"
           @click="$store.state.isActiveSidebar = !$store.state.isActiveSidebar"
           :class="{ header__burger_on: $store.state.isActiveSidebar }">
        <span :class="{ 'center-line': !$store.state.isActiveSidebar }"></span>
      </div>
      <div class="header__nav">
        <router-link class="nav__link"
                     tag="a"
                     to="/Website-Pizza-Vue"
                     exact
                     active-class="nav__link_on">Home</router-link>
        <router-link class="nav__link"
                     tag="a"
                     to="/Website-Pizza-Vue/menu"
                     exact
                     active-class="nav__link_on">Menu</router-link>
        <router-link v-if="!isRegistered"
                     class="nav__link"
                     tag="a"
                     to="/Website-Pizza-Vue/login"
                     exact
                     active-class="nav__link_on">Log In</router-link>
        <router-link v-if="isRegistered"
                     class="nav__link"
                     tag="a"
                     to="/Website-Pizza-Vue/orders"
                     exact
                     active-class="nav__link_on">Orders</router-link>
        <router-link v-if="!isRegistered"
                     class="nav__link"
                     tag="a"
                     to="/Website-Pizza-Vue/register"
                     exact
                     active-class="nav__link_on">Register</router-link>
        <button v-if="isRegistered"
                @click="logOut"
                class="nav__link button__link">
          Log Out
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {};
  },
  computed: {
    isRegistered() {
      return this.$store.state.isRegistered;
    },
  },
  methods: {
    logOut() {
      this.$store.state.isRegistered = false;
      this.$router.push("/Website-Pizza-Vue");
    },
  },
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  background-color: #f0f0f0;
  width: 100%;
  height: 56px;
  z-index: 98;
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 16px;
}

.header__logo {
  position: relative;
  width: 80px;
  height: 40px;
  display: inline-block;
  margin: 8px 0px;
}

img {
  top: 0px;
  left: 0px;
  position: absolute;
  width: 100%;
  height: 100%;
}

.header__burger {
  width: 28px;
  height: 18px;
  position: relative;
  padding: 1px 6px;
}

.center-line {
  width: 100%;
  height: 2px;
  background-color: #333;
  position: absolute;
  top: 8px;
}

.header__burger::before,
.header__burger::after {
  content: "";
  width: 100%;
  height: 2px;
  background-color: #333;
  position: absolute;
  transition: all 0.2s;
}

.header__burger::before {
  top: 0px;
}

.header__burger::after {
  bottom: 0;
}

.header__burger_on::before {
  transform: rotate(-45deg) translate(-8px, 4px);
}

.header__burger_on::after {
  transform: rotate(45deg) translate(-8px, -4px);
}

.header__nav {
  display: none;
  margin: 16px 0 16px 586px;
  flex-wrap: nowrap;
}

.nav__link {
  text-decoration: none;
  margin: 0 8px;
  width: max-content;
  font-weight: 700;
  color: #724cf9;
  position: relative;
  /* white-space: nowrap; */
}

.nav__link_on {
  position: relative;
  color: #0041bb;
}

.nav__link_on:after {
  width: 100% !important;
  background: #0041bb !important;
}

.nav__link:after {
  position: absolute;
  left: 0;
  bottom: 0;
  content: "";
  height: 2px;
  width: 0;
  background: #724cf9;
  transition: 0.2s;
}

.nav__link:hover:after {
  width: 100%;
}

.button__link {
  border: none;
  font-family: var(--font-sans-serif);
  font-size: 1rem;
  padding: 0;
}

@media screen and (min-width: 576px) {
  .header__container {
    width: 540px;
  }
}

@media screen and (min-width: 768px) {
  .header__container {
    width: 720px;
  }
}

@media screen and (min-width: 992px) {
  .header__container {
    width: 960px;
  }

  .header__burger {
    display: none;
  }

  .header__nav {
    display: flex;
  }
}

@media screen and (min-width: 1200px) {
  .header__container {
    width: 1140px;
  }
}

@media screen and (min-width: 1400px) {
  .header__container {
    width: 1320px;
  }
}
</style>
