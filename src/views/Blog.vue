<template>
    <div class="blog">
<!--        <PageHeading></PageHeading>-->
        <div class="blog-container container_center">
            <LianBlog class="posts-section"></LianBlog>
            <div></div>
<!--            <BlogSidebar></BlogSidebar>-->
        </div>
    </div>
</template>

<script>
    import LianBlog from '@/components/LianBlog.vue'

    export default {
        name: 'Blog',
        components: {
            LianBlog
        }
    }
</script>

<style>
.blog-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    /*grid-template-columns: repeat(3, 1fr);*/
    grid-column-gap: 30px;
}

.posts-section {
    grid-column: 1 / 3;
    grid-column-gap: 30px;
}
</style>