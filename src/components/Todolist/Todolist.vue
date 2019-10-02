<template>
  <div id="todolist">
    <Input />
    <!-- 用b-card來增加外圍框限讓他看起來想是一個element, 然後no-body是要讓padding=0 -->
    <b-card no-body>
      <Nav />
      <!-- flush是讓整個group內的子組件都不要各自獨立(四個角不要圓角)，無法直接用在子組件上 -->
      <!-- 第三個屬性是為了傳入index給ListItem這層組件 -->
      <b-list-group flush>
        <ListItem
          v-for="index in todoIndex"
          :key="index"
          :index="index"
        />
      </b-list-group>
      <ListFooter />
    </b-card>
  </div>
</template>

<script>
  import Input from "@/components/Todolist/Input.vue";
  import Nav from "@/components/Todolist/Nav.vue";
  import ListItem from "@/components/Todolist/ListItem.vue";
  import ListFooter from "@/components/Todolist/ListFooter.vue";

  export default {
    components: {
      Input,
      Nav,
      ListItem,
      ListFooter
    },
    computed: {
      todoIndex() {
        return this.$store.getters.todoIndex;
      }
    },
    mounted() {
      this.$store.dispatch("INIT_TODOS");
    }
  };
</script>