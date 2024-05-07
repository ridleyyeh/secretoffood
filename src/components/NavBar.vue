<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Recipe</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>


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
import { ref } from 'vue'
import { router-link} from 'vue-router'

const links = ref([
    { text: 'Home', to: '/' },
    { text: 'Add Receipe', to: '/add' },

</script>