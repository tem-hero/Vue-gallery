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

        <hr class="portfolio__line_bottom">

        <div>
            <p class="product__tags-title">role on project:</p>
            <p class="product__tags">{{ makeStringFromArr(product.roles) }}</p>
        </div>

        <div class="portfolio__bottom-tags-container">
            <p class="product__tags-title">tags:</p>
            <p class="product__tags">{{ makeStringFromArr(product.tags) }}</p>
        </div>

        <div class="portfolio__socials-share"><span class="portfolio__share-button"><i class="fas fa-share-alt"></i> share</span>
            <span class="portfolio__socials-container"><a

                    v-for="item of socials"
                    :key="item.id"
                    :href="item.socialLink"
                    class="portfolio__socials__item"
                    @click.prevent

            ><i :class="item.html"></i></a></span>
        </div>
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
    data() {
        return {
            socials: ''
        }
    },
    methods: {
        makeStringFromArr(arr) {
            return arr.join(', ');
        }
    },
    created() {
        this.socials = this.$store.state.socials;
    }
}
</script>

<style>
.portfolio__column-left {
    flex-basis: 550px;
}

.portfolio__line_bottom {
    margin: 42px 0;
}

.portfolio__bottom-tags-container {
    margin-top: 58px;
}

.portfolio__socials-share {
    margin-top: 62px;
}

.portfolio__share-button {
    padding: 13px 10px;
    border-radius: 2px;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 0.05rem;
    color: #ffffff;
    background-color: #707070;
    cursor: default;
}

.fas.fa-share-alt {
    margin-right: 2px;
    font-size: 12px;
}

.portfolio__socials-container {
    position: relative;
    padding: 12px 1px;
    margin-left: 15px;
    border-radius: 2px;
    background-color: #e1e1e1;
}

.portfolio__socials-container::before {
    content: "";
    position: absolute;
    border: solid transparent;
    top: 12px;
    left: 0;
    border-right-color: #e1e1e1;
    border-width: 7px;
    margin-left: -14px;
}

.portfolio__socials__item {
    margin: 0 13px;
    font-size: 13px;
    color: #707070;
}
</style>