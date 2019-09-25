<template>
    <div class="slider"
        @mouseover="controlFadeIn"
        @mouseout="controlFadeOut">
        <transition :name="transitionName" mode="in-out">
            <div class="slider__item slider__slide-one"
                 v-if="currentSlide === 0"
                :key="0">
                <h1 class="heading-font"><span>lian creative agency</span></h1>
                <p class="heading-font__add">minimal freelance portfolio</p>
            </div>
            <div class="slider__item slider__slide-two"
                 v-if="currentSlide === 1"
                :key="1">
                <h1 class="heading-font"><span>we deliever quality results</span></h1>
                <p class="heading-font__add">design & branding</p>
            </div>
        </transition>
        <a class="slider__control slider__control__left" href="#"
            @click.prevent="prevSlide"
        >&#10094;</a>
        <a class="slider__control slider__control__right" href="#"
           @click.prevent="nextSlide"
        >&#10095;</a>
        <div class="slider-dots">
            <span class="slider-dots__item"
                  @click.prevent="showSlide(0)"
                  :class="{'slider-dots_current': currentSlide === 0}"
            ></span>
            <span class="slider-dots__item"
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
                controls: ''
            }
        },
        mounted() {
            this.sliderTimer = setTimeout(this.nextSlide, 6000);
            this.controls = document.querySelectorAll('.slider__control, .slider-dots');
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
                this.sliderTimer = setTimeout(this.nextSlide, 6000);
                if (n < 0) n = this.slides.length - 1;
                this.currentSlide = this.slides[n % this.slides.length];
            },
            controlFadeIn() {
                for (let el of this.controls) {
                    el.style.opacity = 0.3;
                }
            },
            controlFadeOut() {
                for (let el of this.controls) {
                    el.style.opacity = 0;
                }
            }
        }
    }
</script>

<style scoped>
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

.slider-dots__item {
    cursor: pointer;
    height: 12px;
    width: 12px;
    margin: 0 2px;
    background-color: black;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.5s;
}

.slider-dots_current {
    background-color: #fafafa;
}

.slide-next-enter-active, .slide-prev-enter-active {
    transition: opacity .3s, transform .45s ease;
}

.slide-next-leave-active, .slide-prev-leave-active {
    transition: opacity .3s;
}

.slide-next-enter {
    transform: translateX(10%);
    opacity: 0;
}

.slide-prev-enter {
    transform: translateX(-10%);
    opacity: 0;
}

.slide-next-leave-to, .slide-prev-leave-to {
    opacity: 0;
}
</style>