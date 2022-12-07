<template>
    <h1>Jasmin Profile Page</h1>
    <br>
    <NuxtLink to="/">Go Home</NuxtLink>
</template>
<script lang="ts" setup>

definePageMeta({
    layout: "sidebar",
     middleware: ['auth'],
    // middleware: () => {
    //     const auth = useAuth();
    //     return auth.value.isAuthorized;
    // }
})
</script>
