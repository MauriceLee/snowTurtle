<template>
  <div id="todolist">
    <Input />
    <b-card
      title="Card Title"
      no-body
    >
      <Nav />
      <ListItem />
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
    }
  };
</script>