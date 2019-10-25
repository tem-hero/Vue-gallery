<template>
    <div class="portfolio-page">
        <div class="top-heading-container_portfolio">
            <div class="container_center top-heading">
                <h1 class="heading-font font-lighter"><span>latest projects</span></h1>
                <p class="heading-font__add heading-font__add-two font-lighter">we deliver quality</p>
            </div>
        </div>

        <nav class="white-colored">
            <div class="portfolio__nav-container container_center">
                <span
                        class="portfolio__prev-button portfolio__nav-button"
                        @click.prevent="setCurrentProduct(Math.abs(currentProduct - 1))"

                    >previous</span>
                <span
                        class="portfolio__next-button portfolio__nav-button"
                        @click.prevent="setCurrentProduct((currentProduct + 1) % products.length)"

                    >next</span>
                <span
                        class="portfolio__menu-show-all portfolio__nav-button"
                        @mouseenter="menuShow"
                        @mouseleave="menuHide"

                    ><i class="fas fa-list-ul"></i> show all<transition-group

                            name="menu-show"
                            tag="ul"
                            class="portfolio__dropdown"
                            :class="menuShadow"
                            @click.native="showProduct"
                            @after-enter="menuShow"
                            @leave="menuHide"
                    >
                        <li
                                v-for="item of menuShowedItems"
                                :key="item.id"
                                class="portfolio__dropdown__item white-colored"

                        ><span
                                :data-id="item.id"
                                class="portfolio__dropdown__link">{{ item.name }}</span>
                        </li>

                    </transition-group></span>
            </div>
        </nav>

        <PortfolioProduct
                :product="products[currentProduct]"
                @related-click="setCurrentProduct($event % products.length)"
        />
    </div>
</template>

<script>
import PortfolioProduct from '@/components/PortfolioProduct.vue'

export default {
    name: 'Portfolio',
    data() {
        return {
            menuItems: [
                {id: 0, name: 'Branding Design'},
                {id: 1, name: 'Mobile App'},
                {id: 2, name: 'Branding Design'},
                {id: 3, name: 'Mobile App'}
            ],
            menuShowedItems: [],
            currentProduct: 0,
            menuShowed: false
        }
    },
    computed: {
        menuShadow() {
            return {
                'portfolio__menu-show-all_shadow': this.menuShowed,
                'portfolio__dropdown-pseudo': this.menuShowed
            }
        },
        products() {
            return this.$store.state.products;
        }
    },
    components: {
        PortfolioProduct
    },
    methods: {
        setCurrentProduct(id) {
            this.currentProduct = id;
        },
        showProduct(e) {
            if (e.target.tagName !== 'SPAN') return;
            this.currentProduct = e.target.dataset.id % 2;
            this.menuHide();
        },
        menuShow() {
            this.menuShowed = true;
            if (this.menuShowedItems.length < this.menuItems.length) {
                this.menuShowedItems.push(this.menuItems[this.menuShowedItems.length]);
            }
        },
        menuHide() {
            this.menuShowed = false;
            if (this.menuShowedItems.length > 0) {
                this.menuShowedItems.pop();
            }
        }
    }
}
</script>

<style>
.portfolio-page {
    min-height: 1645px;
}

.top-heading-container_portfolio {
    background: #e1e1e1 no-repeat url("../assets/porfolioHead.png") 93% 25%;
}

.portfolio__nav-container {
    display: flex;
}

.portfolio__nav-button, .portfolio__dropdown__link {
    display: inline-block;
    cursor: default;
}

.portfolio__nav-button {
    width: 164px;
    text-align: center;
    padding: calc(36px - 0.9rem) 0;
    font-weight: bold;
    border-right: 1px #ebebeb solid;
    border-left: 1px #ebebeb solid;
    color: #000000;
}

.portfolio__prev-button {
    border-right: none;
}

.portfolio__menu-show-all {
    position: relative;
    margin-left: auto;
    width: 196px;
}

.fas.fa-list-ul {
    margin-right: 6px;
}

.portfolio__nav-button:hover, .portfolio__dropdown__item:hover {
    background-color: #fafafa;
    transition: color .15s linear;
}

.portfolio__prev-button::before, .portfolio__next-button::after {
    content: "";
    display: inline-block;
    position: relative;
    top: -2px;
    width: 5px;
    height: 5px;
    border-left: 1px #000000 solid;
    border-top: 1px #000000 solid;
}

.portfolio__prev-button::before {
    margin-right: 12px;
    transform: rotate(-45deg);
}

.portfolio__next-button::after {
    margin-left: 12px;
    transform: rotate(135deg);
}

.portfolio__dropdown {
    position: absolute;
    top: 60px;
    left: -1px;
    width: 198px;
    z-index: 30;
}

.portfolio__menu-show-all_shadow {
    box-shadow: 0 4px 14px 1px rgba(0, 0, 0, 0.05);
}

.portfolio__menu-show-all_shadow::before {
    content: "";
    height: 18px;
    width: 196px;
    position: absolute;
    top: -18px;
    left: 1px;
    background-color: #fafafa;
    z-index: 2;
}

.portfolio__dropdown__item {
    border: 1px #ebebeb solid;
    border-bottom: 0;
}

.portfolio__dropdown__item:last-child {
    border-bottom: 1px #ebebeb solid;
}

.portfolio__dropdown__link {
    width: 100%;
    padding: calc(26px - 0.9rem) 0;
}

.menu-show-enter-active, .menu-show-leave-active {
    transition: opacity .02s linear, transform .02s linear;

}
.menu-show-enter, .menu-show-leave-to {
    opacity: 0;
    transform: translateY(-30%);
}

</style>