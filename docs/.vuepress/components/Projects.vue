<template>
  <div>
    <md-card-header>
      <md-icon class="md-primary">build</md-icon>
      <span class="md-title">{{title}}</span>
      <md-divider class="about-inset"></md-divider>
    </md-card-header>

    <md-card-content class="about-inset">
      <div v-for="(item, index) in pro">
        <h3>
          <span class="protitle">{{index+1}}. {{item.title}}</span>
          <br />
          <div class="pro-content">
            <h4>{{item.description}}</h4>
          </div>
          <span class="meta">
            <a v-if="item.url" :href="item.url" target="_blank">Demo</a>
            <span v-show="item.url">|</span>
            <a v-if="item.repository" :href="item.repository" target="_blank">GitHub</a>
            <div class="project-tags">
              <template v-for="t in item.meta">
                <Tag :text="t" />
              </template>
            </div>
          </span>
        </h3>
        
      </div>
    </md-card-content>
  </div>
</template>
<script>
import Data from '../data'
import EnData from '../en-data'
import Tag from './Tag.vue'

export default {
  components: { Tag },
  data() {
    return {
      title: "Projects",
    };
  },
  computed: {
    pro() {
      if (this.$lang === 'en-US') {
        return EnData.projects
      }
      return Data.projects
    }
  },
};
</script>
<style lang="scss">
.project-tags {
  padding: 1px 15px;
}
.pro-content {
  margin-left: 20px;
  font-size: initial;
  h4 {
    margin-bottom: 5px;
  }
}
.meta {
  margin-left: 20px;
  font-size: 0.8em;
}
.protitle {
  font-size: 1.2em;
}
</style>