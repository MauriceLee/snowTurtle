<template>
  <div id="equipment">
    <Carousel />
    <Card />
  </div>
</template>

<script>
import Carousel from '@/components/Equipment/Carousel.vue'
import Card from '@/components/Equipment/Card.vue'

export default {
  components: {
    Carousel,
    Card
  }
}
</script>