<template>
    <div>
        <div class="top-heading-container_about">
            <div class="container_center top-heading">
                <h1 class="heading-font font-lighter"><span>get in touch</span></h1>
                <p class="heading-font__add heading-font__add-two font-lighter">contact us today</p>
            </div>
        </div>

        <main class="container_center">
            <section class="contact__adress-container">

                <div class="contact__adress-info">
                    <h2 class="text__cards-title font-lighter">office info</h2>
                    <p class="contact__adress__subtitle font-lighter">People Behind the Success of our Company</p>
                    <hr class="contact__adress__line">

                    <p class="contact__meet-time"><span class="contact__meet-time_span">Office Hours:</span>  Mon-Friday 8am - 10pm</p>
                    <p class="contact__meet-time"><span class="contact__meet-time_span">Address:</span>  gbalangao, Bugasong, Antique</p>

                    <p class="contact__phone__p contact__meet-time_span">Tell: <span class="contact__phone-number">123-456-7890</span></p>
                    <p class="contact__phone__p contact__meet-time_span">Fax: <span class="contact__phone-number">123-456-7890</span></p>
                </div>

                <form class="contact__form" action="" method="post">
                    <div class="form__top-field-container">

                        <label class="contact__form__top-field">
                            <input type="text" name="name" class="form__input-field form-field" placeholder="Name">
                        </label>

                        <label class="contact__form__top-field">
                            <input type="email" name="mail" class="form__input-field form-field" placeholder="Email">
                        </label>

                    </div>

                    <label class="form__mid-field">
                        <textarea name="message" class="contact__form__message-field form-field form__textarea-field" placeholder="Message"></textarea>
                    </label>

                    <input type="submit" value="send message" class="form__submit-button">
                </form>
            </section>
        </main>

        <div class="contact__map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656.1048614908227!2d2.391217829271907!3d48.86927999870553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66de9aa4335db%3A0xb053dc7d45258911!2zR2FsZXJpZSBDcsOodmVjxZN1cg!5e0!3m2!1sru!2sru!4v1559733918068!5m2!1sru!2sru" width="100%" height="360" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>

        <div class="container_center">
            <section class="text__cards__container">
                <h2 class="text__cards-title font-lighter">our values</h2>
                <p class="text__common-p text__cards-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                    diam nonummy nibh
                    euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit.</p>
            </section>

            <div class="bottom-cards">
                <div
                        v-for="item of ourValues"
                        :key="item.id"
                        class="bottom-cards__item"
                >
                    <div>
                        <img
                                :src="require(`@/assets/${item.src}`)"
                                class="gallery__image"
                                alt="Pic"
                        >
                    </div>
                    <h3 class="heading-font__add contact__our-values__title">{{ item.title }}</h3>
                    <p class="text__common-p contact__our-values__p">{{ item.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Contact',
        data() {
            return {
                ourValues: [
                    {id: 1, title: 'who we are', src: 'contact1.png',
                    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'},
                    {id: 2, title: 'our vision', src: 'contact2.png',
                    text: 'Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me.'},
                    {id: 3, title: 'our mission', src: 'contact3.png',
                    text: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.'}
                ]
            }
        }
    }
</script>

<style>
.contact__adress-container {
    display: flex;
    margin: 80px 0 50px;
    justify-content: space-between;
}

.contact__adress-info {
    flex-basis: 380px;
}

.contact__adress__subtitle {
    font-size: 16px;
    margin-top: 5px;
    text-transform: initial;
    color: #2f302f;
}

.contact__adress__line {
    width: 15%;
    margin: 18px 0 40px;
    border-top: 1px solid #000000;
    /*color: #000000;*/
}

.contact__meet-time, .contact__phone__p {
    font-size: 15px;
    text-transform: initial;
}

.contact__meet-time {
    margin-bottom: 30px;
}

.contact__phone__p {
    margin-bottom: 5px;
}

.contact__meet-time_span {
    font-weight: bold;
    color: #222222;
}

.contact__phone-number {
    color: #555555;
}

.contact__form {
    display: flex;
    flex-basis: 760px;
    flex-flow: wrap;
}

.contact__form__top-field {
    display: block;
    flex-basis: 48.5%;
}

.contact__form__message-field {
    height: 140px;
}

.contact__our-values__title {
    margin-top: 20px;
    font-weight: normal;
}

.contact__our-values__p {
    line-height: 2.2;
}

.contact__map {
    filter: grayscale(0.8);
}
</style>