<script setup>
import NavBar from '@/components/NavBar.vue';
import RecipeCard from '@/components/RecipeCard.vue';
import recipesData from '@/recipes.json';
import { reactive } from 'vue';

const recipes = reactive(recipesData);

</script>


<template>

    <NavBar />


    <div class="recipes-container">
        <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
    </div>





</template>

<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.recipes-container {

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 1300px;
    height: auto;
    margin-top: 9rem;


}
</style>