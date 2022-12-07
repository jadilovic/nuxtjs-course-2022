<template>
    <nav class="bg-purple-700 shadow-lg p-3 text-white text-lg flex justify-between">
        <div class="flex">
            <NuxtLink class="mr-4" to="/">Index Page</NuxtLink>
            <NuxtLink class="mr-4" to="/about">About Page</NuxtLink>
            <NuxtLink class="mr-4" to="/iphone">Iphone Page</NuxtLink>
            <p>Cart ({{cart.length}})</p>
            <p>Total routes changed: ({{visitedPages}})</p>
        </div>
        <div v-if="auth.isAuthorized" >
            <NuxtLink to="/profile">Profile Page</NuxtLink>
            <button class="ml-4" @click="logOut">Logout</button>
        </div>
        <NuxtLink v-else to="/login">Login</NuxtLink>
    </nav>
</template>
<script setup lang="ts">

const cart = useCart();
const auth = useAuth();
const visitedPages = useVisitedPagesCount();

function logOut() {
    auth.value.isAuthorized = false;
}

</script>