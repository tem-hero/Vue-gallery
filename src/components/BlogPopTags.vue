<template>
    <div>
        <span class="heading-font__add blog__aside-head">popular tags</span>
        <ul class="blog__aside-tags white-colored">
            <li v-for="item of tags" :key="item.id">
                <a class="white-colored" href="#">{{ item.tag }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "BlogPopTags",
        data() {
            return {
                tags: [
                    {id: 1, tag: 'construction'},
                    {id: 2, tag: 'engineering'},
                    {id: 3, tag: 'architecture'},
                    {id: 4, tag: 'structural design'},
                    {id: 5, tag: 'civil engineer'},
                    {id: 6, tag: 'industrial'},
                    {id: 7, tag: 'management'},
                    {id: 8, tag: 'mechanical'}
                ]
            }
        }
    }
</script>

<style scoped>
.blog__aside-tags {
    padding: 35px 0 30px 25px;
    list-style: none;
}

.blog__aside-tags li {
    display: inline-block;
    margin: 8px 1px;
}

.blog__aside-tags a {
    color: #9c9c9c;
    font-size: 13px;
    text-transform: initial;
    border: 1px #eeeeee solid;
    padding: 5px 15px;
}

.blog__aside-tags a:hover {
    background-color: black;
    color: white;
}
</style>