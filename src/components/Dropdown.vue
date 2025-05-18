<template>
  <div class="flex justify-center card">
    <Select
      v-model="selectedLocale"
      :options="locales"
      optionLabel="code"
      :placeholder="selectedLocale?.code ? selectedLocale?.code : t('locale.chose')"
    >
    </Select>
  </div>
</template>

<script setup>
import { useLocaleStore } from '@/stores/localeStore'
import Select from 'primevue/select'
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const localeStore = useLocaleStore()
const { t } = useI18n()
const selectedLocale = ref({ name: t('locale.' + localeStore.locale), code: localeStore.locale })
const locales = ref([
  { name: t('locale.EN'), code: 'EN' },
  { name: t('locale.FR'), code: 'FR' }
])
watch(selectedLocale, () => {
  localeStore.setLocale(selectedLocale.value.code)
  window.location.reload()
})
</script>
