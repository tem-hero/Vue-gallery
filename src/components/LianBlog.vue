<template>
    <main class="blog-section">
        <div class="blog__row">
            <BlogPost
                v-for="post of rows[0]"
                :key="post.id"
                :post="post"
            ></BlogPost>
        </div>
        <div class="blog__row">
            <BlogPost
                v-for="post of rows[1]"
                :key="post.id"
                :post="post"
            ></BlogPost>
        </div>
    </main>
</template>

<script>
import BlogPost from '@/components/BlogPost.vue'

export default {
    name: "LianBlog",
    components: {
        BlogPost
    },
    data() {
        return {
            allPosts: [
                {id: 1, title: 'I am a Blog Post Title', author: 'Jenn Pereira', date: '2016-07-19',
                content: 'Phasellus et nisl tellus. Etiam facilisis eu nisi scelerisque faucibus. Proin semper suscipit magna, nec imperdiet lacus semper vitae. Sed hendrerit enim non justo posuere placerat eget purus mauris. Etiam facilisis eu nisi scelerisque faucibus...'},
                {id: 2, title: 'I am a Blog Post with an Awesome Image', author: 'Jenn Pereira', date: '2016-07-19',
                content: 'Proin semper suscipit magna, nec imperdiet lacus semper vitae. Sed hendrerit enim non justo posuere placerat eget purus mauris...'},
                {id: 3, title: 'I am a Blog Post Title', author: 'Jenn Pereira', date: '2016-07-19',
                content: 'Phasellus et nisl tellus. Etiam facilisis eu nisi scelerisque faucibus. Proin semper suscipit magna, nec imperdiet lacus semper...'},
                {id: 4, title: 'I am a Blog Post with an awesome Image', author: 'Jenn Pereira', date: '2016-07-19',
                content: 'Proin semper suscipit magna, nec imperdiet lacus semper vitae. Sed hendrerit enim non justo posuere placerat eget purus mauris...'},
                {id: 5, title: 'I am a Blog Post with an Awesome Image', author: 'Jenn Pereira'}
            ],
            rows: [
                [], []
            ]
        }
    },
    mounted() {
        let i = 0;
        for (let post of this.allPosts) {
            this.rows[i % 2].push();
            i++;
        }
    }
}
</script>

<style scoped>
.blog-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));;
}
</style>