<template>
    <div class="portfolio__column-left">

        <h2 class="product__title">{{ product.title }}</h2>
        <p class="product__subtitle text__regular-bold">{{ product.subtitle }}</p>

        <hr class="portfolio__line">

        <article class="product__body">
            <p class="product__date">
                <time
                        :datetime="product.date"

                >{{ setDate(product.date) }}</time>
                <LikeButton><template>{{ product.likes }} likes</template></LikeButton>
            </p>

            <p class="product__main-text text__common-p">{{ product.info }}</p>
        </article>

        <hr class="portfolio__line">

        <section>
            <p class="product__tags-title">role on project:</p>
            <p class="product__tags">{{ makeStringFromArr(product.roles) }}</p>
            <p class="product__tags-title">tags:</p>
            <p class="product__tags">{{ makeStringFromArr(product.tags) }}</p>
        </section>
    </div>
</template>

<script>
import setDate from '@/components/setDate.vue'
import LikeButton from '@/components/LikeButton.vue'

export default {
    name: "PortfolioProductItem",
    props: ['product'],
    mixins: [setDate],
    components: {
        LikeButton
    },
    methods: {
        makeStringFromArr(arr) {
            return arr.join(', ');
        }
    }
}
</script>

<style>
.portfolio__column-left {
    flex-basis: 550px;
}

</style>