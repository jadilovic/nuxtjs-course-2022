<template>
    <div>
    <h1>About Page</h1>
    <!-- <NuxtLink to="/">Index Page</NuxtLink> -->
    <br>
    <button @click="goToIndex">Go to Index</button>
  </div>
</template>
<script lang="ts" setup>
function goToIndex() {
    navigateTo("/")
}

definePageMeta({
    layout: false
})
</script>