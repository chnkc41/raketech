<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/images/logo.png" />  -->

    <div
      class="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10"
    >
      <p class="text-3xl text-gray-700 font-bold mb-5">Welcome!</p>
      <p class="text-red-500 text-lg">Vue and Tailwind CSS in action</p>
    </div>

    <router-view> </router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {
    // HelloWorld
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
