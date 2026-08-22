<template>
  <section class="mb-12">
    <h2 class="text-3xl font-bold mb-8 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
      {{ title }}
    </h2>

    <!-- Timeline View -->
    <div v-if="viewMode === 'timeline'" class="relative border-l-2 border-blue-200 dark:border-blue-900 ml-3 md:ml-6 space-y-12">
      <div v-for="exp in exps" :key="exp.workAt" class="relative pl-8 md:pl-10">
        <!-- Timeline Dot -->
        <div class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 shadow"></div>

        <div class="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white">
            <a v-if="exp.companyUrl" :href="exp.companyUrl" target="_blank" class="hover:text-blue-500 transition-colors">{{ exp.workAt }}</a>
            <span v-else>{{ exp.workAt }}</span>
          </h3>
          <span class="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
            {{ exp.duration }}
          </span>
        </div>

        <div class="text-lg font-medium text-blue-600 dark:text-blue-400 mb-4">{{ exp.position }}</div>

        <p v-if="exp.description" class="text-gray-700 dark:text-gray-300 mb-4 italic border-l-4 border-gray-200 dark:border-gray-700 pl-4 py-1">
          {{ exp.description }}
        </p>

        <ul class="list-disc list-outside ml-5 mb-6 text-gray-700 dark:text-gray-300 space-y-1 marker:text-gray-400">
          <li v-for="h in exp.highlights" :key="h" v-html="h"></li>
        </ul>

        <div v-if="exp.projects && exp.projects.length" class="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-5 border border-gray-100 dark:border-gray-700">
          <h4 class="font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
            <div class="i-carbon-portfolio text-blue-500"></div>
            {{ lang === 'en' ? 'Key Projects' : '參與專案' }}
          </h4>
          <div class="space-y-4">
            <div v-for="p in exp.projects" :key="p.name" class="border-b last:border-0 border-gray-200 dark:border-gray-700 pb-4 last:pb-0">
              <div class="font-semibold text-gray-800 dark:text-gray-200">{{ p.name }}</div>
              <div class="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-2">{{ p.description }}</div>
              <div class="flex flex-wrap gap-1.5 mt-2">
                <Tag v-for="t in p.tags" :key="t" :text="t" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Card View -->
    <div v-else class="grid grid-cols-1 gap-6">
      <div v-for="exp in exps" :key="exp.workAt" class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:p-8 hover:shadow-md transition-shadow">
        <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              <a v-if="exp.companyUrl" :href="exp.companyUrl" target="_blank" class="hover:text-blue-500 transition-colors">{{ exp.workAt }}</a>
              <span v-else>{{ exp.workAt }}</span>
            </h3>
            <div class="text-lg font-medium text-blue-600 dark:text-blue-400">{{ exp.position }}</div>
          </div>
          <span class="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full w-fit mt-3 md:mt-0">
            {{ exp.duration }}
          </span>
        </div>

        <p v-if="exp.description" class="text-gray-700 dark:text-gray-300 mb-6 italic bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-100 dark:border-gray-800">
          {{ exp.description }}
        </p>

        <div class="mb-6">
          <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">{{ lang === 'en' ? 'Highlights' : '工作亮點' }}</h4>
          <ul class="list-disc list-outside ml-5 text-gray-700 dark:text-gray-300 space-y-1 marker:text-blue-400">
            <li v-for="h in exp.highlights" :key="h" v-html="h"></li>
          </ul>
        </div>

        <div v-if="exp.projects && exp.projects.length">
          <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-3">{{ lang === 'en' ? 'Projects' : '參與專案' }}</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="p in exp.projects" :key="p.name" class="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
              <div class="font-semibold text-gray-800 dark:text-gray-200 mb-1">{{ p.name }}</div>
              <div class="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2" :title="p.description">{{ p.description }}</div>
              <div class="flex flex-wrap gap-1.5">
                <Tag v-for="t in p.tags" :key="t" :text="t" />
              </div>
            </div>
          </div>
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
const exps = computed(() => lang === 'en' ? enData.experiences : data.experiences)
const title = lang === 'en' ? 'Work Experience' : '工作經歷'
</script>
