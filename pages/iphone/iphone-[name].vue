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
            <div class="text-center selection">
                <h1 class="text-3xl">Iphone {{name}}</h1>
                <button @click="addToCart" class="p-3 bg-indigo-900 text-white rounded-md">
                    <span v-if="inCart">Remove from the cart</span>
                    <span v-else>Buy Now</span>
                </button>
                <button @click="addToFavorites" class="p-3 bg-red-900 text-white rounded-md">
                    <span v-if="inFavorites">Remove from the favorites</span>
                    <span v-else>Add to Favorites</span>
                </button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

const route = useRoute();
const cart = useCart();
const favorites = useFavorites();

const name = computed(() => {
    return route.params.name.toString().replaceAll("-", " ");
});

const fullName = computed(() => {
    return `iphone-${route.params.name}`;
});

const inCart = computed(() => {
    return !!cart.value.find((item) => item.name === fullName.value);
})

function addToCart() {
    if (!inCart.value) {
        cart.value.push({
            name: fullName.value,
        })
    } else {
        cart.value = cart.value.filter((item) => item.name !== fullName.value)
    }
}

const inFavorites = computed(() => {
    return !!favorites.value.find((item) => item.name === fullName.value)
})

function addToFavorites() {
    if (!inFavorites.value) {
        favorites.value.push({
            name: fullName.value,
        })
        saveToStorage("favorites", favorites.value);
    } else {
        favorites.value = favorites.value.filter((item) => item.name !== fullName.value);
        removeFromStorage('favorites');
    }
}

// useHead({
//     title: `Iphone - ${route.params.name.toString().replaceAll("-", " ")}`,
// })
</script>
<style>

.selection {
    display: grid;
    row-gap: 20px;
    min-width: 300px;
}

</style>