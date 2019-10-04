<template>
    <section class="portfolio__product-container">
        <PortfolioProductItem
                v-if="firstLayout"
                :product="product"></PortfolioProductItem>
        <PortfolioProductGallery :images="product.images"></PortfolioProductGallery>
        <PortfolioProductItem
                v-if="!firstLayout"
                :product="product"></PortfolioProductItem>
    </section>
</template>

<script>
import PortfolioProductItem from '@/components/PortfolioProductItem.vue'
import PortfolioProductGallery from '@/components/PortfolioProductGallery.vue'

export default {
    name: "PortfolioProduct",
    components: {
        PortfolioProductItem,
        PortfolioProductGallery
    },
    data() {
        return {}
    },
    props: ['product', 'firstLayout'],
}
</script>

<style>
.portfolio__product-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 40px;
    margin-top: 60px;
}
</style>