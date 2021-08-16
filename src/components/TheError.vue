<template>
  <div
    v-if="error"
    class="text-center font-medium text-base w-2/5 mx-auto bg-red-600 text-white rounded-md py-2 mt-10"
  >
    {{ error }}
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped></style>
