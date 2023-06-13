<template>
  <box-icon
    @click="changeMode"
    :name="themeMode ? 'sun' : 'moon'"
    :color="themeMode ? 'white' : 'black'"
    class="cursor-pointer"
  ></box-icon>
</template>

<script>
export default {
  name: "ThemeMode",
  data() {
    return {
      themeMode: true,
    };
  },

  created() {
     if (localStorage.getItem('dark')) {
      document.documentElement.classList.add('dark');
      this.themeMode = true;
    }
  },

  methods: {
    changeMode() {
      document.documentElement.classList.toggle("dark");
      document.documentElement.classList.contains("dark")
        ? localStorage.setItem("dark", true)
        : localStorage.removeItem("dark");
      this.themeMode = !this.themeMode;
    },
  },
};
</script>