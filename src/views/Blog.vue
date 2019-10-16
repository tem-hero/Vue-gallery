<template>
    <div class="blog">
        <transition name="modal">
            <router-view
                    v-if="modalPostShow"
                    @close-post="closeModal"
            />
        </transition>
        <div class="top-heading-container_blog">
            <div class="container_center top-heading">
                <h1 class="heading-font font-lighter"><span>news about lian</span></h1>
                <p class="heading-font__add heading-font__add-two font-lighter">latest news & insights</p>
            </div>
        </div>

        <div class="blog-container container_center">
            <LianBlog @open-post="showModal"/>
            <BlogSidebar/>
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
.top-heading-container_blog {
    background: #f6f6f8 no-repeat url("../assets/blog_heading.png") 60% 47%;
}

.blog {
    /*margin-top: 10px;*/
}

.blog-container {
    display: flex;
    justify-content: space-between;
}

.modal-enter-active, .modal-leave-active {
    transition: opacity .4s, transform .1s;
}

.modal-enter, .modal-leave-to {
    opacity: 0;
    transform: scale(0.95, 0.98);
}
</style>