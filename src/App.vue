<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import NavBar from '@/components/NavBar.vue'
import RecipeCard from '@/components/RecipeCard.vue'
import SearchBar from '@/components/SearchBar.vue'

const recipes = ref([
  { id: 1, title: "泰式酸辣麵", description: '簡單快速家常菜', Image: '@/assets/noodles.jpg' },


])

</script>

<template>
  <header>
    <NavBar />
    <SearchBar />

  </header>

  <main>
    <div class="recipe-list">
      <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
    </div>
  </main>

</template>

<style scoped lang="scss"></style>
