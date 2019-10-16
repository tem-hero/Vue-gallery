<template>
    <div>
        <span class="heading-font__add blog__aside-head font-lighter">popular tags</span>
        <ul class="blog__aside-tags white-colored">
            <li
                    v-for="item of tags"
                    :key="item.id"
                    class="blog__aside-tags__item"
            >
                <a
                        class="white-colored blog__aside-tags__a"
                        :class="{ 'blog__aside-tags__a_checked': item.checked }"
                        href="#"
                        @click.prevent="toggleTag(item.id - 1)"

                >{{ item.tag }}</a>
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
                    {id: 1, tag: 'construction', checked: false},
                    {id: 2, tag: 'engineering', checked: false},
                    {id: 3, tag: 'architecture', checked: false},
                    {id: 4, tag: 'structural design', checked: false},
                    {id: 5, tag: 'civil engineer', checked: false},
                    {id: 6, tag: 'industrial', checked: false},
                    {id: 7, tag: 'management', checked: false},
                    {id: 8, tag: 'mechanical', checked: false}
                ]
            }
        },
        methods: {
            toggleTag(index) {
                this.tags[index].checked = !this.tags[index].checked;
            }
        }
    }
</script>

<style>
.blog__aside-tags {
    padding: 35px 0 30px 27px;
    list-style: none;
}

.blog__aside-tags__item {
    display: inline-block;
    margin: 8px 1px;
}

.blog__aside-tags__a {
    color: #9c9c9c;
    font-size: 13px;
    text-transform: initial;
    font-weight: normal;
    border: 1px #eeeeee solid;
    padding: 5px 15px;
}

.blog__aside-tags__a:hover,
.blog__aside-tags__a_checked {
    background-color: #000000;
    color: #ffffff;
}
</style>