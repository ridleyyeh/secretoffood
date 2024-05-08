<template>
    <div class="card-body">
        <div class="card" @click="goToRecipe" style="width: 18rem;">
            <img :src="recipe.jpg" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">{{ recipe.title }}</h5>
                <p class="card-text">{{ recipe.description }}</p>
            </div>
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

<style scoped lang="scss">
.card-body {


    .card {
        flex: 0 0 calc((100% - 3 * 20px) / 4); // 减去间隙后分四份
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