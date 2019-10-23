<template>
    <div
            class="blog__single-post__backdrop modal__backdrop"
            @click.self="closePost"
    >
        <transition name="gal-images">
            <main
                    v-show="backShowed"
                    class="blog__single-post modal"
            >
                <span
                        class="blog__single-post__back-button"
                        @click="closePost"

                >&#10005;</span>

                <h2 class="blog__single-post__title font-lighter">I am a Blog Post with an Awesome Image</h2>
                <p class="blog__single-post__subtitle text__regular-bold">
                    <span>by Jenn Pereira</span>
                    <time datetime="28-02-2015" class="blog__single-post__date">February 28, 2015</time>
                    <span><LikeButton/>324 likes</span>
                </p>

                <img class="gallery__image blog__single-post__img" src="../assets/single-post-img.png" alt="Pic">

                <p class="blog__single-post__p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                    suscipit.</p>
                <p class="blog__single-post__p">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
                    molestie consequat, vel illum dolore
                    eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
                    luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta
                    nobis
                    eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
                <blockquote class="blog__single-post__quote">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam
                    rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                    sunt.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.
                </blockquote>
                <h3 class="blog__single-post__heading product__tags-title">This is a Heading</h3>
                <p class="blog__single-post__p">Typi non habent claritatem insitam; est usus legentis in iis qui facit
                    eorum claritatem. Investigationes
                    demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus
                    dynamicus,
                    qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc
                    putamus
                    parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.
                    Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                <p class="blog__single-post__p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
                    dolor
                    in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
                    at
                    vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis
                    dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue.</p>
                <p class="form__comment-heading">leave a comment</p>
                <form class="form__comment-container" action="" method="post">

                    <div class="form__top-field-container">

                        <label class="comment__form__top-field">
                            <input type="text" name="name" class="form-field form__input-field" placeholder="Name">
                        </label>
                        <label class="comment__form__top-field">
                            <input type="email" name="mail" class="form-field form__input-field" placeholder="Email">
                        </label>
                        <label class="comment__form__top-field">
                            <input type="url" name="website" class="form-field form__input-field" placeholder="Website">
                        </label>

                    </div>

                    <label class="form__mid-field">
                        <textarea name="message" class="form-field form__textarea-field" placeholder="Message"
                                  cols="111"
                                  rows="5"></textarea>
                    </label>
                    <input type="submit" value="send message" class="form__submit-button form__submit-button_center">
                </form>
            </main>
        </transition>
    </div>
</template>

<script>
import LikeButton from '@/components/LikeButton.vue'

export default {
    name: "BlogPostFull",
    props: ['backShowed'],
    components: {
        LikeButton
    },
    methods: {
        closePost() {
            this.$store.commit('hidePost');
            this.$store.commit('hideModal');
            this.$emit('reset-back');
            this.$router.go(-1);
        }
    }
}
</script>

<style>
.blog__single-post {
    display: flex;
    max-width: 945px;
    min-height: 1910px;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    background-color: #fafafa;
}

.blog__single-post__back-button {
    position: absolute;
    left: 0;
    top: 20px;
    font-size: 32px;
    color: #bbbaba;
    cursor: pointer;
}

.blog__single-post__title {
    font-size: 30px;
    margin-top: 30px;
    text-align: center;
    color: #333333;
    letter-spacing: 0.28rem;
}

.blog__single-post__subtitle {
    font-size: inherit;
    margin: 20px 0;
}

.blog__single-post__date {
    margin: 0 21px 0 63px;
}

.blog__single-post__p {
    margin: 15px 67px;
    line-height: 2.15;
    letter-spacing: 0.022rem;
    text-transform: initial;
}

.blog__single-post__img {
    margin-bottom: 20px;
}

.blog__single-post__quote {
    text-transform: initial;
    padding: 17px 10px 20px 40px;
    margin: 18px 0;
    border: 1px #e1e1e1 solid;
    border-left: 4px #c8c8c8 solid;
    font-family: PT serif;
    font-size: 18px;
    font-weight: bold;
    font-style: italic;
    line-height: 1.91rem;
}

.blog__single-post__heading {
    align-self: flex-start;
    margin: 20px 0 10px 67px;
}

.form__comment-heading {
    font-size: 20px;
    margin: 60px 0 40px;
    letter-spacing: 0.288rem;
    color: #000000;
}

.form__comment-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.blog__single-post__backdrop {
    background-color: rgba(250, 250, 250, 0.99);
}

.comment__form__top-field {
    display: block;
    width: 32%;
}

</style>