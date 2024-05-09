<script setup>
import { ref } from 'vue'
import { useRecipeStore } from '@/stores/recipeStore';

const store = useRecipeStore();


const recipe = ref([
    {
        title: '',
        description: '',
        ingredients: [],
    }
]

)


function submitRecipe() {
    store.addRecipe({ ...recipe.value });
    recipe.value = { title: '', description: '', ingredients: '', }

}


</script>

<template>
    <form @submit.prevent="submitRecipe">
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">餐點名稱</span>
            <input type="text" class="form-control" aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default" v-model="recipe.title">
        </div>

        <div class="form-floating">
            <textarea class="form-control" placeholder="description" id="floatingTextarea" v-model="recipe.description"
                required></textarea>
            <label for="floatingTextarea">簡短描述</label>
        </div>

        <div class="form-floating mt-3">
            <textarea class="form-control" placeholder="description" id="floatingTextarea" v-model="recipe.ingredients"
                required></textarea>
            <label for="floatingTextarea">食材描述</label>
        </div>

        <input class="btn btn-outline-dark mt-3" type="submit" value="Submit">

    </form>
</template>

<style scoped lang="scss">
.form {
    display: flex;
    flex-direction: row;

}
</style>