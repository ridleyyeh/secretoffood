<script setup>
import NavBar from '@/components/NavBar.vue';
import RecipeCard from '@/components/RecipeCard.vue';
import recipesData from '@/recipes.json';
import { reactive } from 'vue';

const recipes = reactive(recipesData);

</script>


<template>

    <NavBar />


    <div class="paragraph">
        <h1>Welcome to Recipe</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam laudantium autem nesciunt rem asperiores,
            alias numquam inventore nihil minus fugiat, accusantium iste unde hic velit!</p>
    </div>

    <div class="image">
        <img src="@/assets/chef.jpg" alt="">
    </div>






</template>

<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}



.paragraph {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    text-align: start;
    margin: auto;
    width: 100%;
    height: auto;
    // border: 2px solid red;
    // margin-left: 20rem;
}

.image {
    width: 450px;


    img {
        width: 100%;
        height: auto;
        border-radius: 25px;
        object-fit: cover;
    }

}
</style>