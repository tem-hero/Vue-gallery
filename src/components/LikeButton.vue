<template>
    <span>
        <i
                v-if="isLiked"
                class="fas fa-heart o-like-button"
                @click="like"
        ></i><i
                v-else
                class="far fa-heart o-like-button"
                @click="like"
        ></i><slot></slot>
    </span>
</template>

<script>
export default {
    name: "LikeButton",
    data() {
        return {
            isLiked: false
        }
    },
    methods: {
        like() {
            this.isLiked = !this.isLiked;
        }
    }
}
</script>

<style>
.o-like-button {
    margin: 0 8px 0 45px;
}

.fas.o-like-button {
    color: #ff0000;
}
</style>