<template>
  <header>
    <nav
      class="border border-red-400 max-container px-8 py-6 flex justify-between items-center sm:px-16"
    >
      <div>
        <a href="#">
          <img src="/images/logo-bookmark.svg" alt="logo" />
        </a>
      </div>
      <div class="md:flex justify-between items-center hidden">
        <ul class="flex justify-between items-center gap-12">
          <li
            v-for="link in links"
            :key="link.id"
            class="uppercase text-dark-blue font-normal tracking-[1px] hover:text-soft-red duration-300"
          >
            <a :href="link.to">
              {{ link.name }}
            </a>
          </li>
        </ul>
        <div class="ml-12">
          <Button bgColor="bg-soft-red" @click="login" class="uppercase"
            >Login</Button
          >
        </div>
      </div>
      <div class="flex justify-center items-center md:hidden">
        <span class="material-symbols-outlined"> menu </span>
      </div>
    </nav>
  </header>
</template>
<script setup>
import Button from "./Button.vue";

const links = [
  {
    id: 0,
    name: "Features",
    to: "#",
  },
  {
    id: 1,
    name: "Pricing",
    to: "#",
  },
  {
    id: 2,
    name: "Contact",
    to: "#",
  },
];

const login = () => {
  console.log("Clicked 👍🏽");
};
</script>
<style scoped></style>
