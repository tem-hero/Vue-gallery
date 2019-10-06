<template>
    <div class="about">
<!--        <PageHeading></PageHeading>-->
        <main class="container_center">
            <div class="about__our-story">
                <div class="about__our-story__img"><img src="../assets/our-story1.png" alt="Team"></div>
                <section class="about__our-story__story">
                    <h2 class="heading-font__add">our story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                        ut
                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                        tation
                        ullamcorper suscipit.</p>
                    <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim
                        placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui
                        facit
                        eorum claritatem.</p>
                </section>
                <section class="about__our-story__skills">
                    <h2 class="heading-font__add">our skills</h2>
                    <about-skills></about-skills>
                </section>
            </div>
            <section class="about__awesome-team__container">
                <h2>awesome team</h2>
                <p class="about__awesome-team__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit.</p>
            </section>
            <about-card></about-card>
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
    }
}
</script>

<style>
.about__our-story__img {
    grid-area: img;
}

.about__our-story__story {
    grid-area: story;
}

.about__our-story__skills {
    grid-area: skills;
}

.about__our-story {
    display: grid;
    grid-template: "img story" minmax(250px, auto)
                   "img skills" auto
                    / 1fr 1fr;
    margin-top: 72px;
}

</style>