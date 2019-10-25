<template>
    <div id="apps">
        <header class="white-colored" :class="{ 'header-modal-fix': $store.state.isModalShowed }">
            <div class="container_center header-container">
                <img src="./assets/logo.png" alt="Logo"/>
                <transition-group

                        tag="ul"
                        name="nav"
                        class="header__nav__list"
                        @click.native="movePseudo"
                >
                    <li
                            v-for="link in headerNav"
                            :key="link.id"
                            class="header__nav__list__item"
                            :class="{ 'page-current-pseudo': link.id === 5 }"

                    ><router-link

                            :to="link.to"
                            :data-id="link.id"
                            class="header__nav__link"
                            exact-active-class="page-current-link"

                    >{{ link.name }}</router-link>
                    </li>
                    <HeaderSearch key="9"/>
                </transition-group>
            </div>
        </header>

        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>

        <footer class="footer-container white-colored" :class="{ 'header-modal-fix': $store.state.isModalShowed }">
            <router-link to="/"><img src="./assets/logo.png" class="footer__logo" alt="Logo"/></router-link>

            <div class="footer__social-icons">
                <a
                        v-for="item of socials"
                        :key="item.id"
                        :href="item.socialLink"
                        class="footer__socials__item"
                        @click.prevent

                ><i :class="item.html"></i></a>
            </div>

            <p class="footer-copyrights">© 2016 <span>multix theme</span> by themeforces. all rights reserved.</p>
        </footer>
    </div>
</template>

<script>
import HeaderSearch from '@/components/HeaderSearch.vue'

export default {
    data() {
        return {
            headerNav: [
                {id: 0, to: '/', name: 'home'},
                {id: 1, to: '/about', name: 'about'},
                {id: 2, to: '/portfolio', name: 'portfolio'},
                {id: 3, to: '/blog', name: 'blog'},
                {id: 4, to: '/contact', name: 'contact'}
            ],
            pseudo: {id: 5, to: '', name: ''},
            pseudoPosition: 0
        }
    },
    components: {
        HeaderSearch
    },
    methods: {
        fixBodyOn() {
            document.body.style.paddingRight = this.scrollWidth + 'px';
            document.body.style.overflow = 'hidden';
        },
        fixBodyOff() {
            document.body.style.paddingRight = '';
            document.body.style.overflow = 'auto';
        },
        movePseudo(e) {
            if (e.target.tagName !== 'A') return;
            let index = e.target.dataset.id;

            this.headerNav.splice(this.pseudoPosition, 1);
            this.headerNav.splice(index, 0, this.pseudo);
            this.pseudoPosition = index;
        }
    },
    computed: {
        scrollWidth() {
            return window.innerWidth - document.documentElement.clientWidth;
        },
        socials() {
            return this.$store.getters.allSocials;
        }
    },
    created() {
        this.$store.watch(state => state.isModalShowed, isShowed => {

            if (isShowed) {
                this.fixBodyOn();
            } else {
                this.fixBodyOff();
            }
        });

        for (let i = 0; i < this.headerNav.length; i++) {
            if (this.headerNav[i].to === window.location.pathname) {
                this.pseudoPosition = i;
                break;
            }
        }
        this.headerNav.splice(this.pseudoPosition, 0, this.pseudo);
    }
}
</script>

<style>
#apps {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    color: #777777;
    text-transform: uppercase;
}

* {
    margin: 0;
    padding: 0;
}

body {
    background-color: #fafafa;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
    font-weight: bold;
    color: #6d6666;
}

header, footer {
    position: relative;
    width: 100%;
    z-index: 100;
}

header {
    /*display: flex;*/
    box-sizing: border-box;
    height: 91px;
    padding: 28px 1.1rem;
    /*justify-content: center;*/
    /*align-items: center;*/
    box-shadow: 0 1px 5px 1px rgba(0,0,0,0.25);
}

footer {
    height: 300px;
    box-shadow: 0 -1px 6px 1px rgba(0,0,0,0.05);
}

.container_center {
    display: block;
    max-width: 1140px;
    /*width: 100%;*/
    margin-left: auto;
    margin-right: auto;
}

.header-container, .footer-container {
    display: flex;
    align-items: center;
}

.header-container {
    /*width: 100%;*/
    justify-content: space-between;
}

.footer-container {
    flex-direction: column;
}

.header__nav__list {
    position: relative;
    display: flex;
}

.header__nav__list__item {
    margin-left: 45px;
}

.header__nav__link:hover, .page-current-link,
.current-link {
    color: #000000;
}

.page-current-pseudo {
    position: relative;
    left: 45px;
    margin-left: 0;
}

.page-current-pseudo::before {
    content: '';
    position: absolute;
    width: 19px;
    height: 1px;
    display: block;
    border-bottom: 1px #06060a solid;
    margin-left: -30px;
    margin-top: 6px;
}

.nav-move {
    transition: transform .5s;
}

.footer__logo {
    margin-top: 68px;
}

.footer-copyrights {
    font-size: 13px;
    color: #9c9c9c;
}

.footer-copyrights span {
    color: black;
}

.footer__social-icons {
    display: flex;
    width: 100%;
    margin: 38px 0;
    justify-content: center;
    padding: 20px 0;
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
}

.footer__socials__item {
    margin: 0 30px;
    color: #777777;
}

.white-colored {
    background-color: #ffffff;
}

.gallery__image {
    display: block;
    width: 100%;
}

.header-modal-fix {
    padding-right: 17px;
}

.modal__backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9000;
    overflow: auto;
}

.modal {
    position: relative;
    z-index: 9999;
}

.top-heading {
    display: flex;
    height: 350px;
    flex-direction: column;
    justify-content: center;
}

.top-heading-container_about {
    background: #f0f0f2 no-repeat url("./assets/about_head.png") right 36%;
}

.heading-font {
    font-size: 48px;
    color: white;
    letter-spacing: 0.225rem;
}

.heading-font span {
    background-color: black;
    padding: 0 35px;
}

.heading-font__add {
    font-size: 18px;
    color: #000000;
    letter-spacing: 0.5rem;
    margin-top: 15px;
}

.heading-font__add-two {
    margin-top: 35px;
}

.font-lighter {
    font-weight: lighter;
}

.text__common-p {
    margin: 30px 0;
    line-height: 2;
    font-weight: normal;
    text-transform: none;
}

.text__regular-bold {
    font-size: 16px;
    font-weight: bold;
    text-transform: none;
}

.black-span {
    display: inline-block;
    font-size: 13px;
    padding: 6px 17px;
    color: #ffffff;
    background-color: #000000;
}

.text__cards__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 95px;
}

.text__cards-title {
    font-size: 30px;
    letter-spacing: 0.65rem;
    color: #000000;
}

.text__cards-text {
    max-width: 564px;
    text-align: center;
}

.product__tags-title {
    font-size: 16px;
    font-weight: bold;
    color: #333333;
}

.bottom-cards {
    display: flex;
    margin-top: 15px;
    margin-bottom: 70px;
    justify-content: space-between;
}

.bottom-cards__item {
    flex-basis: 360px;
}

.product__title {
    font-size: 30px;
    font-weight: normal;
    letter-spacing: 0.28rem;
    color: #000000;
}

.product__subtitle {
    margin-top: 7px;
    color: #555555;
}

.portfolio__line {
    margin: 30px 0;
    color: #cccccc;
}

.product__body {
    text-transform: none;
}

.product__date {
    font-weight: bold;
    color: #555555;
}

.product__main-text {
    line-height: 2.25;
}

.product__tags {
    font-size: 16px;
    text-transform: none;
    margin: 10px 0;
    color: #999999;
}

.form__top-field-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 35px;
}

.form-field {
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    font-size: inherit;
    font-style: italic;
    font-family: inherit;
    outline: none;
    color: #c4c4c4;
    background-color: #fafafa;
    border: 1px #e1e1e1 solid;
}

.form-field:focus {
    padding-left: 8px;
    border-left: 3px solid #afafaf;
}

.form__input-field {
    height: 40px;
}

.form__textarea-field {
    display: block;
    /*width: 100%;*/
    resize: none;
}

.form__mid-field {
    /*display: block;*/
    width: 100%;
}

.form__submit-button {
    margin: 25px 0;
    padding: 12px 40px;
    font-size: inherit;
    text-transform: inherit;
    font-family: inherit;
    font-weight: 500;
    color: #ffffff;
    background-color: #000000;
    transition: background-color .12s;
    border: none;
    letter-spacing: 0.1em;
}

.form__submit-button:hover {
    background-color: rgba(41, 41, 41, 0.89);
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

.slide-next-enter, .slide-prev-enter,
.slide-next-leave-to, .slide-prev-leave-to,
.fade-enter, .fade-leave-to,
.gal-images-leave-to, .gal-button-enter,
.prod-fade-enter, .prod-fade-leave-to,
.related-fade-enter, .related-fade-leave-to {
    opacity: 0;
}

.slide-next-enter-active, .slide-prev-enter-active {
    transition: opacity 1.2s, transform .8s ease-out;
}

.slide-next-leave-active, .slide-prev-leave-active {
    transition: opacity 1.2s;
}

.fade-enter-active {
    transition: opacity .2s;
}

.gal-images-enter-active {
    transition: opacity .25s, transform .5s ease-out;
}

.gal-images-enter {
    transform: translateY(10%);
    opacity: 0;
}

.gal-button-enter-active {
    transition: opacity .5s;
}

.prod-fade-enter-active, .prod-fade-leave-active {
    transition: opacity .3s linear;
}

.related-fade-enter-active {
    transition: opacity .7s linear;
}

</style>
