<template>
  <section class="mb-12">
    <h2 class="text-3xl font-bold mb-8 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
      {{ title }}
    </h2>

    <!-- Timeline View -->
    <div v-if="viewMode === 'timeline'" class="relative border-l-2 border-blue-200 dark:border-blue-900 ml-3 md:ml-6 space-y-10">
      <div v-for="(item, index) in pro" :key="index" class="relative pl-8 md:pl-10">
        <!-- Timeline Dot -->
        <div class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 shadow"></div>

        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
          {{ item.title }}
        </h3>

        <p class="text-gray-700 dark:text-gray-300 mb-3">{{ item.description }}</p>

        <div class="flex items-center gap-4 text-sm mb-4">
          <a v-if="item.url" :href="item.url" target="_blank" class="flex items-center gap-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
            <div class="i-carbon-launch"></div> Demo
          </a>
          <a v-if="item.repository" :href="item.repository" target="_blank" class="flex items-center gap-1 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
            <div class="i-carbon-logo-github"></div> GitHub
          </a>
        </div>

        <div class="flex flex-wrap gap-1.5 mt-2">
          <Tag v-for="t in item.meta" :key="t" :text="t" />
        </div>
      </div>
    </div>

    <!-- Card View -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div v-for="(item, index) in pro" :key="index" class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 flex flex-col h-full hover:shadow-md transition-shadow">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">{{ item.title }}</h3>

        <p class="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{{ item.description }}</p>

        <div class="mb-4 flex flex-wrap gap-1.5">
          <Tag v-for="t in item.meta" :key="t" :text="t" />
        </div>

        <div class="flex items-center gap-4 text-sm mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
          <a v-if="item.url" :href="item.url" target="_blank" class="flex items-center gap-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors font-medium">
            <div class="i-carbon-launch"></div> Demo
          </a>
          <a v-if="item.repository" :href="item.repository" target="_blank" class="flex items-center gap-1 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors font-medium">
            <div class="i-carbon-logo-github"></div> GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import data from '../../data'
import enData from '../../en-data'
import Tag from './Tag.vue'

defineProps<{
  viewMode: 'timeline' | 'card'
}>()

const lang = typeof document !== 'undefined' &&
  document.documentElement.lang === 'en-US'
  ? 'en'
  : 'zh'
const pro = computed(() => lang === 'en' ? enData.projects : data.projects)
const title = lang === 'en' ? 'Projects' : '專屬專案'
</script>
