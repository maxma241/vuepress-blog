<template>
  <span class="px-2 py-0.5 rounded bg-gray-200 mr-1 mb-1 inline-block text-sm">{{ text }}</span>
</template>
<script setup lang="ts">
defineProps<{ text: string }>()
</script>
