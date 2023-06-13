<template>
  <button
    class="bg-white text-gray-900 ring-1 ring-inset ring-gray-100 cursor-default"
  >
    <span class="hidden sm:inline-flex"> Showing </span> 1 to {{ limit }} of
    {{ totalElement }}
  </button>
</template>

<script>
export default {
  name: "ResultBar",
  props: ["limit", "totalElement"],
};
</script>