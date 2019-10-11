<template>
    <div>
<!--        <PageHeading></PageHeading>-->
        <main class="container_center">
            <section class="contact__adress-container">
                <div class="contact__adress-info">
                    <h2>office info</h2>
                    <p>People Behind the Success of our Company</p>
                    <hr class="contact__adress__line">
                    <p class="meet-time"><span>Office Hours:</span>  Mon-Friday 8am - 10pm</p>
                    <p class="meet-time"><span>Address:</span>  gbalangao, Bugasong, Antique</p>
                    <p class="phone-number"><span>Tell:</span>  123-456-7890</p>
                    <p class="phone-number"><span>Fax:</span>  123-456-7890</p>
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

            <div id="map">
<!--                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656.1048614908227!2d2.391217829271907!3d48.86927999870553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66de9aa4335db%3A0xb053dc7d45258911!2zR2FsZXJpZSBDcsOodmVjxZN1cg!5e0!3m2!1sru!2sru!4v1559733918068!5m2!1sru!2sru" width="100%" height="360" frameborder="0" style="border:0" allowfullscreen></iframe>-->
            </div>

            <section class="about__awesome-team__container">
                <h2>our values</h2>
                <p class="about__awesome-team__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit.</p>
            </section>

            <div class="about__cards">
                <div v-for="item of ourValues" :key="item.id">
                    <div><img :src="require(`@/assets/${item.src}`)" class="contact__our-values__img" alt="Pic"></div>
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.text }}</p>
                </div>
            </div>
        </main>
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.contact__our-values__img {
    width: 100%;
}

.contact__adress__line {
    width: 16%;
}

.contact__form {
    grid-column: 2 / 4;
    display: flex;
    flex-flow: wrap;
}

.contact__form__top-field {
    display: block;
    width: 48.5%;
}

.contact__form__message-field {
    height: 140px;
}

</style>