<template>
  <md-list class="cus-md-list-header">
    <!--personal-->
    <md-toolbar>
      <md-list-item>
        <md-avatar class="md-large">
          <img src="http://i.imgur.com/R9HV81f.png" alt="People" />
        </md-avatar>
        <span>
          {{introduce.cname}}
          <br />
          ({{introduce.ename}})
        </span>
      </md-list-item>
    </md-toolbar>
    <md-divider class="md-inset"></md-divider>

    <md-list-item>
      <md-icon class="md-primary">email</md-icon>
      <span>{{introduce.email}}</span>
    </md-list-item>

    <md-list-item>
      <md-icon class="md-primary">code</md-icon>
      <span style="cursor: pointer">
        <a :href="introduce.github" target="_blank">github.com/maxma241</a>
      </span>
    </md-list-item>

    <md-list-item>
      <md-icon class="md-primary">location_city</md-icon>
      <span>{{introduce.livedIn}}</span>
    </md-list-item>

    <!-- <md-list-item>
      <md-icon class="md-primary">phone</md-icon>
      <span>{{introduce.phone}}</span>

      <md-divider class="md-inset"></md-divider>
    </md-list-item> -->

    <Skill />
    <!-- <Educations /> -->
    <About />
    
  </md-list>
</template>
<script>
import data from "../data";
import MySkillList from "./MySkillList.vue";
import Educations from "./Educations.vue";
import About from "./About.vue";


export default {
  components: { Skill: MySkillList, Educations, About },
  data: () => ({
    introduce: data.introduce
  })
};
</script>

<style lang="scss">
.cus-md-list-header {
  display: inline-block;
  margin: 0;
  margin-top: 40px;
  left: 0;
  width: 100%;
}
.md-list-item-content {
  justify-content: left;
}
.md-list-item {
  left: 0;
  margin: 0;
  padding: 0;
  span {
    text-align: left;
  }
}
.md-list-item .md-list-item-container {
  min-height: 38px;
}
</style>