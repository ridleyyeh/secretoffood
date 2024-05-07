<script setup>
import { ref, defineEmits } from 'vue';
const searchQuery = ref('')
const emit = defineEmits(['search'])
const performSearch = () => {

    // 實現搜索邏輯或觸發一個事件

    console.log('Searching for :', searchQuery.value)

    emit('search', searchQuery.value)


}
</script>


<template>
    <div class="search-bar">
        <input v-model="searchQuery" placeholder="Search recipes..." @keyup.enter="performSearch" />
        <button>Search</button>
    </div>
</template>