<template>
    <div>  
        <md-card-header>
            <md-icon class="md-primary">bookmark</md-icon>
            <span class="md-title">{{title}}</span>
            <md-divider class="about-inset"></md-divider>
        </md-card-header>
        
        <md-card-content class="about-inset">
            <h3 v-html="about"></h3>
        </md-card-content>
    </div>
</template>
<script>
import Data from '../data';
import EnData from '../en-data';

export default {
  data() {
    return {
      title: 'About',
    };
  },
  computed: {
    about() {
      if (this.$lang === 'en-US') {
        return EnData.introduce.about
      }
      return Data.introduce.about;
    }
  },
};
</script>
<style lang="scss">
.about-inset {
  margin-left: 25px;
}
</style>