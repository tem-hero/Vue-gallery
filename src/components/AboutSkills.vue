<template>
    <div>
        <div v-for="skill of skills" :key="skill.id" class="about__skills__item">
            <p>{{ skill.title }}</p>
            <div class="skills__progress-container">
                <div class="skills__progress-value" :style="{ width: skill.startValue + '%' }">
                    <span class="skills__value-pseudo">{{ skill.currentValue }}%</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
function scrollEventFunction() {
    if (this.animationStarted) return;
    if (pageYOffset > 230) this.startAnimation();
}

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
        animateNumbers(index) {
            if (this.skills[index].currentValue < this.skills[index].value) {
                this.skills[index].currentValue++;
                setTimeout(this.animateNumbers, Math.round(5000 / this.skills[index].value), index);
            }
        },
        startAnimation() {
            this.animationStarted = true;
            window.removeEventListener('scroll', scrollEventFunction);
            this.skills.forEach((item, index) => {
                item.startValue = item.value;
                this.animateNumbers(index);
            });
        }
    },
    mounted() {
        window.addEventListener('scroll', scrollEventFunction.bind(this));
    }
}
</script>

<style scoped>
.about__skills__item {
    margin-top: 30px;
}

.skills__progress-container {
    display: flex;
    width: 100%;
    height: 15px;
    align-items: center;
    background-color: #f1f1f1;
}

.skills__progress-value {
    position: relative;
    height: 5px;
    background-color: black;
    transition: width 5s ease;
    /*animation: skillsAnimation 4s ease;*/
}

.skills__progress-value::after {
    content: '';
    position: absolute;
    right: -5px;
    top: -3px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid grey;
    background-color: white;
}

.skills__value-pseudo {
    position: absolute;
    right: -43px;
    top: -45px;
    padding: 3px 7px;
    background-color: black;
    color: white;
}

.skills__value-pseudo::before {
    content: '';
    position: absolute;
    left: -6px;
    bottom: -8px;
    border: 10px solid transparent;
    border-top: 0;
    border-bottom-color: black;
    transform: rotate(-45deg);
}

/*@keyframes skillsAnimation {*/
/*    from {width: 0}*/
/*}*/

/*.progression-enter-active {*/
/*    transition: width 4s ease;*/
/*}*/

/*.progression-enter {*/
/*    width: 0;*/
/*}*/
</style>