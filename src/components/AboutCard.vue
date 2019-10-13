<template>
    <div class="bottom-cards">
        <div
                v-for="card of cards"
                :key="card.id"
                class="bottom-cards__item"
        >
            <div>
                <img class="gallery__image" :src="require(`@/assets/${card.pic}`)" alt="CEO">
            </div>
            <div class="about__card__info white-colored">
                <dl>
                    <dt class="about__card__dt font-lighter">{{ card.name }}</dt>
                    <dd class="about__card__dd text__regular-bold">{{ card.position }}</dd>
                </dl>
                <p class="text__common-p about__card__p">{{ card.info }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AboutCard",
        data() {
            return {
                cards: [
                    {id: 1, name: 'lian joy', position: 'CEO/Founder', pic: 'our-team3.png',
                    info: 'Lorem ipsum dolor sit amet, conse ctetuer adipi scing elit, sed diam nonu mmy nibh euis mod tinci'},
                    {id: 2, name: 'albert thanh', position: 'CEO/Founder', pic: 'our-team2.png',
                    info: 'Lorem ipsum dolor sit amet, conse ctetuer adipi scing elit, sed diam nonu mmy nibh euis mod tinci'},
                    {id: 3, name: 'jenn pereira', position: 'CEO/Founder', pic: 'our-team1.png',
                    info: 'Lorem ipsum dolor sit amet, conse ctetuer adipi scing elit, sed diam nonu mmy nibh euis mod tinci'}
                ]
            }
        }
    }
</script>

<style>
.about__card__info {
    padding: 30px 35px 25px;
}

.about__card__dt {
    font-size: 24px;
    color: #041608;
}

.about__card__dd {
    margin-top: 5px;
}

.about__card__p {
    margin: 10px 0 0;
}
</style>