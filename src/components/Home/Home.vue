<template>
  <div id="home">
    <Jumbotron />
    <Card />
  </div>
</template>

<script>
import Jumbotron from '@/components/Home/Jumbotron.vue'
import Card from '@/components/Home/Card.vue'

export default {
  components: {
    Jumbotron,
    Card
  }
}
</script>