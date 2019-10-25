<template>
    <article class="blog__post">
        <div v-if="post.video">
            <iframe :src="getVideoUrl(post.video)" width="360" height="203" frameborder="0" allow="fullscreen" allowfullscreen></iframe>
        </div>

        <div v-else>
            <div
                    v-if="post.image"
            ><img
                    :src="require(`@/assets/${post.imgSrc}`)"
                    class="gallery__image"
                    alt="Image"
            ></div>

            <section
                    class="blog__post__section white-colored"
                    :class="{ 'blog__post__transparent': post.imageHover }"
            >
                <div
                        v-if="post.imageHover"
                ><img
                        :src="require(`@/assets/${post.imgSrc}`)"
                        alt="Background"
                        class="blog__post__image-hover gallery__image"
                ></div>

                <span
                        v-if="post.blackSpanText"
                        class="blog__post__wordpress black-span"
                >{{ post.blackSpanText }}</span>

                <router-link to="/blog/post">
                    <h2
                            class="blog__post__title"
                            @click="showPost"

                    >{{ post.title }}</h2>
                </router-link>
                <p class="blog__post__author"><i class="fas fa-user"></i> by {{ post.author }}</p>

                <router-link to="/blog/post">
                    <p
                            class="blog__post__content text__common-p"
                            @click="showPost"

                    >{{ post.content }}</p>
                </router-link>

                <time
                        :datetime="post.date"
                        class="blog__post__date"

                ><i class="far fa-calendar"></i> on {{ setDate(post.date) }}
                </time>
                <span class="blog__post__icons"><i class="fas fa-share-alt"></i><i class="fas fa-heart"></i></span>
            </section>
        </div>
    </article>
</template>

<script>
import setDate from '@/components/setDate.vue'

export default {
    name: "BlogPost",
    props: ['post'],
    mixins: [setDate],
    methods: {
        showPost() {
            this.$store.commit('showModal');
            this.$store.commit('showPost');
        },
        getVideoUrl(url) {
            return url + '?title=0&byline=0&portrait=0';
        }
    }
}
</script>

<style>
.blog__post {
    margin-top: 30px;
}

.blog__post__section {
    position: relative;
    height: auto;
    padding: 30px 40px 40px;
    text-transform: none;
}

.blog__post__title {
    font-size: 20px;
    color: #333333;
}

.blog__post__author {
    font-size: 13px;
    color: #cccccc;
    font-weight: bold;
    margin: 10px 0 0;
}

.blog__post__content {
    line-height: 1.75;
}

.blog__post__date {
    font-size: 13px;
    color: #9a9a9a;
}

.far.fa-calendar, .fas.fa-user {
    margin-right: 3px;
}

.blog__post__icons {
    position: absolute;
    right: 37px;
    color: #cccccc;
    cursor: default;
}

.blog__post__icons .fa-heart {
    margin-left: 22px;
}

.blog__post__wordpress {
    margin-bottom: 20px;
    text-transform: uppercase;
}

.blog__post__image-hover {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}

.blog__post__transparent {
    background-color: rgba(0, 0, 0, 0);
    overflow: hidden;
}

.blog__post__transparent:hover {
    background-color: rgba(0, 0, 0, 0.85);
}

.blog__post__transparent:hover .blog__post__title {
    color: #ffffff;
}
</style>