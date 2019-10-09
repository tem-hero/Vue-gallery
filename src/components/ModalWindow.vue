<template>
    <transition name="modal-fade">
        <div class="modal__backdrop"
             @click.prevent="close">
            <div class="modal">
                <div @click.stop="$emit('prev-img')" class="modal-button modal-prev">&#10094;</div>

                <div class="modal__image-wrapper">
                    <slot name="image">
                    </slot>
                </div>

                <div class="modal__post-wrapper">
                    <slot name="post">
                    </slot>
                </div>

                <div @click.stop="$emit('next-img')" class="modal-button modal-next">&#10095;</div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "ModalWindow",
    methods: {
        close(e) {
            if (e.target !== e.currentTarget) return;
            this.$emit('close');
        }
    }
}
</script>

<style>
.modal__backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    overflow: auto;
}

.modal {
    position: relative;
    display: flex;
    flex-direction: column;
    /*overflow-x: auto;*/
    box-shadow: 2px 2px 20px 1px;
    background: #FFFFFF;
}

.modal-button {
    position: absolute;
    width: 30px;
    height: 100%;
    border: 1px solid black;
    background-color: rgba(191, 195, 158, 0.3);
    transition: background-color .5s linear;
}

.modal-prev {
    left: -30px;
}

.modal-next {
    right: -30px;
}

.modal-button:hover {
    background-color: rgba(238, 255, 222, 0.38);
}

.modal-fade-enter,
.modal-fade-leave-active {
    opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity .5s ease
}
</style>