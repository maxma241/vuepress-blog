<template>
<div>
  <span class="skill-item" v-for="s in skills" :key="s">{{ s }}</span>
</div>
</template>

<script>
import { useMySkillData } from '../compositions/skill.js';

export default {
  setup() {
    const skills = useMySkillData();

    return {
      skills
    }
  }
}
</script>

<style lang="scss" scoped>
.skill {
  &-item {
    display: inline-block;
    margin: 10px 10px;
    background-color: #f0db4f;
  }
}
</style>