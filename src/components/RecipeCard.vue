<template>
    <div class="card" @click="goToRecipe" style="width: 18rem;">
        <img :src="recipe.jpg" alt="Card image cap" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">{{ recipe.title }}</h5>
            <p class="card-text">{{ recipe.description }}</p>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
    recipe: {
        type: Object,
        required: true,
    }

})


const router = useRouter();

function goToRecipe() {
    router.push(`/recipe/${props.recipe.id}`);
}
</script>