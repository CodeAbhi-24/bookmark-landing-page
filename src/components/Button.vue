<template>
  <button
    class="border-2 px-4 py-2 rounded-md font-semibold hover:bg-white duration-300"
    :style="{ backgroundColor: bgColor }"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>
<script setup>
const props = defineProps({
  bgColor: {
    type: String,
    default: "bg-soft-blue",
  },
});

const emit = defineEmits(["click"]);

const handleClick = () => {
  emit("click");
};
</script>
<style scoped></style>
