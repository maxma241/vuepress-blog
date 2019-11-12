<template>
<div class="skill">
  <h3>{{title}}</h3>
  <span class="skill-item" v-for="s in skills" :key="s[0]" :style="{ backgroundColor: s[1], color: s[2] }">
    {{ s[0] }}
  </span>
</div>
</template>

<script>
import { useMySkillData } from '../compositions/skill.js';
import { computed } from '@vue/composition-api';
import Tag from './Tag.vue'

export default {
  components: { Tag },
  setup(props, ctx) {
    const skills = useMySkillData();
    const title = computed(() => ctx.root.$lang === 'en-US' ? 'Skills' : '技能關鍵字')
    return {
      skills,
      title
    }
  }
}
</script>

<style lang="scss" scoped>
.skill {
  padding-left: 20px;
  &-item {
    display: inline-block;
    margin: 5px 5px;
    background-color: #f0db4f;
    padding: 3px 15px;
    border-radius: 5px;
    font-size: 16px;
    line-height: 18px;
  }
}
</style>