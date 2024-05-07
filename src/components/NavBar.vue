<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Recipe</a>
        <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button> -->
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item" v-for="link in links" :key="link.text">
                    <router-link class="nav-link" :to="link.to">{{ link.text }}</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
const links = [
    { text: '首頁', to: '/' },
    { text: '尋找食譜', to: '/' },
    { text: '添加食譜', to: '/' },
    { text: '購物', to: '/' },
];
</script>

<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;

    .navbar-brand {
        font-weight: 900
    }

    div {

        .navbar-nav {
            gap: 15px;

            .nav-item {


                .nav-link {
                    font-weight: 700;
                }
            }
        }
    }

}
</style>
