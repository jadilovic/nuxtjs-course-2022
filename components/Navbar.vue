<template>
    <nav class="bg-purple-700 shadow-lg p-3 text-white text-lg flex justify-between">
        <NuxtLink to="/">Index Page</NuxtLink>
        <NuxtLink to="/about">About Page</NuxtLink>
        <NuxtLink to="/iphone">Iphone Page</NuxtLink>
        <NuxtLink to="/profile">Profile Page</NuxtLink>
        <p>Cart ({{cart.length}})</p>
    </nav>
</template>
<script setup lang="ts">

const cart = useCart();
console.log(cart.value.length);

</script>