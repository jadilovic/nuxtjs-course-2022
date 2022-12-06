<template>
    <Head>
        <Title>Iphone - {{name}}</Title>
    </Head>
    <!-- <h1>Iphone {{ $route.params.name }}</h1> -->
    <div class="flex justify-center w-full mt-20">
        <div class="grid grid-cols-2">
            <div>
                <img :src="`/images/iphone-${route.params.name}.jpg`" alt="">
            </div>
            <div class="text-center">
                <h1 class="text-3xl">Iphone {{name}}</h1>
                <button @click="addToCart" class="p-3 bg-indigo-900 text-white rounded-md">
                    <span v-if="inCart">Remove from the cart</span>
                    <span v-else>Buy Now</span>
                </button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

const route = useRoute();

const name = computed(() => {
    return route.params.name.toString().replaceAll("-", " ");
});

const fullName = computed(() => {
    return `iphone-${route.params.name}`;
});

const inCart = computed(() => {
    return !!cart.value.find((item) => item.name === fullName.value);
})

const cart = useCart();

function addToCart() {
    if (!inCart.value) {
        cart.value.push({
            name: fullName,
        })
    } else {
        cart.value = cart.value.filter((item) => item.name !== fullName.value)
    }
}

// useHead({
//     title: `Iphone - ${route.params.name.toString().replaceAll("-", " ")}`,
// })
</script>