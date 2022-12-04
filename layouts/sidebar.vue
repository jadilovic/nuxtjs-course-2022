<template>
    <article class="sidebar">
        <button class="bg-red-600" @click="backHome">to Index Dashboard</button>
        <p>Settings</p>
    </article>
    <slot></slot>
</template>
<script setup lang="ts">
function backHome() {
    navigateTo("/");
}
</script>
<style>

.sidebar {
    display: flex;
    flex-direction: column;
}
</style>