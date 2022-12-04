<template>
    <Head>
        <Title>Xiaomi {{name}}</Title>
    </Head>
    <!-- <h1>Iphone {{ $route.params.name }}</h1> -->
    <h1>Xiaomi {{ name }}</h1>
</template>
<script setup lang="ts">

const route = useRoute();

const name = computed(() => {
    return route.params.name.toString().replaceAll("-", " ");
});

// useHead({
//     title: `Xiaomi - ${route.params.name.toString().replaceAll("-", " ")}`,
// })
</script>