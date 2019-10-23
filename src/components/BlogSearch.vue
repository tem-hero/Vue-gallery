<template>
    <form class="blog__search white-colored">
        <label>
            <input type="search" placeholder="Search" class="blog__search__input-item">
        </label>
        <button type="submit" class="blog__search__button-item"><i class="fas fa-search"></i></button>
    </form>
</template>

<script>
export default {
    name: "BlogSearch"
}
</script>

<style>
.blog__search {
    position: relative;
    margin-top: 30px;
}

.blog__search__input-item {
    width: 100%;
    height: 60px;
    padding-left: 25px;
    border: none;
    outline: none;
    color: #b7b7b7;
    font-size: 16px;
    font-style: italic;
}

.blog__search__button-item {
    position: absolute;
    top: 20%;
    right: 3%;
    width: 36px;
    height: 36px;
    border: none;
    background-color: #999999;
    border-radius: 3px;
    cursor: pointer;
}

.fas.fa-search {
    font-size: 16px;
    color: #ffffff;
}

</style>