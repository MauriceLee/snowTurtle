<template>
  <div
    id="input"
    class="mb-3"
  >
    <b-input-group prepend="待辦事項">
      <b-form-input
        placeholder="準備要做的任務"
        v-model.trim="todo"
        @keyup.enter="submitHandler"
        v-focus
      ></b-form-input>
      <b-input-group-append>
        <b-button
          variant="primary"
          @click="submitHandler"
        >新增</b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        todo: ""
      };
    },
    methods: {
      submitHandler() {
        if (!this.todo) return;
        this.$store.commit("ADD_TODO", {
          content: this.todo,
          complete: false
        });
        this.todo = "";
      },
      test() {}
    }
  };
</script>