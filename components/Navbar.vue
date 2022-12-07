<template>
    <nav class="bg-purple-700 shadow-lg p-3 text-white text-lg flex justify-between">
        <div class="flex">
            <NuxtLink class="mr-4" to="/">Index Page</NuxtLink>
            <NuxtLink class="mr-4" to="/about">About Page</NuxtLink>
            <NuxtLink class="mr-4" to="/iphone">Iphone Page</NuxtLink>
            <p class="mr-4">Cart ({{cart.length}})</p>
            <p>Routes: ({{visitedPages}})</p>
        </div>
        <div v-if="auth.isAuthorized" >
            <NuxtLink class="mr-4" to="/profile">Profile</NuxtLink>
            <NuxtLink class="mr-4" to="/favorites">Favorites: ({{favorites.length}})</NuxtLink>
            <button class="ml-4" @click="logOut">Logout</button>
        </div>
        <NuxtLink v-else to="/login">Login</NuxtLink>
    </nav>
</template>
<script setup lang="ts">

const cart = useCart();
const auth = useAuth();
const visitedPages = useVisitedPagesCount();
const favorites = useFavorites();

function logOut() {
    auth.value.isAuthorized = false;
}

</script>