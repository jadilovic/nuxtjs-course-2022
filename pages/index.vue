<template>
  <div>
    <h1>Index Page</h1>
    <!-- <NuxtLink to="/about">Home Page</NuxtLink> -->
    <br>
    <button @click="goToAbout">Go to About Page</button>
  </div>
</template>
<script setup>
function goToAbout() {
  navigateTo("/about")
}
</script>

