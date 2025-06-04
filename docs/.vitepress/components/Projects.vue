<template>
  <section>
    <h2 class="text-xl font-bold mb-4">{{ title }}</h2>
    <div v-for="(item, index) in pro" :key="index" class="mb-4">
      <h3 class="font-semibold">{{ index + 1 }}. {{ item.title }}</h3>
      <p class="ml-4">{{ item.description }}</p>
      <p class="ml-4 text-sm">
        <a v-if="item.url" :href="item.url" target="_blank">Demo</a>
        <span v-if="item.url && item.repository"> | </span>
        <a v-if="item.repository" :href="item.repository" target="_blank">GitHub</a>
      </p>
      <div class="ml-4 mt-1">
        <Tag v-for="t in item.meta" :key="t" :text="t" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import data from '../../data'
import enData from '../../en-data'
import Tag from './Tag.vue'

const lang = typeof document !== 'undefined' &&
  document.documentElement.lang === 'en-US'
  ? 'en'
  : 'zh'
const pro = computed(() => lang === 'en' ? enData.projects : data.projects)
const title = lang === 'en' ? 'Projects' : '專案'
</script>
