<template>
  <section>
    <h2 class="text-xl font-bold mb-4">{{ title }}</h2>
    <div v-for="exp in exps" :key="exp.workAt" class="mb-6">
      <h3 class="font-semibold">
        <a v-if="exp.companyUrl" :href="exp.companyUrl" target="_blank">{{ exp.workAt }}</a>
        <span v-else>{{ exp.workAt }}</span>
      </h3>
      <div class="ml-4 text-sm">
        <div>{{ exp.position }}</div>
        <div>{{ exp.duration }}</div>
        <p>{{ exp.description }}</p>
        <ul class="ml-4 list-disc">
          <li v-for="h in exp.highlights" :key="h" v-html="h"></li>
        </ul>
        <div v-if="exp.projects" class="ml-4">
          <h4 class="font-medium mt-2">{{ lang === 'en' ? 'Projects' : '參與專案' }}</h4>
          <ul class="ml-4 list-disc">
            <li v-for="p in exp.projects" :key="p.name">
              <strong>{{ p.name }}</strong> - <span>{{ p.description }}</span>
              <div class="mt-1">
                <Tag v-for="t in p.tags" :key="t" :text="t" />
              </div>
            </li>
          </ul>
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

const lang = typeof document !== 'undefined' &&
  document.documentElement.lang === 'en-US'
  ? 'en'
  : 'zh'
const exps = computed(() => lang === 'en' ? enData.experiences : data.experiences)
const title = lang === 'en' ? 'Work Experience' : '工作經歷'
</script>
