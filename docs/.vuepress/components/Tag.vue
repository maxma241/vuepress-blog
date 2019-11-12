<template>
  <div class="tag" :style="{ backgroundColor: color || '#f0db4f' }">{{text}}</div>
</template>

<script>
export default {
  props: ["text", "color"]
};
</script>

<style lang="scss" scoped>
.tag {
  display: inline-block;
  margin: 5px 5px;
  background-color: #f0db4f;
  padding: 3px 15px;
  border-radius: 5px;
  font-size: 14px;
  line-height: 18px;
}
</style>
