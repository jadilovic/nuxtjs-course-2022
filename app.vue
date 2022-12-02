<template>
  <!-- <home-welcome /> -->
  <!-- <button @click="toggle">Toggle</button> -->
  <NuxtPage />
  <br>
  <a href="#" @click="view('welcome')">Welcome</a>
  <br>
  <a href="#" @click="view('counter')">Counter</a>
  <br>
  <!-- <div v-if="MyComponent === 'welcome'">
    <home-welcome />
  </div> -->
  <lazy-home-welcome v-if="MyComponent === 'welcome'" />
  <br>
  <lazy-counter v-if="MyComponent === 'counter'" />
  <!-- <component :is="MyComponent" /> -->
  <!-- <div v-else>
    <counter />
  </div> -->
</template>

<script setup>
  const MyComponent = ref("counter");

  function view(name) {
    MyComponent.value = name;
  }

  function toggle() {
    console.log(MyComponent.value);
    // MyComponent.value = resolveComponent("home-welcome")
     MyComponent.value = "welcome";
  }
</script>