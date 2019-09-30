<template>
    <aside>
        <BlogSearch></BlogSearch>
        <BlogRecentPosts></BlogRecentPosts>
        <BlogPopTags></BlogPopTags>
        <BlogInstagram></BlogInstagram>
    </aside>
</template>

<script>
import BlogSearch from '@/components/BlogSearch.vue'
import BlogRecentPosts from '@/components/BlogRecentPosts.vue'
import BlogPopTags from '@/components/BlogPopTags.vue'
import BlogInstagram from '@/components/BlogInstagram.vue'

export default {
    name: "BlogSidebar",
    components: {
        BlogSearch,
        BlogRecentPosts,
        BlogPopTags,
        BlogInstagram
    }
}
</script>

<style>
.blog__aside-head {
    display: block;
    position: relative;
    text-align: center;
    padding: 8px 0;
    margin-top: 25px;
    background-color: #ebebeb;
    cursor: default;
}

.blog__aside-head:before {
    content: "";
    border: solid transparent;
    position: absolute;
    top: 100%;
    left: 50%;
    border-top-color: #ebebeb;
    border-width: 7px;
    margin-left: -7px;
}
</style>

<style scoped>

</style>