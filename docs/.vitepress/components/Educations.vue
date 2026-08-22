<template>
  <section class="mb-12">
    <h2 class="text-3xl font-bold mb-8 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
      {{ title }}
    </h2>

    <!-- Timeline View -->
    <div v-if="viewMode === 'timeline'" class="relative border-l-2 border-blue-200 dark:border-blue-900 ml-3 md:ml-6 space-y-8">
      <div v-for="item in edu" :key="item.educatedAt" class="relative pl-8 md:pl-10">
        <!-- Timeline Dot -->
        <div class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 shadow"></div>

        <div class="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ item.educatedAt }}</h3>
          <span class="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
            {{ item.duration }}
          </span>
        </div>

        <div class="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">{{ item.title }}</div>
        <p class="text-gray-700 dark:text-gray-300">{{ item.description }}</p>
      </div>
    </div>

    <!-- Card View -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div v-for="item in edu" :key="item.educatedAt" class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
        <div class="flex flex-col mb-4">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1">{{ item.educatedAt }}</h3>
          <div class="text-lg font-medium text-blue-600 dark:text-blue-400 mb-3">{{ item.title }}</div>
          <span class="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full w-fit">
            {{ item.duration }}
          </span>
        </div>
        <p class="text-gray-700 dark:text-gray-300">{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import data from '../../data'
import enData from '../../en-data'

defineProps<{
  viewMode: 'timeline' | 'card'
}>()

const lang = typeof document !== 'undefined' &&
  document.documentElement.lang === 'en-US'
  ? 'en'
  : 'zh'
const edu = computed(() => lang === 'en' ? enData.educations : data.educations)
const title = lang === 'en' ? 'Education' : '學歷'
</script>
