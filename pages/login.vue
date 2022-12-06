<template>
    <div class="flex justify-center mt-20">
        <h1>Login</h1>
        <br>
        <div>
            <p class="bg-red-600 text-white p-3" v-if="_error">{{_error}}</p>
        </div>
        <form @submit.prevent="onSubmit">
            <input
                v-model="form.email"
                type="text"
            >
            <br>
            <input
                type="password"
                v-model="form.password"
            >
            <br>
            <button>
                <span v-if="!isLoading">Sign in</span>
                <span v-else>Loading...</span>
            </button>
        </form>
        <br>
        <button @click="backHome">Back Home</button>
    </div>
</template>

<script setup lang="ts">
const url = "https://reqres.in/api/login";

const form = reactive({
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
})

const isLoading = ref(false);
const _error = ref(null);

async function onSubmit() {
    if (isLoading.value) return;

    isLoading.value = true;
    const {data, error} = await useFetch(url, {
        method: "post",
        body: form,
    });
    isLoading.value = false;
    console.log(data.value, error.value?.data.error);
    if (error.value) {
        _error.value = error.value.data.error;
        return;
    }
    navigateTo("/");
}

function backHome() {
    navigateTo("/");
}

</script>

<style>

</style>