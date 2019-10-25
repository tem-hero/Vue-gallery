<template>
    <div>
        <span class="heading-font__add blog__aside-head font-lighter">recent posts</span>
        <div class="recent-posts-container white-colored">

            <div
                    v-for="post of recentPosts"
                    :key="post.id"
                    class="recent-posts__post text__regular-bold"
            >
                <div class="recent-posts__img"><img
                        :src="require(`@/assets/${post.imgSrc}`)"
                        class="gallery__image"
                        alt="Side image"
                ></div>
                <div class="recent-posts__text-row">
                    <p class="recent-posts__text-p">{{ post.title }}</p>
                    <time
                            :datetime="post.date"
                            class="recent-posts__text-date font-lighter"

                    >{{ setDate(post.date) }}</time>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import setDate from '@/components/setDate.vue'

export default {
    name: "BlogRecentPosts",
    data() {
        return {
            recentPosts: [
                {id: 1, title: 'Lorem ipsum dolor sit amet, consec', date: '2016-07-05', imgSrc: 'sidebar1.png'},
                {id: 2, title: 'Ut wisi enim ad minim veniam, quis', date: '2016-07-17', imgSrc: 'sidebar2.png'},
                {id: 3, title: 'Aliquip ex ea commodo aliquam erat volutpat', date: '2016-07-21', imgSrc: 'sidebar3.png'},
                {id: 4, title: 'Ut wisi enim ad minim veniam, quis', date: '2016-07-17', imgSrc: 'sidebar4.png'}
            ]
        }
    },
    mixins: [setDate]
}
</script>

<style>
.recent-posts-container {
    box-sizing: border-box;
    padding: 7px 27px 27px;
}

.recent-posts__post {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
}

.recent-posts__img {
    flex-basis: 90px;
}

.recent-posts__text-row {
    flex-basis: 202px;
}

.recent-posts__text-p {
    margin-bottom: 8px;
    color: #3d3d3d;
    cursor: pointer;
}

.recent-posts__text-date {
    font-size: 13px;
}
</style>