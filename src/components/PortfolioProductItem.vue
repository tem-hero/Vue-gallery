<template>
    <div class="portfolio-column-left">
        <h2>{{ product.title }}</h2>
        <p>{{ product.subtitle }}</p>
        <hr class="portfolio__line">

        <article class="portfolio-article">
            <p class="article-date">
                <time
                        :datetime="product.date">
                    {{ setDate(product.date) }}
                </time>

                <span>{{ product.likes }} likes</span>
            </p>
            <p>{{ product.info }}</p>
        </article>

        <hr class="portfolio__line">

        <section>
            <p class="tags">role on project:</p>
            <p class="tags-desc">{{ makeStringFromArr(product.roles) }}</p>
            <p class="tags">tags:</p>
            <p class="tags-desc">{{ makeStringFromArr(product.tags) }}</p>
        </section>
    </div>
</template>

<script>
import setDate from '@/components/setDate.vue'

export default {
    name: "PortfolioProductItem",
    props: ['product'],
    mixins: [setDate],
    methods: {
        makeStringFromArr(arr) {
            return arr.join(', ');
        }
    }
}
</script>

<style>
.portfolio__line {
    margin: 30px 0;
}
</style>