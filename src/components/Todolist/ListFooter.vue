<template>
  <div id="listFooter">
    <!-- d-flex justify-content-between當有兩個子元素時會撐到最大，之後再增加就是擺在之中彼此等距離 -->
    <b-card-footer class="d-flex justify-content-between">
      <span>還有 {{ this.$store.state.todos.length }} 筆任務未完成</span>
      <a
        href="#"
        @click="destroyAll"
      >清除所有任務</a>
    </b-card-footer>
  </div>
</template>

<script>
  export default {
    methods: {
      destroyAll() {
        if (confirm("是否清除所有任務")) this.$store.commit("SET_TODOS", []);
      }
    }
  };
</script>