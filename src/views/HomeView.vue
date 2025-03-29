<script setup lang="ts">
import TimeLine from '@/components/TimeLine.vue'
import UniAccordion from '@/components/UniAccordion.vue'
</script>

<template>
  <div class="overflow-scroll bg-slate-200 dark:bg-slate-500">
    <div class="h-screen flex items-center justify-center">
      <TimeLine />
    </div>
    <div class="bg-slate-200 dark:bg-slate-500 h-screen">
      <div class="h-screen flex items-center justify-center">
        <UniAccordion />
      </div>
    </div>
  </div>
</template>
