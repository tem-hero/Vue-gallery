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
                        href="#" class="portfolio__menu-show-all">show all</a>
            </div>
        </nav>
        <main class="container_center">
            <PortfolioProduct
                    :product="products[currentProduct]"
                    :firstLayout="firstLayout"></PortfolioProduct>

            <section class="about__awesome-team__container">
                <h2>related works</h2>
                <p class="about__awesome-team__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            </section>

            <div class="about__cards portfolio__related-works">
                <div
                        v-for="(prod, index) of relatedProducts"
                        :key="index">
                    <img
                            :src="require(`@/assets/${prod}`)"
                            alt="Product"
                            class="portfolio__related-works__img">
                </div>
            </div>
        </main>
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
                    images: ['portfolio1-1.png', 'portfolio1-2.png', 'portfolio1-3.png', 'blog-image3.png']},

                {id: 1, title: 'Pereira Creative Agency', subtitle: 'Branding Design', date: '2015-02-28', likes: 324,
                    info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.',
                    tags: ['Mobile App', 'UI/UX design'], roles: ['Project Designer', 'Lead Designer', 'Markerting Head'],
                    images: ['portfolio2-1.png', 'row2-2.png', 'blog-image1.png', 'gallery-item3.png']}
            ],
            allProductsImg: [
                'gallery-item2.png',
                'portfolio2-1.png',
                'related-works1.png',
                'gallery-item3.png'
            ],
            relatedProducts: [],
            currentProduct: 0,
            firstLayout: true
        }
    },
    components: {
        PortfolioProduct
    },
    methods: {
        setCurrentProduct(id) {
            this.currentProduct = id;
        },
        showRelated() {
            this.relatedProducts = this.allProductsImg.filter((item, index) => index !== this.currentProduct);
        }
    },
    watch: {
        currentProduct: function() {
            this.currentProduct % 2 === 0 ? this.firstLayout = true : this.firstLayout = false;
            this.showRelated();
        }
    },
    mounted() {
        this.showRelated();
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
    margin-left: auto;
    width: 200px;
}

.portfolio__prev-button:before, .portfolio__next-button:after {
    content: "";
    display: inline-block;
    position: relative;
    top: -2px;
    width: 5px;
    height: 5px;
    border-left: 1px #6d6666 solid;
    border-top: 1px #6d6666 solid;
}

.portfolio__prev-button:before {
    margin-right: 4px;
    transform: rotate(-45deg);
}

.portfolio__next-button:after {
    margin-left: 4px;
    transform: rotate(135deg);
}

.portfolio__menu-show-all:before {
}

.portfolio__related-works {
    max-height: 250px;
}

.portfolio__related-works__img {
    width: 100%;
    object-fit: cover;
}
</style>