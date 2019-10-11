<template>
    <div class="blog">
        <router-view
                v-if="modalPostShow"
                @close-post="closeModal"/>

        <!--        <PageHeading></PageHeading>-->

        <div class="blog-container container_center">
            <LianBlog
                    @open-post="showModal"
                    class="posts-section"
            ></LianBlog>

            <BlogSidebar></BlogSidebar>
        </div>
    </div>
</template>

<script>
import LianBlog from '@/components/LianBlog.vue'
import BlogSidebar from '@/components/BlogSidebar.vue'

export default {
    name: 'Blog',
    components: {
        LianBlog,
        BlogSidebar
    },
    data() {
        return {
            modalPostShow: true
        }
    },
    methods: {
        showModal() {
            this.$root.$emit('modal-showed');
            this.modalPostShow = true;
        },
        closeModal() {
            this.$root.$emit('modal-closed');
            this.modalPostShow = false;
        },
    }
}
</script>

<style>
.blog {
    margin-top: 10px;
}

.blog-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    grid-column-gap: 30px;
}

.posts-section {
    grid-column: 1 / 3;
    grid-column-gap: 30px;
}

/*.blog__single-post-view {
    position: absolute;
}*/
</style>