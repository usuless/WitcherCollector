<script setup lang="ts">
import HomeView from './HomeView.vue';

let isConfirmed = true;

const logIn = () => {
    if(!isConfirmed) {
        return
    }
    // emit model    
}

</script>
<template>
    <button class="bg-red-500" @click="logIn">login</button>
</template>