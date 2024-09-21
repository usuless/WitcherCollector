<template>
    <div>
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search items..."
        @input="onSearch"
        class="search-input"
      />
      <ul>
        <li v-for="item in filteredItems" :key="item">{{ item }}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  // Sample list of items to search through
  const items = ref([
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Grapes',
    'Strawberry',
    'Blueberry'
  ]);
  
  // The search query entered by the user
  const searchQuery = ref('');
  
  // Computed property that filters the list based on the search query
  const filteredItems = computed(() => {
    return items.value.filter(item =>
      item.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });
  </script>
  