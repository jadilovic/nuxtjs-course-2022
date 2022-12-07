<template>
  <div>
    <h1>Home Page</h1>
    <h1>Nuxt 3 Application</h1>
    <br>
    <NuxtLink class="bg-blue-700 p-5 m-20 text-white" to="/iphone">Iphones Page</NuxtLink>
    <br>
    <button class="m-10" @click="goToAbout">Go to About Page</button>
  </div>
</template>
<script setup>
const auth = useAuth();
console.log(auth.value.isAuthorized);
function goToAbout() {
  navigateTo("/about")
}
</script>

