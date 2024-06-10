<template>
  <section id="home">
    <div
      class="max-container px-6 pt-4 pb-8 flex flex-wrap-reverse justify-between lg:px-16"
    >
      <div class="w-full text-center lg:w-[50%] lg:pt-8 lg:pr-20 lg:text-start">
        <div class="title">
          <h1
            class="text-3xl font-bold text-dark-blue mb-4 md:mb-8 lg:text-5xl"
          >
            A Simple Bookmark Manager
          </h1>
        </div>
        <div class="desc text-grayish-blue text-lg mb-8">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </div>
        <div class="flex gap-8 justify-center lg:justify-start">
          <Button
            class="bg-soft-blue border-soft-blue shadow-lg shadow-boxShadow text-white hover:text-soft-blue"
            >Get it on Chrome</Button
          >
          <Button
            class="bg-white border-white shadow-lg shadow-boxShadow text-dark-blue hover:border-dark-blue"
            >Get it on Firefox</Button
          >
        </div>
      </div>
      <div class="w-full flex justify-center items-center lg:w-[50%]">
        <img src="/images/illustration-hero.svg" alt="hero_illustration" />
      </div>
    </div>
  </section>
</template>
<script setup>
import Button from "./Button.vue";
</script>
<style scoped></style>
