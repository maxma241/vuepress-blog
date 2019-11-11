<template>
  <div>
    <md-card-header>
      <md-icon class="md-primary">work</md-icon>
      <span class="md-title">{{title}}</span>
      <md-divider class="about-inset"></md-divider>
    </md-card-header>

    <md-card-content class="about-inset">
      <div v-for="exp in exps" :key="exp.workAt">
        <h3>
          <a v-if="exp.companyUrl" :href="exp.companyUrl" target="_blank">{{exp.workAt}}</a>
          <span v-else>{{exp.workAt}}</span>
          <div>{{exp.position}}</div>
        </h3>
        <div class="exp-content">
          <span>{{exp.duration}}</span>
          <h4>{{exp.description}}</h4>
          <ul>
            <li v-for="item in exp.highlights" :key="item">
              <span v-html="item"></span>
            </li>
          </ul>
        </div>
        <div v-if="exp.projects" class="exp-content">
          <span>參與專案</span>
          <ul>
            <li v-for="project in exp.projects">
              <h4>{{project.name}}</h4>
              <div>{{project.description}}</div>
              <template v-for="t in project.tags">
                <Tag :text="t" color="#b0b1b5" />
              </template> 
            </li>
          </ul>
        </div>
      </div>
    </md-card-content>
  </div>
</template>
<script>
import Data from "../data";
import Tag from './Tag.vue'

export default {
  components: { Tag },
  // props:['exps'],
  data() {
    return {
      exps: Data.experiences,
      title: "Work Experience"
    };
  }
};
</script>
<style lang="scss">
ul {
  list-style-type: circle;
  font-size: 1.1em;
  li {
    display: list-item;
    margin-left: 30px;
  }
}
.exp-content {
  margin-left: 20px;
}
</style>