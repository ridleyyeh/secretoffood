<script setup>
import { ref } from 'vue'


const recipe = ref([
    {
        title: '',
        description: '',
        ingredients: [],
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
            <span class="input-group-text" id="inputGroup-sizing-default">餐點名稱</span>
            <input type="text" class="form-control" aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default">
        </div>

        <div class="form-floating">
            <textarea class="form-control" placeholder="description" id="floatingTextarea" required></textarea>
            <label for="floatingTextarea">簡短描述</label>
        </div>

        <div class="form-floating mt-3">
            <textarea class="form-control" placeholder="description" id="floatingTextarea" required></textarea>
            <label for="floatingTextarea">食材描述</label>
        </div>

        <input class="btn btn-primary mt-3" type="submit" value="Submit">

    </form>
</template>

<style scoped lang="scss">
.form {
    display: flex;
    flex-direction: row;

}
</style>