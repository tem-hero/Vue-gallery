<template>
    <div class="portfolio__prod-gallery">
        <div class="portfolio__prod-gallery__main-pic">

            <img
                    :src="require(`@/assets/${images[currentGalleryPic]}`)"
                     class="portfolio__prod-gallery__image gallery__image"
                     alt="Product"
            >
        </div>

        <div class="portfolio__item-container">
            <div
                    v-for="(img, index) of images"
                    :key="index"
                    @mouseover="newCurrentGalleryPic(index)"
                    class="portfolio__prod-gallery__item"
            >

                <img
                        :src="require(`@/assets/${img}`)"
                        alt="Product"
                        class="portfolio__prod-gallery__image gallery__image"
                        :class="{'portfolio__prod-gallery__image-active': currentGalleryPic === index}"
                >
            </div>
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
    display: flex;
    flex-direction: column;
    flex-basis: 550px;
    margin-top: 8px;
}

.portfolio__item-container {
    display: flex;
    justify-content: space-between;
}

.portfolio__prod-gallery__image {
    height: 100%;
    object-fit: cover;
}

.portfolio__prod-gallery__main-pic {
    height: 350px;
    margin-bottom: 10px;
}

.portfolio__prod-gallery__item {
    flex-basis: 130px;
    height: 115px;
    background-color: #000000;
}

.portfolio__prod-gallery__image-active {
    opacity: 0.5;
}
</style>