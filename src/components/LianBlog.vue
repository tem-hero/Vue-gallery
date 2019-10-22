<template>
    <main class="blog-section">

        <transition-group
                name="gal-images"
                tag="div"
                class="blog__row"
        >
            <BlogPost
                    v-for="post of rows[0]"
                    :key="post.id"
                    :post="post"
                    v-on="$listeners"
            />
        </transition-group>
        <transition-group
                name="gal-images"
                tag="div"
                class="blog__row"
        >
            <BlogPost
                    v-for="post of rows[1]"
                    :key="post.id"
                    :post="post"
                    v-on="$listeners"
            />
        </transition-group>
        <div
                class="load-button-container load-button-container__grid-center"
                @click.prevent="loadPosts"
        >
            <transition name="gal-button">
                <div
                        v-if="showButton"
                        key="button"
                        class="load-button"

                    ><a href="#">load moar</a>
                </div>
                <div
                        v-else
                        key="loader"
                        class="lds-facebook"
                ><div></div><div></div><div></div></div>
            </transition>
        </div>
    </main>
</template>

<script>
import BlogPost from '@/components/BlogPost.vue'
import getRandomIntInclusive from '@/components/getRandomIntInclusive'

function PostObj(post, ctx) {
    this.title = post.title;
    this.content = post.body;
    this.author = 'Jenn Pereira';
    this.date = generateDate(new Date());
    this.id = ctx.allPosts.length + 1;
}

function generateDate(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

export default {
    name: "LianBlog",
    components: {
        BlogPost
    },
    data() {
        return {
            allPosts: [
                {id: 1, title: 'I am a Blog Post Title', author: 'Jenn Pereira', date: '2016-07-19', blackSpanText: 'wordpress',
                content: 'Phasellus et nisl tellus. Etiam facilisis eu nisi scelerisque faucibus. Proin semper suscipit magna, nec imperdiet lacus semper vitae. Sed hendrerit enim non justo posuere placerat eget purus mauris. Etiam facilisis eu nisi scelerisque faucibus...'},
                {id: 2, title: 'I am a Blog Post with an Awesome Image', author: 'Jenn Pereira', date: '2016-07-19', image: true, imgSrc: 'blog-image1.png',
                content: 'Proin semper suscipit magna, nec imperdiet lacus semper vitae. Sed hendrerit enim non justo posuere placerat eget purus mauris...'},
                {id: 3, title: 'I am a Blog Post with an Awesome Image', author: 'Jenn Pereira', date: '2016-07-19', image: true, imgSrc: 'blog-image3.png',
                content: 'Proin semper suscipit magna, nec imperdiet lacus semper vitae. Sed hendrerit enim non justo posuere placerat eget purus mauris...'},
                {id: 4, video: 'https://player.vimeo.com/video/117159756'},
                {id: 5, title: 'I am a Blog Post Title', author: 'Jenn Pereira', date: '2016-07-19', blackSpanText: 'image hover', imageHover: true, imgSrc: 'blog-image4.png',
                content: 'Phasellus et nisl tellus. Etiam facilisis eu nisi scelerisque faucibus. Proin semper suscipit magna, nec imperdiet lacus semper...'},
                {id: 6, title: 'I am a Blog Post with an awesome Image', author: 'Jenn Pereira', date: '2016-07-19', image: true, imgSrc: 'blog-image2.png',
                content: 'Proin semper suscipit magna, nec imperdiet lacus semper vitae. Sed hendrerit enim non justo posuere placerat eget purus mauris...'}
            ],
            rows: [
                [], []
            ],
            showButton: true
        }
    },
    methods: {
        async loadPosts() {
            this.showButton = false;
            let response = await fetch('https://jsonplaceholder.typicode.com/posts');
            let posts = await response.json();
            let ctx = this;

            for (let i = 0; i < 5; i++) {
                let post = posts[getRandomIntInclusive(0, 90)];
                let postObj = new PostObj(post, ctx);
                this.allPosts.push(postObj);
            }

            this.fillBlog(this.allPosts.length - 5);
            setTimeout(() => this.showButton = true, 500);
        },
        fillBlog(postsCount = 0) {
            for (let i = postsCount; i < this.allPosts.length; i++) {
                this.rows[i % 2].push(this.allPosts[i]);
            }
        }
    },
    mounted() {
        this.fillBlog();
    }
}
</script>

<style>
.blog-section {
    position: relative;
    display: flex;
    flex-basis: 750px;
    margin-bottom: 180px;
    justify-content: space-between;
}

.blog__row {
    flex-basis: 360px;
}

.load-button-container__grid-center {
    position: absolute;
    bottom: -155px;
    left: calc(50% - 62px);
    width: 124px;
}

</style>