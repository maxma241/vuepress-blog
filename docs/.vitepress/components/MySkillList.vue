<template>
  <div class="pl-4">
    <h3 class="font-bold mb-2">{{ title }}</h3>
    <Tag v-for="s in skills" :key="s[0]" :text="s[0]" />
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import data from '../data'
import enData from '../en-data'
import Tag from './Tag.vue'

const lang = computed(() => document.documentElement.lang === 'en-US' ? 'en' : 'zh')
const skills = computed(() => lang.value === 'en' ? enData.skills : data.skills)
const title = computed(() => lang.value === 'en' ? 'Skills' : '技能關鍵字')
</script>
