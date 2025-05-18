<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-20">
    <div class="flex items-center w-full max-w-3xl">
      <div class="w-full">
        <div class="flex flex-col items-start gap-5 md:flex-row">
          <div class="absolute bottom-3 md:hidden">
            <DotLottieVue :src="mobileAnimation" :loop="true" :autoplay="true" style="height: 100px; width: 100px;" class="!text-black bg-black rounded-full" />
          </div>
            <div class="absolute hidden p-2 transform -translate-x-1/2 bg-gray-100 rounded-full md:block left-1/2 bottom-10">
            <DotLottieVue :src="desktopAnimation" :loop="true" :autoplay="true" style="height: 50px; width: 50px;"  />
            </div>
          <img src="../assets/portrait.jpg" alt="Portrait" class="h-64 mb-5 rounded-lg md:h-72 md:w-42"/>
          <div class="gap-10 md:flex md:flex-col">
            <h3 ref="welcomeText" class="text-xl font-bold text-blue-700 dark:text-rose-700 backdrop-blur-sm w-fit md:text-4xl"></h3>
            <span>{{ t('intro') }}</span>
          </div>
        </div>
          
      </div>
    </div>
    <button
      class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white w-fit mt-10"
      @click="downloadCV"
    >
      <span
        class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 w-full"
      >
        Download CV
      </span>
    </button>
  </div>
</template>
<script setup lang="ts">
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import cvPdf from "../assets/CV.pdf?url"
import mobileAnimation from "../assets/Lottie/mobile_scroll.lottie?url"
import desktopAnimation from "../assets/Lottie/mouseBig.lottie?url"

const { t } = useI18n()
const welcomeText = ref()

const downloadCV = () => {
  const link = document.createElement('a')
  link.href = cvPdf
  link.download = 'Roy_ELHADDAD_CV.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const typeWriterEffect = (element: HTMLElement, text: string, speed: number) => {
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