<template>
    <div class="blog__single-post__backdrop modal__backdrop">
        <main class="blog__single-post modal container_center">
            <span
                    @click="closePost"
                    class="blog__single-post__back-button">&#10005;</span>

            <h2>I am a Blog Post with an Awesome Image</h2>
            <p class="post-details">
                <span>by Jenn Pereira</span>
                <time datetime="28-02-2015">February 28, 2015</time>
                <span>324 likes</span>
            </p>
            <div><img src="../assets/single-post-img.png" alt="Pic"></div>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.</p>
            <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore
                eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
                luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis
                eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
            <blockquote>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.
            </blockquote>
            <h3>This is a Heading</h3>
            <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes
                demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus,
                qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus
                parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.
                Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at
                vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis
                dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue.</p>
            <p class="heading-font">leave a comment</p>
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
                        <textarea name="message" class="form-field form__textarea-field" placeholder="Message" cols="111"
                                  rows="5"></textarea>
                </label>
                <input type="submit" value="send message" class="form__submit-button form__submit-button_center">
            </form>
            <!--<section class="comment-section">

            </section>-->
        </main>
    </div>
</template>

<script>
export default {
    name: "BlogPostFull",
    methods: {
        closePost() {
            this.$emit('close-post');
            this.$router.go(-1);
        }
    }
}
</script>

<style>
.form__comment-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.blog__single-post__backdrop {
    /*display: flex;
    justify-content: center;
    align-items: center;*/
    background-color: rgba(250, 250, 250, 0.8);
}

.blog__single-post {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fafafa;
}

.blog__single-post__back-button {
    position: absolute;
    left: 20px;
    top: 20px;
    padding: 10px;
    cursor: pointer;
}

.comment__form__top-field {
    display: block;
    width: 32%;
}
</style>