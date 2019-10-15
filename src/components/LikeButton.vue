<template>
    <span>
        <i
                v-if="isLiked"
                class="fas fa-heart"
                @click="like"
        ></i><i
                v-else
                class="far fa-heart"
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
.fa-heart {
    margin: 0 8px 0 45px;
}

.fas.fa-heart {
    color: #ff0000;
}
</style>