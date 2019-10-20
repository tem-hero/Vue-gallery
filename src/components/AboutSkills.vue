<template>
    <div
            class="about__skills__container"
            ref="skills"
            :class="{ 'skills-opacity': !animationStarted }">
        <div
                v-for="skill of skills"
                :key="skill.id"
                class="about__skills__item">

            <p class="about__skills__title text__regular-bold">{{ skill.title }}</p>

            <div
                    class="skills__progress-container"
                    :class="{ 'skills-opacity': !animationStarted }">

                <div
                        class="skills__progress-value"
                        :style="{ width: skill.startValue + '%' }"
                        :class="{ 'skills-opacity': !animationStarted }"
                >
                    <span
                            class="skills__value-pseudo"
                    >{{ skill.currentValue }}%</span>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutSkills",
    data() {
        return {
            skills: [
                {id: 1, title: 'Photoshop', value: 90, startValue: 0, currentValue: 0},
                {id: 2, title: 'Branding', value: 95, startValue: 0, currentValue: 0},
                {id: 3, title: 'Photography', value: 50, startValue: 0, currentValue: 0},
                {id: 4, title: 'Web Design', value: 85, startValue: 0, currentValue: 0}
            ],
            animationStarted: false
        }
    },
    methods: {
        checkView() {
            if (this.animationStarted) return;

            let scrollY = pageYOffset;
            let currentScroll = document.documentElement.clientHeight + scrollY;
            let elementPosition = this.$refs.skills.getBoundingClientRect().bottom + scrollY;

            if (currentScroll > elementPosition) this.startAnimation();
        },
        startAnimation() {
            this.animationStarted = true;

            this.skills.forEach((item, index) => {
                item.startValue = item.value;
                this.animateNumbers(index);
            });
        },
        animateNumbers(index) {
            if (this.skills[index].currentValue < this.skills[index].value) {
                this.skills[index].currentValue++;
                setTimeout(this.animateNumbers, Math.round(5000 / this.skills[index].value), index);
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.checkView);
    },
    destroyed() {
        window.removeEventListener('scroll', this.checkView);
    }
}
</script>

<style>
.about__skills__container {
    transition: opacity .2s;
}

.about__skills__item {
    margin-top: 30px;
}

.skills__progress-container {
    display: flex;
    width: 100%;
    height: 10px;
    padding: 0 3px;
    align-items: center;
    background-color: #ebebeb;
    transition: width 2.5s;
}

.skills-opacity {
    opacity: 0;
    width: 0;
}

.skills__progress-value {
    position: relative;
    height: 2px;
    background-color: #a1a1a1;
    transition: width 5s, opacity 2s ease-out;
}

.skills__progress-value::after {
    content: '';
    position: absolute;
    right: -5px;
    top: -5px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    border: 4px solid #000000;
    background-color: #ffffff;
}

.skills__value-pseudo {
    position: absolute;
    right: -39px;
    top: -40px;
    padding: 3px 9px;
    font-size: 12px;
    background-color: #000000;
    color: #ffffff;
}

.skills__value-pseudo::before {
    content: '';
    position: absolute;
    left: -3px;
    bottom: -4px;
    border: 5px solid transparent;
    border-top: 0;
    border-bottom-color: #000000;
    transform: rotate(-45deg);
}

.about__skills__title {
    margin-bottom: 12px;
    color: #000000;
}

</style>