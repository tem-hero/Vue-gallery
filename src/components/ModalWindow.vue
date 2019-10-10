<template>
    <transition name="modal-fade">
        <div class="modal__backdrop"
             @click.prevent="close">
            <div class="modal">
                <div @click.stop="$emit('prev-img')" class="modal-button modal-prev"><span>&#10094;</span></div>

                <transition name="fade" mode="out-in">
                    <div :key="modalId" class="modal__image-wrapper">
                        <slot name="image">
                        </slot>
                    </div>
                </transition>

                <transition name="fade" mode="out-in">
                    <div :key="modalId" class="modal__post-wrapper">
                        <slot name="post">
                        </slot>
                    </div>
                </transition>

                <div @click.stop="$emit('next-img')" class="modal-button modal-next"><span>&#10095;</span></div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "ModalWindow",
    props: ['modalId'],
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
    z-index: 9000;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    overflow: auto;
}

.modal {
    position: relative;
    z-index: 9999;
    display: flex;
    flex-flow: row wrap;
    max-width: 800px;
    min-height: 460px;
    justify-content: center;
    box-shadow: 2px 2px 20px 1px;
    background: #FFFFFF;
}

.modal__image-wrapper {
    display: flex;
    max-width: 360px;
    align-items: center;
}

.modal__post-wrapper {
    display: flex;
    max-width: 400px;
    flex-direction: column;
    justify-content: center;
}

.modal-button {
    position: absolute;
    display: flex;
    width: 30px;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: rgba(187, 186, 186, 0.3);
    transition: background-color .15s linear;
}

.modal-prev {
    left: -30px;
}

.modal-next {
    right: -30px;
}

.modal-button:hover {
    background-color: rgba(187, 186, 186, 0.5);
    cursor: default;
}

.modal-fade-enter,
.modal-fade-leave-active {
    opacity: 0;
}

.modal-fade-enter-active {
    transition: opacity .3s;
}

</style>