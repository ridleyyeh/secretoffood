<script setup>
import { useRecipeStore } from '@/stores/recipeStore';
import { defineProps } from 'vue';

const props = defineProps({
    recipe: Object
});

const store = useRecipeStore();

function openModal() {
    store.selectRecipe(props.recipe);
}
</script>

<template>
    <div class="card-body">
        <div class="card" @click="openModal" style="width: 18rem;">
            <!-- <img :src="recipe.image" alt="Recipe image" class="card-img-top"> -->
            <div class="card-body">
                <h5 class="card-title">{{ recipe.title }}</h5>
                <p class="card-text">{{ recipe.description }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card-body {
    .card {
        flex: 0 0 calc((100% - 3 * 20px) / 4);
        margin: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        border: 1px solid #ccc;
        transition: transform 0.3s ease;

        &:hover {
            transform: scale(1.05);
        }


    }
}
</style>
