<template>
    <div
            class="slider"
            @mouseenter="controlsFadeIn"
            @mouseleave="controlsFadeOut"
    >
        <transition :name="transitionName" mode="in-out">
            <div
                    v-if="currentSlide === 0"
                    :key="0"
                    class="slider__item slider__slide-one"
                    :class="{ 'header-modal-fix': $store.state.isModalShowed }"
            >
                <h1 class="heading-font font-lighter"><span>lian creative agency</span></h1>
                <p class="heading-font__add font-lighter">minimal freelance portfolio</p>
            </div>

            <div
                    v-if="currentSlide === 1"
                    :key="1"
                    class="slider__item slider__slide-two"
                    :class="{ 'header-modal-fix': $store.state.isModalShowed }"
            >
                <h1 class="heading-font font-lighter"><span>we deliever quality results</span></h1>
                <p class="heading-font__add font-lighter">design & branding</p>
            </div>
        </transition>

        <span
                class="slider__control slider__control__left"
                :class="{ 'slider__controls-fade-in': mouseOver }"
                @click="prevSlide"

        ></span>
        <span
                class="slider__control slider__control__right"
                :class="{ 'slider__controls-fade-in': mouseOver }"
                @click="nextSlide"

        ></span>

        <div class="slider-dots" :class="{ 'slider__controls-fade-in': mouseOver }">
            <span
                    class="slider-dots__item"
                    @click.prevent="showSlide(0)"
                    :class="{'slider-dots_current': currentSlide === 0}"

            ></span>
            <span
                    class="slider-dots__item"
                    @click.prevent="showSlide(1)"
                    :class="{'slider-dots_current': currentSlide === 1}"

            ></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeSlider",
        data() {
            return {
                currentSlide: 0,
                slides: [0, 1],
                sliderTimer: null,
                transitionName: 'slide-next',
                mouseOver: false
            }
        },
        mounted() {
            this.sliderTimer = setTimeout(this.nextSlide, 12000);
        },
        methods: {
            nextSlide() {
                this.transitionName = 'slide-next';
                this.showSlide(this.currentSlide + 1);
            },
            prevSlide() {
                this.transitionName = 'slide-prev';
                this.showSlide(this.currentSlide - 1);
            },
            showSlide(n) {
                clearTimeout(this.sliderTimer);
                this.sliderTimer = setTimeout(this.nextSlide, 12000);
                if (n < 0) n = this.slides.length - 1;
                this.currentSlide = this.slides[n % this.slides.length];
            },
            controlsFadeIn() {
                this.mouseOver = true;
            },
            controlsFadeOut() {
                this.mouseOver = false;
            }
        }
    }
</script>

<style>
.slider {
    height: 650px;
    position: relative;
}

.slider__slide-one {
    background: url("../assets/sliderFirstNew.png") no-repeat top;
}

.slider__slide-two {
    background: url("../assets/sliderSecondNew.png") no-repeat left;
}

.slider__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-size: cover;
    position: absolute;
}

.slider__control, .slider-dots {
    position: absolute;
    z-index: 10;
    opacity: 0;
}

.slider__control {
    top: calc(50% - 21px);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #fefefe;
    cursor: pointer;
    transition: border-color .25s, background-color .25s, opacity .5s;
}

.slider__control:hover {
    border-color: #000000;
    background-color: #000000;
}

.slider__control__left {
    left: 3%;
}

.slider__control__right {
    right: 3%;
}

.slider__control__left::after,
.slider__control__right::after {
    content: '';
    position: absolute;
    top: 27%;
    width: 15px;
    height: 15px;
    border-bottom: 1px solid #fefefe;
    border-left: 1px solid #fefefe;
}

.slider__control__left::after {
    left: 37%;
    transform: rotate(45deg);
}

.slider__control__right::after {
    right: 37%;
    transform: rotate(-135deg);
}

.slider-dots {
    bottom: 4%;
    left: calc(50% - 17px);
    text-align: center;
    transition: opacity .5s;
}

.slider__controls-fade-in {
    opacity: 1;
}

.slider-dots__item {
    display: inline-block;
    box-sizing: border-box;
    height: 13px;
    width: 13px;
    margin: 0 2px;
    border-radius: 50%;
    background-color: #ffffff;
    cursor: pointer;
    border: 4px solid transparent;
    transition: border-color .5s;
}

.slider-dots_current {
    border-color: #000000;
}
</style>