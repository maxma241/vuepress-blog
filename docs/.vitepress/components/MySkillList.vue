<template>
  <div class="mt-4">
    <h3 class="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">{{ title }}</h3>
    <div class="flex flex-wrap gap-2">
      <Tag v-for="s in skills" :key="s.name || s[0]" :text="s.name || s[0]" class="bg-white dark:bg-gray-700 shadow-sm border border-gray-100 dark:border-gray-600" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import data from '../../data'
import enData from '../../en-data'
import Tag from './Tag.vue'

const lang = computed(() =>
  typeof document !== 'undefined' && document.documentElement.lang === 'en-US'
    ? 'en'
    : 'zh'
)
const skills = computed(() => lang.value === 'en' ? enData.skills : data.skills)
const title = computed(() => lang.value === 'en' ? 'Core Skills' : '專業技能')
</script>
