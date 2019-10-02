<template>
  <div id="listItem">
    <!-- b-list-group-item 才會有格線，然後dbclick寫在最外層是讓使用者在空白處也可以雙擊 -->
    <b-list-group-item @dblclick="editHandler">
      <!-- form-control是為了讓輸入框撐開，v-if是為了把其他東西清掉只留輸入框，@blur是點空白處 -->
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
      <!-- form-check，form-check-input，form-check-label都是為了讓版面排版好看，彼此有點間距 -->
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
      // 不用空字串而用null的原因是因為使用者有可能把輸入框的資料都刪光光了
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