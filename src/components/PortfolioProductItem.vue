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
                <span>{{ product.likes }} likes</span>
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
.portfolio__column-left {
    flex-basis: 550px;
}

.product__title {
    font-size: 30px;
    font-weight: normal;
    letter-spacing: 0.28rem;
    color: #000000;
}

.product__subtitle {
    margin-top: 7px;
    color: #555555;
}

.portfolio__line {
    margin: 30px 0;
    color: #cccccc;
}

.product__body {
    text-transform: initial;
}

.product__date {
    font-weight: bold;
    color: #555555;
}

.product__main-text {
    line-height: 2.25;
}

.product__tags-title {
    font-size: 16px;
    font-weight: bold;
    color: #333333;
}

.product__tags {
    font-size: 16px;
    text-transform: initial;
    margin: 10px 0;
    color: #999999;
}
</style>