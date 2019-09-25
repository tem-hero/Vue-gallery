<template>
    <div>
        <img :src="getImgUrl(src)" alt="Item" class="gallery__image">
    </div>
</template>

<script>
    export default {
        name: "GalleryRow",
        props: ['src'],
        methods: {
            getImgUrl(src) {
                if (src.startsWith('http')) return src;
                return require(`@/assets/${src}`);
            }
        },
        mounted() {
            // this.$nextTick(() => this.$emit('new-item'));
            setTimeout(() => this.$emit('new-item'), 50);
        }
    }
</script>

<style scoped>
.gallery__image {
    width: 100%;
    cursor: pointer;
}
</style>