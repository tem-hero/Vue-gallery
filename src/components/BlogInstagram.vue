<template>
    <div>
        <span class="heading-font__add blog__aside-head">instagram</span>
        <div class="instagram white-colored">
            <div v-for="item of instaImages" :key="item.id"><img :src="require(`@/assets/${item.imgSrc}`)" alt="Instagram picture"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BlogInstagram",
    data() {
        return {
            instaImages: [
                {id: 1, imgSrc: 'row-1-1.png'},
                {id: 2, imgSrc: 'row1-2.png'},
                {id: 3, imgSrc: 'row1-3.png'},
                {id: 4, imgSrc: 'row2-1.png'},
                {id: 5, imgSrc: 'row2-2.png'},
                {id: 6, imgSrc: 'row2-3.png'},
                {id: 7, imgSrc: 'row-3-1.png'},
                {id: 8, imgSrc: 'row-3-2.png'},
                {id: 9, imgSrc: 'row3-3.png'}
            ]
        }
    }
}
</script>

<style scoped>
.instagram {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 80px);
    grid-gap: 5px;
    padding: 25px;
}
</style>