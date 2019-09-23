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
        <div class="gallery">
            <transition-group name="gal-images" tag="div" class="gallery__row">
                <div v-for="img of rows[0]" :key="img.id + currentTag" class="gallery__item">
                    <img :src="getImgUrl(img.src)" alt="Item" class="gallery__image">
                </div>
            </transition-group>
            <transition-group name="gal-images" tag="div" class="gallery__row">
                <div v-for="img of rows[1]" :key="img.id + currentTag" class="gallery__item">
                    <img :src="getImgUrl(img.src)" alt="Item" class="gallery__image">
                </div>
            </transition-group>
            <transition-group name="gal-images" tag="div" class="gallery__row">
                <div v-for="img of rows[2]" :key="img.id + currentTag" class="gallery__item">
                    <img :src="getImgUrl(img.src)" alt="Item" class="gallery__image">
                </div>
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
let gallery, galleryRows, gallerySection;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
        /*fillRows(arr, i = 0, minRowIndex = 0) {
            if (i < arr.length) {
                setTimeout(() => {
                    this.calculateRowHeight();
                    let minRow = this.rowHeights.reduce((iMin, x, i, arr) => x < arr[iMin] ? i : iMin, 0);
                    this.fillRows(arr, prevRowIndex + 1, minRow);
                }, 100);
                let prevRowIndex = i;
                this.rows[minRowIndex].push(arr[i]);
            }
        },*/
        addItem() {
            this.rows[this.minRowIndex].push(this.filteredArr[this.currentIndex]);
        },
        clearRows() {
            for (let row of this.rows) {
                row.splice(0, row.length);
            }
            this.rowHeights[0] = this.rowHeights[1] = this.rowHeights[2] =
            this.currentIndex = this.minRowIndex = 0;
        },
        /*calculateRowHeight() {
            Array.from(galleryRows).forEach((row, index) => {
                let elems = row.querySelectorAll('.gallery__item');
                this.rowHeights[index] = 0;
                for (let elem of elems) {
                    this.rowHeights[index] += elem.getBoundingClientRect().height;
                }
            });
        },*/
        calculateRowHeight() {
            Array.from(galleryRows).forEach((row, index) => {
                let elems = row.querySelectorAll('.gallery__item');
                this.rowHeights[index] = 0;
                for (let elem of elems) {
                    this.rowHeights[index] += elem.getBoundingClientRect().height;
                }
            });
            this.currentIndex++;
            if (this.currentIndex < this.filteredArr.length) {
                this.minRowIndex = this.rowHeights.reduce((iMin, x, i, arr) => x < arr[iMin] ? i : iMin, 0);
                setTimeout(() => this.addItem(), 50);
            }
        },
        getImgUrl(src) {
            if (src.startsWith('http')) return src;
            return require(`@/assets/${src}`);
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
            gallery = document.getElementById('gallery');
            gallerySection = gallery.querySelector('.gallery');
            galleryRows = gallery.querySelectorAll('.gallery__row');
            let observer = new MutationObserver(mutations => {
                for (let mutation of mutations) {
                    for ( let node of mutation.addedNodes) {
                        if (node.className.includes('gallery__item')) {
                            if (!node.children.length) return;
                            let ctx = this;
                            node.children[0].onload = function() {
                                ctx.$nextTick(() => {
                                    ctx.calculateRowHeight();
                                });
                            };
                        }
                    }
                }
            });
            observer.observe(gallerySection, {
                childList: true,
                subtree: true
            });
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

.lds-facebook {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
}
.lds-facebook div {
    display: inline-block;
    position: absolute;
    left: 6px;
    width: 13px;
    background: #bbbaba;
    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
    left: 6px;
    animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
    left: 26px;
    animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
    left: 45px;
    animation-delay: 0s;
}
@keyframes lds-facebook {
    0% {
        top: 6px;
        height: 46px;
    }
    50%, 100% {
        top: 19px;
        height: 21px;
    }
}

.gal-images-enter-active {
    transition: opacity .25s, transform .5s ease-out;
}

.gal-images-enter {
    transform: translateY(10%);
    opacity: 0;
}

.gal-images-leave-to, .gal-button-enter {
    opacity: 0;
}

.gal-button-enter-active {
    transition: opacity .5s;
}


</style>