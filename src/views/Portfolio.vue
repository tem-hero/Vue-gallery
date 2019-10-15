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
                <a
                        @click.prevent="setCurrentProduct(Math.abs(currentProduct - 1))"
                        href="#"
                        class="portfolio__prev-button"

                    >previous</a>
                <a
                        @click.prevent="setCurrentProduct((currentProduct + 1) % products.length)"
                        href="#"
                        class="portfolio__next-button"

                    >next</a>
                <a
                        class="portfolio__menu-show-all"
                        @mouseenter="menuShow"
                        @mouseleave="menuHide"

                    ><i class="fas fa-bars"></i>show all<transition-group

                            name="menu-show"
                            tag="ul"
                            @click.prevent.native="showProduct"
                            class="portfolio__dropdown"
                            :class="menuShadow"
                            @after-enter="menuShow"
                            @leave="menuHide"
                    >
                        <li
                                v-for="item of menuShowedItems"
                                :key="item.id"
                                class="portfolio__dropdown__item white-colored"

                        ><a
                                href="#"
                                :data-id="item.id"
                                class="portfolio__dropdown__link">{{ item.name }}</a>
                        </li>

                    </transition-group></a>
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
            products: [
                {id: 0, title: 'Pereira Creative Agency', subtitle: 'Branding Design', date: '2015-02-28', likes: 324,
                    info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.',
                    tags: ['Mobile App', 'UI/UX design'], roles: ['Project Designer', 'Lead Designer', 'Markerting Head'],
                    images: ['portfolio1-1.png', 'gallery-item5.png', 'gallery-item8.png', 'blog-image3.png']},

                {id: 1, title: 'Pereira Creative Agency', subtitle: 'Branding Design', date: '2015-02-28', likes: 727,
                    info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.',
                    tags: ['Mobile App', 'UI/UX design'], roles: ['Project Designer', 'Lead Designer', 'Markerting Head'],
                    images: ['portfolio2-1.png', 'gallery-item4.png', 'blog-image1.png', 'gallery-item7.png']}
            ],
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
            if (e.target.tagName !== 'A') return;
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
    min-height: 1520px;
}

.top-heading-container_portfolio {
    background: #e1e1e1 no-repeat url("../assets/porfolioHead.png") 93% 25%;
}

.portfolio__nav-container {
    display: flex;
}

.portfolio__prev-button, .portfolio__next-button,
.portfolio__menu-show-all {
    display: inline-block;
    width: 164px;
    text-align: center;
    padding: calc(36px - 0.9rem) 0;
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
    cursor: default;
}

.fas.fa-bars {
    margin-right: 6px;
}

.portfolio__prev-button:hover, .portfolio__next-button:hover,
.portfolio__menu-show-all:hover, .portfolio__dropdown__item:hover {
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
    display: inline-block;
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