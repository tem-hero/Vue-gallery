<template>
    <div class="container_center" id="gallery">
        <ul
                class="gallery__nav"
                @click.prevent="filterImages"
        >
            <li
                    v-for="link of galleryNav"
                    :key="link.id"
                    class="gallery__nav__link"
            >
                <a
                        href="#"
                        :data-tag="link.tag"
                        class="header__nav__link"
                        :class="{'current-link': link.tag === currentTag}"

                >{{ link.name }}</a>
            </li>
        </ul>
        <div
                class="gallery"
                @click="showModal"
        >
            <transition-group name="gal-images" tag="div" class="gallery__row">
                <div
                        v-for="img of rows[0]"
                        :key="img.id + currentTag"
                        class="gallery__item"

                    ><img
                            :src="getImgUrl(img.src)"
                            :data-id="img.id"
                            alt="Item"
                            class="gallery__image gallery__image_fade"
                            @load="calculateRowHeight"
                    ></div>
            </transition-group>
            <transition-group name="gal-images" tag="div" class="gallery__row">
                <div
                        v-for="img of rows[1]"
                        :key="img.id + currentTag"
                        class="gallery__item"

                    ><img
                            :src="getImgUrl(img.src)"
                            :data-id="img.id"
                            alt="Item"
                            class="gallery__image gallery__image_fade"
                            @load="calculateRowHeight"
                    ></div>
            </transition-group>
            <transition-group name="gal-images" tag="div" class="gallery__row">
                <div
                        v-for="img of rows[2]"
                        :key="img.id + currentTag"
                        class="gallery__item"

                    ><img
                            :src="getImgUrl(img.src)"
                            :data-id="img.id"
                            alt="Item"
                            class="gallery__image gallery__image_fade"
                            @load="calculateRowHeight"
                    ></div>
            </transition-group>
        </div>

        <div class="load-button-container">
            <transition name="gal-button">
                <div
                        v-if="showButton"
                        key="button"
                        class="load-button"
                        @click.prevent="loadMemes"

                ><a href="#">load moar</a>
                </div>
                <div
                        v-else
                        key="loader"
                        class="lds-facebook"

                ><div></div><div></div><div></div></div>
            </transition>
        </div>

        <ModalWindow
                :modalId="currentModalId"
                v-show="$store.state.isModalShowed"
                @close="closeModal"
                @prev-img="modalPrev"
                @next-img="modalNext"
        >
            <template v-slot:image><img

                    :src="getImgUrl(modalImg)"
                    alt="Product"
                    class="gallery__image"
            ></template>

            <template v-slot:post>

                <h2 class="product__title">{{ itemInfo[currentModalId % 2].title }}</h2>
                <p class="product__subtitle text__regular-bold">{{ itemInfo[currentModalId % 2].subtitle }}</p>
                <hr class="portfolio__line">

                <article class="product__body">
                    <p class="product__date">
                        <time
                                :datetime="itemInfo[currentModalId % 2].date"

                        >{{ setDate(itemInfo[currentModalId % 2].date) }}</time>

                        <LikeButton><template>{{ itemInfo[currentModalId % 2].likes }} likes</template></LikeButton>
                    </p>

                    <p class="product__main-text text__common-p">{{ itemInfo[currentModalId % 2].info }}</p>
                </article>
            </template>
        </ModalWindow>
    </div>
</template>

<script>
import getRandomIntInclusive from '@/components/getRandomIntInclusive'
import ModalWindow from '@/components/ModalWindow.vue'
import setDate from '@/components/setDate.vue'
import LikeButton from '@/components/LikeButton.vue'

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
    components: {
        ModalWindow,
        LikeButton
    },
    mixins: [setDate],
    data() {
        return {
            rows: [
                [], [], []
            ],
            allImages: [
                { src: 'gallery-item1.png', tag: 'logo all', id: 1},
                { src: 'gallery-item2.png', tag: 'web all', id: 2},
                { src: 'gallery-item3.png', tag: 'web all', id: 3},
                { src: 'gallery-item10-nofade.jpg', tag: 'logo web all', id: 4},
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
            currentTag: 'all',
            rowHeights: [ 0, 0, 0 ],
            showButton: true,
            currentModalId: 1
        }
    },
    methods: {
        filterImages(e) {
            if (e.target.tagName !== 'A') return;
            if (e.target.dataset.tag === this.currentTag) return;
            this.currentTag = e.target.dataset.tag;

            this.filteredArr = this.allImages
                .filter(item => item.tag.includes(this.currentTag));

            let newId = this.currentModalId = 1;
            for (let item of this.filteredArr) {
                item.id = newId;
                newId++;
            }

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
        },
        showModal(e) {
            if (e.target.tagName !== 'IMG') return;
            this.currentModalId = +e.target.dataset.id;
            this.$store.commit('showModal');
        },
        closeModal() {
            this.$store.commit('hideModal');
        },
        modalPrev() {
            if (this.currentModalId === 1) {
                this.currentModalId = this.filteredArr.length;
            } else {
                this.currentModalId -= 1;
            }
        },
        modalNext() {
            if (this.currentModalId === this.filteredArr.length) {
                this.currentModalId = 1;
            } else {
                this.currentModalId += 1;
            }
        }
    },
    computed: {
        modalImg() {
            return this.filteredArr[this.currentModalId - 1].src;
        },
        itemInfo() {
            return this.$store.state.products;
        }
    },
    created() {
        this.filteredArr = this.allImages;
        this.addItem();
    }
}
</script>

<style>
.gallery__nav {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    border-top: 1px #e1e1e1 solid;
    border-bottom: 1px #e1e1e1 solid;
}

.gallery__nav__link {
    position: relative;
    padding: 20px;
}

.gallery__nav__link:not(:last-child)::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 30px;
    display: block;
    border-right: 1px #e1e1e1 solid;
    bottom: 16px;
    right: 0;
    transform: rotate(20deg);
}

.gallery {
    display: flex;
    min-height: 1320px;
    margin-top: 30px;
    justify-content: space-between;
}

.gallery__row {
    flex-basis: 360px;
    height: auto;
}

.gallery__item {
    position: relative;
    margin-bottom: 30px;
    cursor: pointer;
    background-color: #000000;
}

.gallery__image_fade:hover {
    opacity: 0.3;
}

.gallery__item:hover::before, .gallery__item:hover::after {
    content: '';
    position: absolute;
    left: 50%;
    width: 2px;
    height: 40px;
    background-color: #cbcbcb;
}

.gallery__item:hover::before {
    top: calc(50% - 20px);
}

.gallery__item:hover::after {
    top: calc(50% - 20px);
    transform: rotate(90deg);
}
</style>