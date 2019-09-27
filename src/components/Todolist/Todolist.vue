<template>
  <div id="todolist">
    <Input />
    <Nav />
    <ListItem />
    <ListFooter />
  </div>
</template>

<script>
import Input from '@/components/Todolist/Input.vue'
import Nav from '@/components/Todolist/Nav.vue'
import ListItem from '@/components/Todolist/ListItem.vue'
import ListFooter from '@/components/Todolist/ListFooter.vue'

export default {
  components: {
    Input,
    Nav,
    ListItem,
    ListFooter
  }
}
</script>