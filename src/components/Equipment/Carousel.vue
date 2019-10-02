<template>
  <div id="carousel">
    <b-jumbotron>
      <!-- controls讓他可以左右動，indicators讓底下有槓槓 -->
      <b-carousel
        :interval="3000"
        controls
        indicators
        background="black"
      >
        <b-carousel-slide
          v-for="cart in this.$store.state.carts"
          :key="cart.Item"
        >
          <h3>{{ cart.Item }}</h3>
          <p class="carotext">{{ cart.text }}</p>
          <template v-slot:img>
            <img
              class="d-block"
              width="512"
              height="340"
              :src="cart.src"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>
      </b-carousel>
      <!-- 綁定一個id是modal-center的b-modal標籤 -->
      <b-button
        v-b-modal.modal-center
        variant="info"
      >Cart (0)</b-button>
    </b-jumbotron>
    <!-- modal + table -->
    <Modal />
  </div>
</template>

<script>
  import Modal from "@/components/Equipment/Modal.vue";

  export default {
    components: {
      Modal
    }
  };
</script>

<style scoped>
  .jumbotron {
    padding: 0;
    margin-bottom: 1rem;
  }
  h3 {
    font-family: monospace;
    font-size: 2.15rem;
  }
  .carotext {
    font-family: monospace;
  }
  .d-block {
    margin: auto;
    opacity: 0.6;
  }
</style>

<style src="@/assets/style.css" />