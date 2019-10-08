<template>
    <div>
<!--        <PageHeading></PageHeading>-->
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
                        href="#"
                        class="portfolio__menu-show-all"
                        @mouseenter="menuShow"
                        @mouseleave="menuHide"

                    >show all
                    <transition-group name="menu-show" tag="ul"
                            @click.prevent.native="showProduct"
                            class="portfolio__dropdown"
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
                                class="portfolio__dropdown__link">{{ item.name }}</a></li>

                    </transition-group></a>
            </div>
        </nav>

        <PortfolioProduct
                :product="products[currentProduct]"
                @related-click="setCurrentProduct($event % products.length)"></PortfolioProduct>
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
            if (this.menuShowedItems.length < this.menuItems.length) {
                this.menuShowedItems.push(this.menuItems[this.menuShowedItems.length]);
            }
        },
        menuHide() {
            if (this.menuShowedItems.length > 0) {
                this.menuShowedItems.pop();
            }
        }
    }
}
</script>

<style>
.portfolio__nav-container {
    display: flex;
}

.portfolio__prev-button, .portfolio__next-button,
.portfolio__menu-show-all {
    display: inline-block;
    width: 130px;
    text-align: center;
    padding: calc(36px - 1em) 0;
    border-right: 1px #ebebeb solid;
    border-left: 1px #ebebeb solid;
}

.portfolio__prev-button {
    border-right: none;
}

.portfolio__menu-show-all {
    position: relative;
    margin-left: auto;
    width: 200px;
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
    border-left: 1px #6d6666 solid;
    border-top: 1px #6d6666 solid;
}

.portfolio__prev-button::before {
    margin-right: 4px;
    transform: rotate(-45deg);
}

.portfolio__next-button::after {
    margin-left: 4px;
    transform: rotate(135deg);
}

.portfolio__menu-show-all::before {
}

.portfolio__dropdown {
    position: absolute;
    top: 60px;
    left: -1px;
    width: 200px;
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
    padding: calc(26px - 1em) 0;
}

.menu-show-enter-active, .menu-show-leave-active {
    transition: opacity .02s linear, transform .02s linear;

}
.menu-show-enter, .menu-show-leave-to {
    opacity: 0;
    transform: translateY(-30%);
}

</style>