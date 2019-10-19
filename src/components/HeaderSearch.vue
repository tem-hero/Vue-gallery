<template>
    <li
            class="header__nav__list__item header__search"
            @click="showSearch"
    >
        <i
            class="fas fa-search"
            v-if="searchFolded"

        ></i>
        <form
                v-else
                class="header__search-container"
        >
            <label>
                <input
                        type="search"
                        placeholder="Search"
                        class="header__search__input-item"
                        ref="headerSearch"
                        @blur="hideSearch"
                >
            </label>
            <button
                    type="submit"
                    class="header__search__button-item"

            ><i class="fas fa-search"></i></button>
        </form>
    </li>
</template>

<script>
    export default {
        name: "HeaderSearch",
        data() {
            return {
                searchFolded: true
            }
        },
        methods: {
            showSearch() {
                if (!this.searchFolded) return;

                this.searchFolded = false;
                this.$nextTick(() => this.$refs.headerSearch.focus());
            },
            hideSearch() {
                this.searchFolded = true;
            }
        }
    }
</script>

<style>
.header__search {
    position: relative;
    width: 14px;
    cursor: pointer;
}

.header__search-container {
    position: absolute;
    left: 15px;
}

.header__search__input-item {
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    border: none;
    border-bottom: 1px solid #777777;
    outline: none;
    padding-left: 3px;
    font-style: italic;
    transition: .4s cubic-bezier(0, 0.8, 0, 1);
}

.header__search__input-item:focus {
    width: 530px;
}

.header__search__button-item {
    position: absolute;
    top: 0;
    left: -16px;
    border: none;
    background-color: transparent;
    color: inherit;
    cursor: pointer;
}

</style>