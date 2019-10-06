<template>
    <div class="about__cards">
        <div v-for="card of cards" :key="card.id">
            <div><img :src="require(`@/assets/${card.pic}`)" alt="CEO"></div>
            <div>
                <dl>
                    <dt>{{ card.name }}</dt>
                    <dd>{{ card.position }}</dd>
                </dl>
                <p>{{ card.info }}</p>
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

</style>