<template>
  <section id="download">
    <div class="max-container px-6 py-12 text-center lg:pb-12 lg:pt-0 lg:px-16">
      <div class="mb-4">
        <h3 class="text-2xl text-dark-blue font-bold">
          Download the extension
        </h3>
      </div>
      <div class="mb-4 lg:w-[45%] mx-auto">
        <p class="text-grayish-blue text-lg">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>
      <div
        class="card-bx flex flex-col items-center py-2 lg:flex-row lg:justify-center lg:gap-16"
      >
        <div
          v-for="card in cardContent"
          :key="card.id"
          class="w-[300px] py-8 mb-10 lg:mb-0 flex flex-col items-center shadow-lg shadow-boxShadow rounded-xl"
          :class="card.style"
        >
          <div class="mb-8">
            <img :src="card.path" alt="browser_logo" />
          </div>
          <div class="flex flex-col gap-2 mb-8">
            <h3 class="font-bold text-dark-blue text-2xl">{{ card.title }}</h3>
            <p class="text-grayish-blue text-lg">{{ card.text }}</p>
          </div>
          <div class="mb-8">
            <img src="/images/bg-dots.svg" alt="dots" />
          </div>
          <div>
            <Button
              class="bg-soft-blue px-10 sm:px-24 text-white border-soft-blue hover:text-soft-blue"
              >Add & Install Extension</Button
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import Button from "./Button.vue";

const cardContent = [
  {
    id: 0,
    path: "/images/logo-chrome.svg",
    title: "Add to Chrome",
    text: "Minimum version 62",
  },
  {
    id: 1,
    path: "/images/logo-firefox.svg",
    title: "Add to Firefox",
    text: "Minimum version 55",
    style: "lg:mt-16",
  },
  {
    id: 2,
    path: "/images/logo-opera.svg",
    title: "Add to Opera",
    text: "Minimum version 46",
    style: "lg:mt-32",
  },
];
</script>
<style scoped></style>
