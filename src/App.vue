<template>
  <div class="absolute right-0 mr-5 mt-4">
    <div class="flex gap-3">
      <button @click="toggleDark()">
        <span :class="isDark ? 'i-lucide-moon' : 'i-lucide-sun text-black'" class="w-6 h-6"></span>
      </button>
      <Dropdown />
    </div>
  </div>
  <div class="grid grid-cols-2 h-screen">
    <LandingPage />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { RouterView } from 'vue-router'
import Dropdown from './components/Dropdown.vue'
import LandingPage from './components/LandingPage.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
