<template>
    <main class="container_center">
        <transition
                name="prod-fade"
                mode="out-in"
                @before-leave="hideRelated"
                @after-enter="unhideRelated"
        >
            <section
                    v-if="firstLayout"
                    :key="1 + product.likes"
                    class="portfolio__product-container"
            >
                <PortfolioProductItem
                        :product="product"
                />
                <PortfolioProductGallery
                        :images="product.images"
                />
            </section>

            <section
                    v-else
                    :key="3 + product.likes"
                    class="portfolio__product-container"
            >
                <PortfolioProductGallery
                        :images="product.images"
                />
                <PortfolioProductItem
                        :product="product"
                />
            </section>
        </transition>

        <transition name="related-fade">
            <section
                    v-show="relatedVisible"
                    class="text__cards__container"
            >
                <h2 class="text__cards-title font-lighter">related works</h2>

                <p class="text__common-p text__cards-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            </section>
        </transition>

        <transition name="related-fade">
            <div
                    v-show="relatedVisible"
                    class="bottom-cards"
            >
                <div
                        v-for="(prod, index) of relatedProducts"
                        :key="index"
                        @click="$emit('related-click', prod.id)"
                        class="bottom-cards__item portfolio__related-works"
                >
                    <img
                            :src="require(`@/assets/${prod.img}`)"
                            alt="Product"
                            class="portfolio__related-works__img gallery__image"
                    >
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
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
}

.portfolio__related-works {
    max-height: 250px;
    overflow: hidden;
}

.portfolio__related-works__img {
    object-fit: cover;
    cursor: pointer;
}

.related-fade-enter-active {
    transition: opacity .7s linear;
}

.related-fade-enter, .related-fade-leave-to {
    opacity: 0;
}
</style>