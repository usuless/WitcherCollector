<script setup>
</script>
<template>
    <div class="flex w-8/12 justify-between bg-green-600 text-black clippy my-2 p-1 px-10">
        <p>nazwa karty</p>
        <p>lokalizacja</p>
        <p>talia</p>
        <input type="checkbox">        
    </div>
</template>
<style scoped>

 .clippy {
    clip-path: polygon(0 1%, 97% 0, 100% 100%, 0% 100%);
 }
 /*
 .clippy:hover {
    animation: 1s scale;
 }

 @keyframes scale {
    0% {
        transform: scale(1) translateX(0px);

    }

    100% {
        transform: scale(1.1) translateX(50px);
    }
    
 } */
</style>