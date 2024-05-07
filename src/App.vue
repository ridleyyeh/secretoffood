<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import NavBar from '@/components/NavBar.vue'

const recipes = ref([
  { id: 1, title: "泰式酸辣麵", description: '簡單快速家常菜', Image: '@/assets/noodles.jpg' },


])

</script>

<template>


  <router-view />





</template>


<style scoped lang="scss"></style>
