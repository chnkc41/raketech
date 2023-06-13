<template>
  <div>
    <div class="logo">
      <router-link
        to="/"
        class="text-decoration-none"
        active-class="active"
        exact
      >
        <img :src="require('@/assets/images/logo.png')" class="my-3" contain />
      </router-link>
    </div>

    <div class="text-center">
      <h1 class="text-base font-semibold leading-6 text-gray-900">
        Teams list
      </h1>
      <p class="mt-2 text-sm text-gray-700">
        A list of all the teams in your account including their name, title,
        email and role.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainHeader",
  props: ["breadcrumpData"],
};
</script>
 
 <style>
header {
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.logo {
  max-width: 200px;
  height: auto;
  transition: min-width 0.2s ease-in-out;
}

.active {
  color: blue;
}
</style>