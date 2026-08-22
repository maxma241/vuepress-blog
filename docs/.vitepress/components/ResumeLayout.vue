<template>
  <div class="resume-layout max-w-4xl mx-auto px-4 py-8">
    <About />

    <div class="flex justify-end mb-6 mt-12">
      <div class="inline-flex rounded-md shadow-sm" role="group">
        <button
          type="button"
          @click="viewMode = 'timeline'"
          :class="['px-4 py-2 text-sm font-medium rounded-l-lg border',
            viewMode === 'timeline'
              ? 'bg-blue-600 text-white border-blue-600 dark:bg-blue-500 dark:border-blue-500'
              : 'bg-white text-gray-900 border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600']"
        >
          Timeline
        </button>
        <button
          type="button"
          @click="viewMode = 'card'"
          :class="['px-4 py-2 text-sm font-medium rounded-r-lg border-t border-b border-r',
            viewMode === 'card'
              ? 'bg-blue-600 text-white border-blue-600 dark:bg-blue-500 dark:border-blue-500'
              : 'bg-white text-gray-900 border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600']"
        >
          Card
        </button>
      </div>
    </div>

    <Experiences :viewMode="viewMode" />
    <Projects :viewMode="viewMode" />
    <Educations :viewMode="viewMode" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import About from './About.vue'
import Experiences from './Experiences.vue'
import Projects from './Projects.vue'
import Educations from './Educations.vue'

const viewMode = ref<'timeline' | 'card'>('timeline')
</script>
