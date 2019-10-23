<template>
    <div class="blog">
        <transition
                name="fade"
                @after-enter="isBackShowed = true">
            <router-view
                    v-if="$store.state.isPostShowed"
                    :backShowed="isBackShowed"
                    @reset-back="isBackShowed = false"
            />
        </transition>
        <div class="top-heading-container_blog">
            <div class="container_center top-heading">
                <h1 class="heading-font font-lighter"><span>news about lian</span></h1>
                <p class="heading-font__add heading-font__add-two font-lighter">latest news & insights</p>
            </div>
        </div>

        <div class="blog-container container_center">
            <LianBlog/>
            <BlogSidebar/>
        </div>
    </div>
</template>

<script>
import LianBlog from '@/components/LianBlog.vue'
import BlogSidebar from '@/components/BlogSidebar.vue'

export default {
    name: 'Blog',
    data() {
        return {
            isBackShowed: false
        }
    },
    components: {
        LianBlog,
        BlogSidebar
    }
}
</script>

<style>
.top-heading-container_blog {
    background: #f6f6f8 no-repeat url("../assets/blog_heading.png") 60% 47%;
}

.blog-container {
    display: flex;
    justify-content: space-between;
}

</style>