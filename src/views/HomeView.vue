<script setup lang="ts">
import TimeLine from '@/components/TimeLine.vue';
import UniAccordion from '@/components/UniAccordion.vue';
</script>

<template>
  <div class="flex flex-col w-full h-full gap-5 p-5 justify-betweem bg-slate-200 dark:bg-slate-500 lg:flex-row ">
    <div class="lg:w-1/2">
      <TimeLine />
    </div>
    <div class="lg:w-1/2">
        <UniAccordion />
    </div>
  </div>
</template>
