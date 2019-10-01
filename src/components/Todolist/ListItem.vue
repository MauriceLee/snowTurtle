<template>
  <div id="listItem">
    <b-list-group-item @dblclick="editHandler">
      <input
        type="text"
        class="form-control"
        v-model.trim="edit"
        v-if="edit != null"
        v-focus
        @keyup.enter="submitHandler"
        @keyup.esc="cancelHandler"
        @blur="cancelHandler"
      />
      <div
        class="form-check"
        v-else
      >
        <input
          type="checkbox"
          class="form-check-input"
          v-model="complete"
        >
        <label
          class="form-check-label"
          :class="{'complete': todo.complete}"
        >{{ todo.content }}</label>
        <b-button-close @click="destroyHandler" />
      </div>
    </b-list-group-item>
  </div>
</template>

<script>
  export default {
    data() {
      return { edit: null };
    },
    props: {
      index: {
        type: Number,
        required: true
      }
    },
    computed: {
      todo() {
        return this.$store.state.todos[this.index];
      },
      complete: {
        get() {
          return this.todo.complete;
        },
        set(val) {
          this.$store.commit("UPDATE_TODO", {
            index: this.index,
            data: {
              content: this.todo.content,
              complete: val
            }
          });
        }
      }
    },
    methods: {
      destroyHandler() {
        if (confirm(`是否確認刪除 ${this.todo.content} ?`))
          this.$store.commit("REMOVE_TODO", this.index);
      },
      editHandler() {
        this.edit = this.todo.content;
      },
      submitHandler() {
        if (!this.edit) return this.destroyHandler();
        this.$store.commit("UPDATE_TODO", {
          index: this.index,
          data: {
            content: this.edit,
            complete: this.todo.complete
          }
        });
        this.edit = null;
      },
      cancelHandler() {
        this.edit = null;
      }
    }
  };
</script>

<style scoped>
  .complete {
    text-decoration: line-through;
    color: darkgray;
  }
</style>