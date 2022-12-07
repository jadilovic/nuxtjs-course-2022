<template>
    <div class="grid grid-cols-4 gap-4 mt-10">

        <nuxt-link
        v-for="iphone in iphones"
        :key="iphone"
            :to="`/iphone/${iphone}`"
            class="shadow-lg border rounded-lg text-center">
            <h1>{{iphone}}</h1>
            <div class="flex justify-center">
                <img width="200" :src="`/images/${iphone}.jpg`" alt=""/>
            </div>
        </nuxt-link>
        <nuxt-link to="/iphone/xiaomi-12t-pro" class="shadow-lg border rounded-lg text-center">
            <h1>Xiaomi 12T Pro</h1>
            <div class="flex justify-center">
                <img width="200" src="/images/xiaomi-12t-pro.jpg" alt=""/>
            </div>
        </nuxt-link>
    </div>
</template>
<script setup lang="ts">
useHead({
    title: "Nuxt 3 - Iphone",
})

const iphones = [
    "iphone-13",
    "iphone-11-pro",
    "iphone-12-pro",
    "iphone-14-plus",
    "iphone-14-pro-max"
]

// const {data} = await useFetch("/api/iphones");
// const iphones = data.value;

</script>