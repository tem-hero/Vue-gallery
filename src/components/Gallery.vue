<template>
    <div class="container_center" id="gallery">
        <ul class="nav-list gallery__nav"
            @click.prevent="filterImages">
            <li v-for="link of galleryNav" :key="link.id">
                <a href="#" :data-tag="link.tag" :class="{'current-link': link.tag === currentTag}">
                    {{ link.name }}
                </a>
            </li>
        </ul>
        <div class="gallery" >
            <transition-group name="gal-images" tag="div" class="gallery__row">
                <div v-for="img of rows[0]" :key="img.id + currentTag" class="gallery__item"
                    ><img :src="getImgUrl(img.src)" @load="calculateRowHeight" alt="Item" class="gallery__image"></div>
            </transition-group>
            <transition-group name="gal-images" tag="div" class="gallery__row">
                <div v-for="img of rows[1]" :key="img.id + currentTag" class="gallery__item"
                    ><img :src="getImgUrl(img.src)" @load="calculateRowHeight" alt="Item" class="gallery__image"></div>
            </transition-group>
            <transition-group name="gal-images" tag="div" class="gallery__row">
                <div v-for="img of rows[2]" :key="img.id + currentTag" class="gallery__item"
                    ><img :src="getImgUrl(img.src)" @load="calculateRowHeight" alt="Item" class="gallery__image"></div>
            </transition-group>
        </div>
        <div class="load-button-container">
            <transition name="gal-button">
                <div class="load-button"
                     @click.prevent="loadMemes"
                     v-if="showButton" key="button"><a href="#">load moar</a>
                </div>
                <div class="lds-facebook"
                     v-else key="loader"><div></div><div></div><div></div></div>
            </transition>
        </div>
    </div>
</template>

<script>
import getRandomIntInclusive from '@/components/getRandomIntInclusive'

function ImageObj(url, ctx) {
    this.src = url;
    this.tag = ctx.galleryNav[getRandomIntInclusive(1, 6)].tag + ' all';
    this.id = ctx.allImages.length + 1;
}

function memesOnLoad(src) {
    return new Promise((resolve, reject) => {
        let img = document.createElement('img');
        img.onload = () => resolve();
        img.onerror = reject;
        img.src = src;
    });
}

function smallestValue(arr) {
    let min = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[min]) min = i;
    }
    return min;
}

export default {
    name: "Gallery",
    data() {
        return {
            rows: [
                [], [], []
            ],
            allImages: [
                { src: 'gallery-item1.png', tag: 'logo all', id: 1},
                { src: 'gallery-item2.png', tag: 'web all', id: 2},
                { src: 'gallery-item3.png', tag: 'web all', id: 3},
                { src: 'gallery-item10.png', tag: 'logo web all', id: 4},
                { src: 'gallery-item4.png', tag: 'ui all', id: 5},
                { src: 'gallery-item5.png', tag: 'wordpress all', id: 6},
                { src: 'gallery-item6.png', tag: 'web brand all', id: 7},
                { src: 'gallery-item7.png', tag: 'mobile all', id: 8},
                { src: 'gallery-item8.png', tag: 'mobile all', id: 9},
                { src: 'gallery-item9.png', tag: 'mobile all', id: 10}
            ],
            galleryNav: [
                { name: 'all', tag: 'all', id: 1},
                { name: 'logo', tag: 'logo', id: 2},
                { name: 'mobile app', tag: 'mobile', id: 3},
                { name: 'wordpress', tag: 'wordpress', id: 4},
                { name: 'web design', tag: 'web', id: 5},
                { name: 'ui/ix', tag: 'ui', id: 6},
                { name: 'branding', tag: 'brand', id: 7},
            ],
            filteredArr: '',
            currentIndex: 0,
            minRowIndex: 0,
            currentTag: '',
            rowHeights: [ 0, 0, 0 ],
            showButton: true
        }
    },
    methods: {
        filterImages(e) {
            if (e.target.tagName !== 'A') return;
            if (e.target.dataset.tag === this.currentTag) return;
            this.currentTag = e.target.dataset.tag;
            this.filteredArr = this.allImages.filter(item => item.tag.includes(this.currentTag));
            this.clearRows();
            this.addItem();
        },
        addItem() {
            this.rows[this.minRowIndex].push(this.filteredArr[this.currentIndex]);
        },
        getImgUrl(src) {
            if (src.startsWith('http')) return src;
            return require(`@/assets/${src}`);
        },
        clearRows() {
            for (let row of this.rows) {
                row.splice(0, row.length);
            }
            this.rowHeights[0] = this.rowHeights[1] = this.rowHeights[2] =
            this.currentIndex = this.minRowIndex = 0;
        },
        calculateRowHeight(e) {
            let height = e.target.height;
            this.rowHeights[this.minRowIndex] += height;
            this.currentIndex++;
            if (this.currentIndex < this.filteredArr.length) {
                this.minRowIndex = smallestValue(this.rowHeights);
                // setTimeout(() => this.addItem(), 50);
                this.addItem();
            }
        },
        async loadMemes() {
            this.showButton = false;
            let response = await fetch('https://api.imgflip.com/get_memes');
            let imgs = await response.json();
            let ctx = this;
            let imgPromises = [];

            for (let i = 0; i < 3; i++) {
                let imgObj = new ImageObj(imgs.data.memes[getRandomIntInclusive(0, 90)].url, ctx);
                imgPromises.push(memesOnLoad(imgObj.src));
                this.allImages.push(imgObj);
            }

            Promise.all(imgPromises)
                .then(() => {
                    this.filteredArr = this.allImages;
                    this.currentIndex = this.allImages.length - 3;
                    this.addItem();
                    setTimeout(() => this.showButton = true, 500);
                });
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.filteredArr = this.allImages;
            this.addItem();
        });
    },
}
</script>

<style scoped>
.gallery__nav {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

.gallery {
    display: grid;
    min-height: 1340px;
    margin-top: 30px;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    grid-column-gap: 30px;
}

.gallery__row {
    height: auto;
}

.gallery__item {
    margin-bottom: 30px;
}

.gallery__image {
    width: 100%;
    cursor: pointer;
}

</style>