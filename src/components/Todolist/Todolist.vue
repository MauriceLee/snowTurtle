<template>
  <div id="todolist">
    <Input />
    <b-card no-body>
      <Nav />
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