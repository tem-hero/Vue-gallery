<template>
    <div>
        <span class="heading-font__add blog__aside-head">recent posts</span>
        <div class="recent-posts-container white-colored">
            <div v-for="post of recentPosts" :key="post.id" class="recent-posts__post">
                <div><img :src="require(`@/assets/${post.imgSrc}`)" alt="Side image"></div>
                <div>
                    <p>{{ post.title }}</p>
                    <time :datetime="post.date">{{ setDate(post.date) }}</time>
                </div>
            </div>
        </div>
        <!--<div class="side-post">
            <div>
                <div><img src="files/sidebar1.png" alt="Side"></div>
                <div class="side-textbox">
                    <p>Lorem ipsum dolor sit amet, consec</p>
                    <time datetime="05-07-2016">July 5, 2016</time>
                </div>
            </div>
            <div>
                <div><img src="files/sidebar2.png" alt="Side"></div>
                <div class="side-textbox">
                    <p>Ut wisi enim ad minim veniam, quis</p>
                    <time datetime="17-07-2016">July 17, 2016</time>
                </div>
            </div>
            <div>
                <div><img src="files/sidebar3.png" alt="Side"></div>
                <div class="side-textbox">
                    <p>Aliquip ex ea commodo aliquam erat volutpat</p>
                    <time datetime="21-07-2016">July 21, 2016</time>
                </div>
            </div>
            <div>
                <div><img src="files/sidebar4.png" alt="Side"></div>
                <div class="side-textbox">
                    <p>Ut wisi enim ad minim veniam, quis</p>
                    <time datetime="17-07-2016">July 17, 2016</time>
                </div>
            </div>
        </div>-->
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
                {id: 2, title: 'p>Ut wisi enim ad minim veniam, quis', date: '2016-07-17', imgSrc: 'sidebar2.png'},
                {id: 3, title: 'Aliquip ex ea commodo aliquam erat volutpat', date: '2016-07-21', imgSrc: 'sidebar3.png'},
                {id: 4, title: 'Ut wisi enim ad minim veniam, quis', date: '2016-07-17', imgSrc: 'sidebar4.png'}
            ]
        }
    },
    mixins: [setDate]
}
</script>

<style scoped>
.recent-posts-container {
    box-sizing: border-box;
    padding: 7px 27px 27px;
}

.recent-posts__post {
    display: grid;
    grid-template-columns: 90px auto;
    grid-column-gap: 15px;
    margin-top: 20px;
}

.recent-posts__post p {
    margin-bottom: 11px;
}

</style>