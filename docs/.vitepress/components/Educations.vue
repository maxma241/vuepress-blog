<template>
  <section>
    <h2 class="text-xl font-bold mb-4">{{ title }}</h2>
    <div v-for="item in edu" :key="item.educatedAt" class="mb-4">
      <h3 class="font-semibold">{{ item.educatedAt }}, {{ item.title }}</h3>
      <div class="ml-4 text-sm">
        <span>{{ item.duration }}</span>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import data from '../data'
import enData from '../en-data'

const lang = document.documentElement.lang === 'en-US' ? 'en' : 'zh'
const edu = computed(() => lang === 'en' ? enData.educations : data.educations)
const title = lang === 'en' ? 'Education' : '學歷'
</script>
