<template>
  <section>
    <h2 class="text-xl font-bold mb-2">About</h2>
    <p class="ml-4" v-html="about"></p>
  </section>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import data from '../data'
import enData from '../en-data'

const lang = document.documentElement.lang === 'en-US' ? 'en' : 'zh'
const about = computed(() => lang === 'en' ? enData.introduce.about : data.introduce.about)
</script>
