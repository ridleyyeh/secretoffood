<script setup>
import NavBar from '@/components/NavBar.vue';
import RecipeCard from '@/components/RecipeCard.vue';
import { useRecipeStore } from '@/stores/recipeStore';
import recipesData from '@/recipes.json'; //靜態

const store = useRecipeStore();


store.setRecipes(recipesData);

function openModal(recipe) {
    store.selectRecipe(recipe);
}

function closeModal() {
    store.closeRecipeModal();
}
</script>

<template>
    <NavBar />
    <div class="recipes-container">
        <RecipeCard v-for="recipe in store.recipes" :key="recipe.id" :recipe="recipe" @openModal="openModal" />
    </div>
    <div class="modal" v-if="store.showModal">
        <div class="modal-content">
            <h2>{{ store.selectedRecipe.title }}</h2>
            <p>{{ store.selectedRecipe.description }}</p>
            <ul>
                <li v-for="ingredient in store.selectedRecipe.ingredients" :key="ingredient">{{ ingredient }}</li>
            </ul>
            <button @click="closeModal" class="btn btn-outline-dark">關閉</button>
        </div>
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

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-content {
        background: white;
        padding: 20px;
        border-radius: 8px;
        width: 500px;
        text-align: center;
        display: flex;

        ul {
            list-style: none;
            margin: 10px 10px
        }

        button {
            // width: 300px;

        }

        p {
            text-align: center;
        }
    }


}
</style>