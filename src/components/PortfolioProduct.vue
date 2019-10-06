<template>
    <main class="container_center">
        <transition name="prod-fade" @before-leave="hideRelated" @after-enter="unhideRelated" mode="out-in">
            <section v-if="firstLayout" :key="1 + product.likes" class="portfolio__product-container">
                <PortfolioProductItem

                        :product="product"

                ></PortfolioProductItem>
                <PortfolioProductGallery

                        :images="product.images"

                ></PortfolioProductGallery>
            </section>
            <section v-else :key="3 + product.likes" class="portfolio__product-container">
                <PortfolioProductGallery

                        :images="product.images"

                ></PortfolioProductGallery>
                <PortfolioProductItem

                        :product="product"

                ></PortfolioProductItem>
            </section>
        </transition>

        <transition name="related-fade">
            <section v-show="relatedVisible" class="about__awesome-team__container">
                <h2>related works</h2>
                <p class="about__awesome-team__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            </section>
        </transition>

        <transition name="related-fade">
            <div v-show="relatedVisible" class="about__cards portfolio__related-works">
                <div
                        v-for="(prod, index) of relatedProducts"
                        :key="index"
                        @click="$emit('related-click', prod.id)">
                    <img
                            :src="require(`@/assets/${prod.img}`)"
                            alt="Product"
                            class="portfolio__related-works__img">
                </div>
            </div>
        </transition>
    </main>
</template>

<script>
import PortfolioProductItem from '@/components/PortfolioProductItem.vue'
import PortfolioProductGallery from '@/components/PortfolioProductGallery.vue'
import shuffleArray from '@/components/shuffleArray'

export default {
    name: "PortfolioProduct",
    components: {
        PortfolioProductItem,
        PortfolioProductGallery
    },
    data() {
        return {
            allProductsImg: [
                {id: 0, img: 'gallery-item2.png'},
                {id: 1, img: 'portfolio2-1.png'},
                {id: 3, img: 'related-works1.png'},
                {id: 2, img: 'gallery-item3.png'}
            ],
            relatedProducts: [],
            firstLayout: true,
            relatedVisible: true
        }
    },
    props: ['product'],
    methods: {
        showRelated() {
            this.relatedProducts = this.allProductsImg.filter((item, index) => index !== this.product.id);
            shuffleArray(this.relatedProducts);
        },
        hideRelated() {
            this.relatedVisible = false;
        },
        unhideRelated() {
            this.showRelated();
            this.relatedVisible = true;
        }
    },
    watch: {
        product: function() {
            this.product.id % 2 === 0 ? this.firstLayout = true : this.firstLayout = false;
        }
    },
    mounted() {
        this.showRelated();
    }
}
</script>

<style>
.portfolio__product-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 40px;
    margin-top: 60px;
}

.portfolio__related-works {
    max-height: 250px;
    overflow: hidden;
}

.portfolio__related-works__img {
    width: 100%;
    object-fit: cover;
    cursor: pointer;
}

.prod-fade-enter-active, .prod-fade-leave-active {
    transition: opacity .3s linear;
}

.prod-fade-enter, .prod-fade-leave-to {
    opacity: 0;
}

.related-fade-leave-active {
    /*transition: opacity .1s linear;*/
}

.related-fade-enter-active {
    transition: opacity .7s linear;
}

.related-fade-enter, .related-fade-leave-to {
    opacity: 0;
}
</style>