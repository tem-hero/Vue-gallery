<template>
    <div class="about">
        <div class="top-heading-container">
            <div class="container_center top-heading">
                <h1 class="heading-font font-lighter"><span>about the agency</span></h1>
                <p class="heading-font__add heading-font__add-two font-lighter">welcome to lian</p>
            </div>
        </div>

        <main class="container_center">
            <div class="about__our-story">

                <div class="about__our-story__img">
                    <transition name="slide-next">
                        <div
                                v-if="showFirstPic"
                                class="about__our-story__img-one"
                                key="1"
                        ></div>
                        <div
                                v-else
                                class="about__our-story__img-two"
                                key="2"
                        ></div>
                    </transition>
                </div>
                <section class="about__our-story__story">

                    <h2 class="heading-font__add font-lighter about__our-story__title">our story</h2>
                    <p class="text__common-p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                        ut
                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                        tation
                        ullamcorper suscipit.</p>
                    <p class="text__common-p">Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim
                        placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui
                        facit
                        eorum claritatem.</p>
                    <h2 class="heading-font__add font-lighter">our skills</h2>
                    <AboutSkills/>
                </section>

            </div>
            <section class="text__cards__container">

                <h2 class="text__cards-title font-lighter">awesome team</h2>
                <p class="text__common-p text__cards-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit.</p>
            </section>

            <AboutCard/>
        </main>
    </div>
</template>

<script>
import AboutCard from '@/components/AboutCard.vue'
import AboutSkills from '@/components/AboutSkills.vue'

export default {
    name: 'About',
    components: {
        AboutCard,
        AboutSkills
    },
    data() {
        return {
            showFirstPic: true
        }
    },
    methods: {
        changePic() {
            this.showFirstPic = !this.showFirstPic;
            setTimeout(this.changePic, 20000);
        }
    },
    mounted() {
        setTimeout(this.changePic, 20000);
    }
}
</script>

<style>
.top-heading-container {
    background: #f0f0f2 no-repeat url("../assets/about_head.png") right 36%;
}

.top-heading {
    display: flex;
    height: 350px;
    flex-direction: column;
    justify-content: center;
}

.about__our-story {
    display: flex;
    min-height: 635px;
    margin-top: 72px;
    justify-content: space-between;
}

.about__our-story__title {
    margin-top: 10px;
}

.about__our-story__story, .about__our-story__img {
    flex-basis: 560px;
}

.about__our-story__img {
    position: relative;
}

.about__our-story__img-one, .about__our-story__img-two {
    position: absolute;
    width: 100%;
    height: 100%;
}

.about__our-story__img-one {
    background: no-repeat url("../assets/our-story1.png") top right 30%;
}

.about__our-story__img-two {
    background: no-repeat url("../assets/our-story2.png") top right 30%;
}


.about__our-story__story {
    box-sizing: border-box;
    padding: 0 25px;
}

</style>