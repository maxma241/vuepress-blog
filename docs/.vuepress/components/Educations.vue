<template>
  <div>
    <md-card-header>
      <md-icon class="md-primary">book</md-icon>
      <span class="md-title">{{ title }}</span>
      <md-divider class="about-inset"></md-divider>
    </md-card-header>

    <md-card-content class="about-inset">
      <div v-for="item in edu">
        <h3>{{ item.educatedAt }}, {{ item.title }}</h3>
        <div class="edu-content">
          <span>{{ item.duration }}</span>
          <h4>{{ item.description }}</h4>
        </div>
      </div>
    </md-card-content>
  </div>
</template>
<script>
import Data from '../data'
import EnData from '../en-data'

export default {
  data() {
    return {
      title: 'Education',
    }
  },
  computed: {
    edu() {
      if (this.$lang === 'en-US') {
        return EnData.educations
      }
      return Data.educations
    },
  },
}
</script>
<style lang="scss">
.edu-content {
  margin-left: 20px;
}
</style>
