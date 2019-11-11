<template>
<div class="skill">
  <h3>技能關鍵字</h3>
  <span class="skill-item" v-for="s in skills" :key="s">
    {{ s }}
  </span>
</div>
</template>

<script>
import { useMySkillData } from '../compositions/skill.js';
import Tag from './Tag.vue'

export default {
  components: { Tag },
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
  padding-left: 20px;
  &-item {
    display: inline-block;
    margin: 5px 10px;
    background-color: #f0db4f;
    padding: 3px 15px;
    border-radius: 5px;
    font-size: 14px;
    line-height: 18px;
  }
}
</style>