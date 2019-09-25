<template>
    <div class="home">
<!--        <HomeSlider></HomeSlider>-->
        <HomeGallery></HomeGallery>
    </div>
</template>

<script>
    import HomeSlider from '@/components/HomeSlider.vue'
    import HomeGallery from '@/components/Gallery.vue'

    export default {
        name: 'home',
        components: {
            HomeSlider,
            HomeGallery
        }
    }
</script>

<style>
.home {
    /*margin-top: 36px;*/
}

</style>