<template>
  <section class="mb-12">
    <div class="flex flex-col md:flex-row items-center md:items-start gap-8 bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm">
      <div class="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex-shrink-0 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
        {{ initials }}
      </div>
      <div class="flex-1 text-center md:text-left">
        <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">
          {{ introduce.ename }} <span class="text-2xl md:text-3xl text-gray-500 dark:text-gray-400 font-normal">({{ introduce.cname }})</span>
        </h1>
        <h2 class="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
          {{ introduce.jobTitle }}
        </h2>

        <div class="flex flex-wrap justify-center md:justify-start gap-4 mb-6 text-sm text-gray-600 dark:text-gray-300">
          <div class="flex items-center gap-1">
            <div class="i-carbon-location"></div>
            {{ introduce.livedIn }}
          </div>
          <div class="flex items-center gap-1">
            <div class="i-carbon-email"></div>
            <a :href="`mailto:${introduce.email}`" class="hover:text-blue-500 transition-colors">{{ introduce.email }}</a>
          </div>
          <div class="flex items-center gap-1">
            <div class="i-carbon-logo-github"></div>
            <a :href="introduce.github" target="_blank" class="hover:text-blue-500 transition-colors">GitHub</a>
          </div>
        </div>

        <div class="prose prose-gray dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed mb-6" v-html="introduce.about"></div>

        <MySkillList />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import data from '../../data'
import enData from '../../en-data'
import MySkillList from './MySkillList.vue'

const lang = typeof document !== 'undefined' &&
  document.documentElement.lang === 'en-US'
  ? 'en'
  : 'zh'

const introduce = computed(() => lang === 'en' ? enData.introduce : data.introduce)

const initials = computed(() => {
  if (introduce.value.ename) {
    const parts = introduce.value.ename.split(' ')
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase()
    }
    return parts[0].substring(0, 2).toUpperCase()
  }
  return 'MM'
})
</script>
