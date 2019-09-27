<template>
  <!-- 加container來把整個畫面控在中間 -->
  <div id="app" class="container">
    <Button />
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  components: {
    Button
  }  
}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
</style>
