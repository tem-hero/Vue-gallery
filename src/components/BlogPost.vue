<template>
    <article class="blog__post">
        <div v-if="post.image"><img class="blog__post__img" :src="getImgUrl(post.imgSrc)" alt="Image"></div>
        <section class="blog__post__section">
            <span class="wordpress" v-if="post.wordpress">wordpress</span>
            <h2 class="blog__post__title">{{ post.title }}</h2>
            <p class="blog__post__author">by {{ post.author }}</p>
            <p class="blog__post__content">{{ post.content }}</p>
            <time :datetime="post.date" class="blog__post__date">{{ setDate(post.date) }}</time>
            <span class="post-icons"><i class="fa fa-share-alt-square" aria-hidden="true"></i><i class="fa fa-heart" aria-hidden="true"></i></span>
        </section>
    </article>
</template>

<script>
function formatDate(d) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let year = d.getFullYear();
    let date = d.getDate();
    let month = months[d.getMonth()];
    return `on ${month} ${date}, ${year}`
}

export default {
    name: "BlogPost",
    props: ['post'],
    data() {
        return {}
    },
    methods: {
        setDate(str) {
            let dates = str.split('-');
            let date = new Date(+dates[0], dates[1] - 1, +dates[2]);
            return formatDate(date);
        },
        getImgUrl(src) {
            if (src.startsWith('http')) return src;
            return require(`@/assets/${src}`);
        }
    }
}
</script>

<style scoped>
.blog__post {
    margin-top: 30px;
}

.blog__post__section {
    padding: 30px 40px;
    height: auto;
    position: relative;
    text-transform: none;
    background-color: white;
}

.blog__post__title {
    font-size: 20px;
    font-weight: bold;
    color: #333333;
    text-transform: initial;
}

.blog__post__author {
    font-size: 13px;
    color: #cccccc;
    font-weight: bold;
    margin: 10px 0 0;
}

.blog__post__content {
    line-height: 1.75em;
    margin: 30px 0 20px;
}

.blog__post__date {
    /*display: inline-block;*/
    font-size: 13px;
    color: #9a9a9a;
    margin: 20px 0 0;
}

.blog__post__img {
    width: 100%;
}

.wordpress {
    display: inline-block;
    margin-bottom: 20px;
}
</style>