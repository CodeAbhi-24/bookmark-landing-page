<template>
  <section id="feature">
    <div class="max-container px-6 py-12 text-center lg:pb-12 lg:pt-0 lg:px-16">
      <div class="mb-4">
        <h3 class="text-2xl text-dark-blue font-bold">Features</h3>
      </div>
      <div class="mb-8 mx-auto lg:w-[45%] lg:mb-6">
        <p class="text-grayish-blue text-lg">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div>
        <!-- tab btn box -->
        <div
          class="bg-transparent flex flex-col mb-14 lg:flex-row lg:justify-center lg:gap-8"
        >
          <!-- first button -->
          <div class="border-t-[1px] lg:border-none">
            <button
              class="text-grayish-blue outline-none cursor-pointer py-3.5 pb-4 duration-300ms text-base hover:text-dark-blue hover:border-b-2 hover:border-red-400"
              :class="{
                'text-dark-blue border-b-2 border-red-400': activeTab === 1,
              }"
              @click="activeTab = 1"
            >
              Simple Bookmarking
            </button>
          </div>
          <!-- ./first button -->
          <!-- second button -->
          <div class="border-t-[1px] lg:border-none">
            <button
              class="text-grayish-blue outline-none cursor-pointer py-3.5 pb-4 duration-300ms text-base hover:text-dark-blue hover:border-b-2 hover:border-red-400"
              :class="{
                'text-dark-blue border-b-2 border-red-400': activeTab === 2,
              }"
              @click="activeTab = 2"
            >
              Speedy Searching
            </button>
          </div>
          <!-- ./second button -->
          <!-- third button -->
          <div class="border-t-[1px] border-b-[1px] lg:border-none">
            <button
              class="text-grayish-blue outline-none cursor-pointer py-3.5 pb-4 duration-300ms text-base hover:text-dark-blue hover:border-b-2 hover:border-red-400"
              :class="{
                'text-dark-blue border-b-2 border-red-400': activeTab === 3,
              }"
              @click="activeTab = 3"
            >
              Easy Sharing
            </button>
          </div>
          <!-- ./third button -->
        </div>
        <!-- ./tab btn box -->

        <!-- tab box -->
        <div>
          <!-- first tab -->
          <div
            v-if="activeTab === 1"
            class="lg:flex lg:justify-center lg:items-center lg:gap-12"
          >
            <div class="mb-12 flex justify-center lg:w-[50%]">
              <img
                src="/images/illustration-features-tab-1.svg"
                alt="tab_logo"
              />
            </div>
            <div class="lg:w-[50%] lg:text-start">
              <div class="mb-4">
                <h3 class="text-2xl text-dark-blue font-bold">
                  Bookmark in one click
                </h3>
              </div>
              <div class="mb-6">
                <p class="text-grayish-blue text-lg">
                  Organize your bookmark however you like. Our simple
                  drag-and-drop interface gives you complete control over how
                  you manage your favourite sites.
                </p>
              </div>
              <div>
                <Button
                  class="text-white border-soft-blue bg-soft-blue px-6 py-3 lg:px-7 hover:text-soft-blue"
                  >More Info</Button
                >
              </div>
            </div>
          </div>
          <!-- ./first tab -->
          <!-- second tab -->
          <div
            v-if="activeTab === 2"
            class="lg:flex lg:justify-center lg:items-center lg:gap-12"
          >
            <div class="mb-12 flex justify-center lg:w-[50%]">
              <img
                src="/images/illustration-features-tab-2.svg"
                alt="tab_logo"
              />
            </div>
            <div class="lg:w-[50%] lg:text-start">
              <div class="mb-4">
                <h3 class="text-2xl text-dark-blue font-bold">
                  Intelligent search
                </h3>
              </div>
              <div class="mb-6">
                <p class="text-grayish-blue text-lg">
                  Our powerful search feature will help you find saved sites in
                  no time at all. No need to trawl through all of your
                  bookmarks.
                </p>
              </div>
              <div>
                <Button
                  class="text-white border-soft-blue bg-soft-blue px-6 py-3 lg:px-7 hover:text-soft-blue"
                  >More Info</Button
                >
              </div>
            </div>
          </div>
          <!-- ./second tab -->
          <!-- third tab -->
          <div
            v-if="activeTab === 3"
            class="lg:flex lg:justify-center lg:items-center lg:gap-12"
          >
            <div class="mb-12 flex justify-center lg:w-[50%]">
              <img
                src="/images/illustration-features-tab-3.svg"
                alt="tab_logo"
              />
            </div>
            <div class="lg:w-[50%] lg:text-start">
              <div class="mb-4">
                <h3 class="text-2xl text-dark-blue font-bold">
                  Share your bookmarks
                </h3>
              </div>
              <div class="mb-6">
                <p class="text-grayish-blue text-lg">
                  Easily share your bookmarks and collections with others.
                  Create a shareable link that you can send at the click of a
                  button.
                </p>
              </div>
              <div>
                <Button
                  class="text-white border-soft-blue bg-soft-blue px-6 py-3 lg:px-7 hover:text-soft-blue"
                  >More Info</Button
                >
              </div>
            </div>
          </div>
          <!-- ./third tab -->
        </div>
        <!-- ./tab box -->
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import Button from "./Button.vue";

const activeTab = ref(1);
</script>
<style scoped></style>
