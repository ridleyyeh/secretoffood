<script setup>
import { ref } from 'vue';

const shoppingList = ref([

    { id: 1, name: '番茄', quantity: '2kg' },
    { id: 2, name: '雞蛋', quantity: '12' },

    // more...

]);
</script>

<template>
    <ul>
        <li v-for="item in shoppingList" :key="item.id">{{ item.name }} : {{ item.quantity }}</li>
    </ul>
</template>