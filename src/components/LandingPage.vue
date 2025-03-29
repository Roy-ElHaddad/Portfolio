<template>
  <div class="relative h-full">
    <img src="../assets/portrait.jpg" alt="Portrait" class="absolute w-full h-full z-0" />
    <div class="relative z-10 bg-transparent flex flex-col justify-center h-full px-4 mt-8">
      <h3 ref="welcomeText" class="text-4xl font-bold text-rose-600 backdrop-blur-sm w-fit"></h3>
      <!-- <div
        class="text-slate-900 dark:text-slate-100 text-lg font-semibold w-3/4 py-4 mt-14 backdrop-blur-sm backdrop-grayscale"
      > -->
      <div
        class="w-fit mx-5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        {{ $t('intro') }}
      </div>
      <!-- </div> -->
      <button
        class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-600 w-fit mt-10"
      >
        <span
          class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 w-full"
        >
          Let's collaborate !
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const welcomeText = ref(null)

const typeWriterEffect = (element, text, speed) => {
  let index = 0
  const typeNextChar = () => {
    if (index < text.length) {
      element.textContent += text.charAt(index)
      index++
      setTimeout(typeNextChar, speed)
    }
  }
  typeNextChar()
}

onMounted(() => {
  const text = t('welcome')
  typeWriterEffect(welcomeText.value, text, 100)
})
</script>
