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
        <div
                @click="showModal"
                class="gallery">
            <transition-group name="gal-images" tag="div" class="gallery__row">
                <div
                        v-for="img of rows[0]"
                        :key="img.id + currentTag"
                        class="gallery__item"

                    ><img
                        :src="getImgUrl(img.src)"
                        :data-id="img.id"
                        @load="calculateRowHeight"
                        alt="Item"
                        class="gallery__image"></div>
            </transition-group>
            <transition-group name="gal-images" tag="div" class="gallery__row">
                <div
                        v-for="img of rows[1]"
                        :key="img.id + currentTag"
                        class="gallery__item"

                    ><img
                        :src="getImgUrl(img.src)"
                        :data-id="img.id"
                        @load="calculateRowHeight"
                        alt="Item"
                        class="gallery__image"></div>
            </transition-group>
            <transition-group name="gal-images" tag="div" class="gallery__row">
                <div
                        v-for="img of rows[2]"
                        :key="img.id + currentTag"
                        class="gallery__item"

                    ><img
                        :src="getImgUrl(img.src)"
                        :data-id="img.id"
                        @load="calculateRowHeight"
                        alt="Item"
                        class="gallery__image"></div>
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
        <ModalWindow
                :modalId="modalData.id"
                v-show="modalData.isVisible"
                @close="closeModal"
                @prev-img="modalPrev"
                @next-img="modalNext">

            <template v-slot:image><img

                    :src="getImgUrl(modalImg)"
                    alt="Product"
                    class="gallery__image"
            ></template>

            <template v-slot:post>
                <h2>{{ itemInfo[modalData.id % 2].title }}</h2>
                <p>{{ itemInfo[modalData.id % 2].subtitle }}</p>
                <hr class="portfolio__line">

                <article class="portfolio-article">
                    <p class="article-date">
                        <time
                                :datetime="itemInfo[modalData.id % 2].date">
                            {{ setDate(itemInfo[modalData.id % 2].date) }}
                        </time>

                        <span>{{ itemInfo[modalData.id % 2].likes }} likes</span>
                    </p>
                    <p>{{ itemInfo[modalData.id % 2].info }}</p>
                </article>
            </template>
        </ModalWindow>
    </div>
</template>

<script>
import getRandomIntInclusive from '@/components/getRandomIntInclusive'
import ModalWindow from '@/components/ModalWindow.vue'
import setDate from '@/components/setDate.vue'

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
        ModalWindow
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
                { src: 'gallery-item10.png', tag: 'logo web all', id: 4},
                { src: 'gallery-item4.png', tag: 'ui all', id: 5},
                { src: 'gallery-item5.png', tag: 'wordpress all', id: 6},
                { src: 'gallery-item6.png', tag: 'web brand all', id: 7},
                { src: 'gallery-item7.png', tag: 'mobile all', id: 8},
                { src: 'gallery-item8.png', tag: 'mobile all', id: 9},
                { src: 'gallery-item9.png', tag: 'mobile all', id: 10}
            ],
            itemInfo: [
                {id: 0, title: 'Pereira Creative Agency', subtitle: 'Branding Design', date: '2015-02-28', likes: 324,
                    info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.',
                    tags: ['Mobile App', 'UI/UX design'], roles: ['Project Designer', 'Lead Designer', 'Markerting Head'],
                    images: ['portfolio1-1.png', 'gallery-item5.png', 'gallery-item8.png', 'blog-image3.png']},

                {id: 1, title: 'Pereira Creative Agency', subtitle: 'Branding Design', date: '2015-02-28', likes: 727,
                    info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.',
                    tags: ['Mobile App', 'UI/UX design'], roles: ['Project Designer', 'Lead Designer', 'Markerting Head'],
                    images: ['portfolio2-1.png', 'gallery-item4.png', 'blog-image1.png', 'gallery-item7.png']}
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
            showButton: true,
            modalData: {
                isVisible: false,
                id: 1
            }
        }
    },
    methods: {
        filterImages(e) {
            if (e.target.tagName !== 'A') return;
            if (e.target.dataset.tag === this.currentTag) return;
            this.currentTag = e.target.dataset.tag;

            this.filteredArr = this.allImages
                .filter(item => item.tag.includes(this.currentTag));

            let newId = this.modalData.id = 1;
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
            this.modalData.id = +e.target.dataset.id;
            this.$root.$emit('modal-showed');
            document.body.style.paddingRight = this.scrollWidth + 'px';
            document.body.style.overflow = 'hidden';
            this.modalData.isVisible = true;
        },
        closeModal() {
            this.$root.$emit('modal-closed');
            document.body.style.paddingRight = '';
            document.body.style.overflow = 'auto';
            this.modalData.isVisible = false;
        },
        modalPrev() {
            if (this.modalData.id === 1) {
                this.modalData.id = this.filteredArr.length;
            } else {
                this.modalData.id -= 1;
            }
        },
        modalNext() {
            if (this.modalData.id === this.filteredArr.length) {
                this.modalData.id = 1;
            } else {
                this.modalData.id += 1;
            }
        }
    },
    computed: {
        modalImg() {
            return this.filteredArr[this.modalData.id - 1].src;
        },
        scrollWidth() {
            return window.innerWidth - document.documentElement.clientWidth;
        }
    },
    created() {
        this.filteredArr = this.allImages;
        this.addItem();
    }
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
    cursor: pointer;
}

.gallery__image {
    width: 100%;
}

</style>