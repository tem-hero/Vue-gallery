<template>
    <div class="portfolio__prod-gallery">
        <div class="portfolio__prod-gallery__main-pic">

            <img :src="require(`@/assets/${images[currentGalleryPic]}`)"
                 class="portfolio__prod-gallery__image"
                 alt="Product">
        </div>
        <div v-for="(img, index) of images"
             :key="index"
             @mouseover="newCurrentGalleryPic(index)"
             class="portfolio__prod-gallery__item">

            <img :src="require(`@/assets/${img}`)"
                 alt="Product"
                 class="portfolio__prod-gallery__image">
        </div>
    </div>
</template>

<script>
export default {
    name: "PortfolioProductGallery",
    data() {
        return {
            currentGalleryPic: 0
        }
    },
    props: ['images'],
    methods: {
        newCurrentGalleryPic(index) {
            this.currentGalleryPic = index;
        }
    }
}
</script>

<style>
.portfolio__prod-gallery {
    display: grid;
    grid: repeat(4, minmax(auto, 117px)) / repeat(4, 1fr);
    grid-gap: 8px 10px;
}

.portfolio__prod-gallery__main-pic {
    grid-column: 1 / 5;
    grid-row: 1 / 4;
}

.portfolio__prod-gallery__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>