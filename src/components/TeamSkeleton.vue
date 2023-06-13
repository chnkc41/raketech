<template>
  <div>
    <div class="mx-auto px-3" v-for="item in 5" :key="item">
      <div class="flex gap-3 mt-2 animate-pulse">
        <div :class="className" class="!w-4"></div>
        <div :class="className" class="!w-44"></div>
        <div :class="className" v-for="innerItem in 7" :key="innerItem"></div>
        <div :class="className" class="'w-8"></div>
        <div :class="className" class="!w-28"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamSkeleton",
  data() {
    return {
      className: "h-8 bg-gray-200 rounded animate-pulse w-7",
    };
  },
};
</script>