<script setup>
import NavBar from '@/components/NavBar.vue';
import RecipeCard from '@/components/RecipeCard.vue';


const recipes = [
    {
        id: 1,
        title: '番茄炒蛋',
        description: '簡單快速的家常菜。',
        image: 'src/assets/noodles.jpg',
    },
    {
        id: 2,
        title: '清蒸鲈鱼',
        description: '鲜美滋补的健康选择，操作简单。',
        image: 'src/assets/noodles.jpg'
    }
    // 更多食谱
];
</script>


<template>
    <header>
        <NavBar />

    </header>
    <div class="recipes-container">
        <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
    </div>





</template>
