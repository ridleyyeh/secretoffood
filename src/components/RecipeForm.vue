<script setup>
import { ref } from 'vue'

const recipe = ref([
    {
        title: '',
        description: '',
    }
]

)


const submitForm = () => {
    console.log('submitting: ', recipe.value)
}
</script>

<template>
    <form @submit.prevent="submitForm">
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Title</span>
            <input v-model="recipe.title" type="text" class="form-control" aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default">
        </div>

        <div class="form-floating">
            <textarea v-model="recipe.description" class="form-control" placeholder="description" id="floatingTextarea"
                required></textarea>
            <label for="floatingTextarea">Comments</label>
        </div>
        <!-- more  -->
        <button type="submit" class="btn btn-outline-primary">Submit</button>
    </form>
</template>

<style scoped lang="scss">
.form {
    display: flex;
    flex-direction: column;

}
</style>