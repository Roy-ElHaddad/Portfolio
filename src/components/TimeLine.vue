<template>
  <div
    class="p-6 my-5 bg-white border border-gray-200 rounded-lg shadow w-fit dark:bg-gray-800 dark:border-gray-700"
  >
    <h3 class="mb-3 text-3xl text-blue-700 dark:text-rose-600">
      {{ t('professionalExp.title') }}
    </h3>
    <ol class="relative border-gray-200 border-s dark:border-gray-700">
      <li class="mb-10 ms-4">
        <div
          class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
        ></div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          {{ t('professionalExp.MotorKI.position') }}
        </h3>
        <p class="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          Motork, {{ t('professionalExp.MotorKI.location') }}
        </p>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{
          t('professionalExp.MotorKI.date')
        }}</time>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
          {{ t('professionalExp.MotorKI.description') }}
        </p>
      </li>
      <li class="mb-10 ms-4">
        <div
          class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
        ></div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          {{ t('professionalExp.Soredi.position') }}
        </h3>
        <p class="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          Soredi, {{ t('professionalExp.Soredi.location') }}
        </p>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {{ t('professionalExp.Soredi.date') }}
        </time>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
          {{ t('professionalExp.Soredi.description') }}
        </p>
      </li>
      <li class="ms-4">
        <div
          class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
        ></div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          {{ t('professionalExp.MBEDWORKS-IDLEWEISSE.position') }}
        </h3>
        <p class="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          MBEDWORKS-IDLEWEISSE, {{ t('professionalExp.MBEDWORKS-IDLEWEISSE.location') }}
        </p>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{
          t('professionalExp.MBEDWORKS-IDLEWEISSE.date')
        }}</time>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
          {{ t('professionalExp.MBEDWORKS-IDLEWEISSE.description') }}
        </p>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
