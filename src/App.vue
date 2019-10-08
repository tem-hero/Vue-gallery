<template>
  <div id="apps">
    <header class="white-colored">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/portfolio">Portfolio</router-link>
        <router-link to="/blog">Blog</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </header>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <footer class="white-colored"></footer>
  </div>
</template>

<style>
#apps {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  font-family: Roboto, sans-serif;
  font-size: 14px;
  color: #777777;
  text-transform: uppercase;
}

* {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

body {
  background-color: #fafafa;
}

a {
  text-decoration: none;
  color: #6d6666;
  font-weight: bold;
}

header {
  height: 90px;
  box-shadow: 0 3px 5px 1px rgba(0,0,0,0.25);
  display: flex;
  justify-content: center;
  align-items: center;
}

footer {
  height: 200px;
  box-shadow: 0 -1px 6px 1px rgba(0,0,0,0.25);
}

header, footer {
  width: 100%;
  z-index: 100;
  position: relative;
}

footer p {
  font-size: 13px;
  color: #9c9c9c;
  margin-top: 36px;
}

footer span {
  color: black;
}

.white-colored {
  background-color: white;
}

.container_center {
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
}

.header-container, .footer-container {
  display: flex;
  align-items: center;
  height: 100%;
}

.header-container {
  justify-content: space-between;
}

.footer-container {
  flex-direction: column;
  justify-content: center;
}

.header-container img {
  margin-left: 1.5rem;
}

.header__nav {
  margin-right: 1.5rem;
}

.nav-list {
  display: flex;
}

.nav-list li {
  margin-left: 36px;
}

.nav-list a {
  display: block;
}

.current-link {
  color: #000;
}

.heading-font {
  font-size: 48px;
  font-weight: lighter;
  color: white;
  letter-spacing: 0.075em;
}

.heading-font span {
  background-color: black;
  padding: 0 35px;
}

.heading-font__add {
  font-size: 18px;
  font-weight: lighter;
  color: black;
  letter-spacing: 0.45em;
  margin-top: 15px;
}

.load-button-container {
  height: 94px;
  position: relative;
  text-align: center;
}

.load-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #959595;
  width: 124px;
  height: 30px;
  border-radius: 2px;
  cursor: pointer;
  position: absolute;
  left: calc(50% - 62px);
  margin-top: 20px;
}

.load-button a {
  color: #ffffff;
  font-size: 13px;
}

.lds-facebook {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 6px;
  width: 13px;
  background: #bbbaba;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 6px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 26px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 45px;
  animation-delay: 0s;
}
@keyframes lds-facebook {
  0% {
    top: 6px;
    height: 46px;
  }
  50%, 100% {
    top: 19px;
    height: 21px;
  }
}

.about__awesome-team__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
}

.about__awesome-team__text {
  max-width: 650px;
  text-align: center;
}

.about__cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, 358px);
  grid-column-gap: 30px;
  margin-top: 15px;
  justify-content: space-between;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.gal-images-enter-active {
  transition: opacity .25s, transform .5s ease-out;
}

.gal-images-enter {
  transform: translateY(10%);
  opacity: 0;
}

.gal-images-leave-to, .gal-button-enter {
  opacity: 0;
}

.gal-button-enter-active {
  transition: opacity .5s;
}
</style>
