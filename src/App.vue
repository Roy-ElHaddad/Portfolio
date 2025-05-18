<template>
  <div class="absolute right-0 mt-4 mr-5">
    <div class="flex gap-3">
      <button @click="toggleDark()">
        <span :class="isDark ? 'pi pi-moon' : 'i-lucide-sun text-black'" class="w-6 h-6"></span>
      </button>
      <Dropdown />
    </div>
  </div>
  <div class="flex flex-col items-center justify-center bg-gray-100 dark:bg-black">
    <LandingPage />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import Dropdown from '@/components/Dropdown.vue';
import LandingPage from '@/views/LandingPage.vue';
import { useDark, useToggle } from '@vueuse/core';
import { RouterView } from 'vue-router';

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
