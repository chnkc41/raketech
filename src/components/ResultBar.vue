<template>
  <button
    class="text-gray-900 dark:text-gray-50 ring-1 ring-inset ring-gray-100 dark:ring-gray-900 cursor-default"
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