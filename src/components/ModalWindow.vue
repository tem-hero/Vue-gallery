<template>
    <transition name="modal-fade">
        <div
                class="modal__backdrop modal__backdrop__gallery"
                @click.self="close"
        >
            <div class="modal__gallery modal">
                <div
                        class="modal-button modal-prev"
                        @click.stop="$emit('prev-img')"

                ><span>&#10094;</span></div>

                <transition name="fade" mode="out-in">
                    <div
                            :key="modalId"
                            class="modal__image-wrapper"
                    >
                        <slot name="image"></slot>
                    </div>
                </transition>

                <transition name="fade" mode="out-in">
                    <div
                            :key="modalId"
                            class="modal__post-wrapper"
                    >
                        <slot name="post"></slot>
                    </div>
                </transition>

                <div
                        class="modal-button modal-next"
                        @click.stop="$emit('next-img')"

                ><span>&#10095;</span></div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "ModalWindow",
    props: ['modalId'],
    methods: {
        close() {
            this.$emit('close');
        }
    }
}
</script>

<style>
.modal__backdrop__gallery {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
}

.modal__gallery {
    display: flex;
    flex-basis: 950px;
    height: 450px;
    padding: 30px;
    justify-content: space-between;
    box-shadow: 2px 2px 20px 1px;
    background-color: #FFFFFF;
}

.modal__image-wrapper {
    display: flex;
    flex-basis: 360px;
    align-items: center;
}

.modal__post-wrapper {
    display: flex;
    flex-basis: 550px;
    flex-direction: column;
    justify-content: center;
}

.modal-button {
    position: absolute;
    top: 0;
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