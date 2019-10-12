<template>
    <div
            class="slider"
            @mouseenter="controlsFadeIn"
            @mouseleave="controlsFadeOut"
    >
        <transition :name="transitionName" mode="in-out">
            <div
                    class="slider__item slider__slide-one"
                    v-if="currentSlide === 0"
                    :key="0"
            >
                <h1 class="heading-font"><span>lian creative agency</span></h1>
                <p class="heading-font__add">minimal freelance portfolio</p>
            </div>

            <div
                    class="slider__item slider__slide-two"
                    v-if="currentSlide === 1"
                    :key="1"
            >
                <h1 class="heading-font"><span>we deliever quality results</span></h1>
                <p class="heading-font__add">design & branding</p>
            </div>
        </transition>

        <a
                class="slider__control slider__control__left"
                href="#"
                @click.prevent="prevSlide"
                :class="{ 'slider__controls-fade-in': mouseOver }"
        >&#10094;</a>
        <a
                class="slider__control slider__control__right"
                href="#"
                @click.prevent="nextSlide"
                :class="{ 'slider__controls-fade-in': mouseOver }"
        >&#10095;</a>

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
    max-width: 100%;
    height: 650px;
    overflow: hidden;
    position: relative;
}

.slider__slide-one {
    background: url("../assets/sliderFirstNew.png") no-repeat right;
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
    color: black;
    z-index: 10;
    opacity: 0;
    transition: opacity 0.5s;
}

.slider__control {
    top: 50%;
    font-weight: lighter;
    font-size: 26px;
}

.slider__control__left {
    left: 3%;
}

.slider__control__right {
    right: 3%;
}

.slider-dots {
    bottom: 2%;
    left: 50%;
    text-align: center;
}

.slider__controls-fade-in {
    opacity: 0.3;
}

.slider-dots__item {
    cursor: pointer;
    height: 12px;
    width: 12px;
    margin: 0 2px;
    background-color: #fafafa;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.5s;
}

.slider-dots_current {
    background-color: #000000;
}

.slide-next-enter-active, .slide-prev-enter-active {
    transition: opacity 1.2s, transform .8s ease-out;
}

.slide-next-leave-active, .slide-prev-leave-active {
    transition: opacity 1.2s;
}

.slide-next-enter {
    /*transform: translateX(10%);*/
    opacity: 0;
}

.slide-prev-enter {
    /*transform: translateX(-10%);*/
    opacity: 0;
}

.slide-next-leave-to, .slide-prev-leave-to {
    opacity: 0;
}
</style>