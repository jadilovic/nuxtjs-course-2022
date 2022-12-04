<template>
    <div class="grid grid-cols-4 gap-4 mt-10">
        <nuxt-link to="/iphone/iphone-13" class="shadow-lg border rounded-lg text-center">
            <h1>I Phone 13</h1>
            <div class="flex justify-center">
                <img width="200" src="/images/iphone-13.jpg" alt=""/>
            </div>
        </nuxt-link>
         <nuxt-link to="/iphone/iphone-11-pro" class="shadow-lg border rounded-lg text-center">
            <h1>I Phone 11 Pro</h1>
            <div class="flex justify-center">
                <img width="200" src="/images/iphone-11-pro.jpg" alt=""/>
            </div>
        </nuxt-link>
         <nuxt-link to="/iphone/iphone-12-pro" class="shadow-lg border rounded-lg text-center">
            <h1>I Phone 12 Pro</h1>
            <div class="flex justify-center">
                <img width="200" src="/images/iphone-12-pro.jpg" alt=""/>
            </div>
        </nuxt-link>
         <nuxt-link to="/iphone/iphone-14-plus" class="shadow-lg border rounded-lg text-center">
            <h1>I Phone 14 Plus</h1>
            <div class="flex justify-center">
                <img width="200" src="/images/iphone-14-plus.jpg" alt=""/>
            </div>
        </nuxt-link>
         <nuxt-link to="/iphone/iphone-14-pro-max" class="shadow-lg border rounded-lg text-center">
            <h1>I Phone 14 Pro Max</h1>
            <div class="flex justify-center">
                <img width="200" src="/images/iphone-14-pro-max.jpg" alt=""/>
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
</script>