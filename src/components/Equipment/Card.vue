<template>
  <div id="equipmentCard">
    <!-- deck是為了讓cart彼此之間有空隙 -->
    <b-card-group deck>
      <b-card
        v-for="(cart, index) in this.$store.state.carts"
        :key="cart.Item"
      >
        <b-card-img :src="cart.src"></b-card-img>
        <div class="mycard">
          <h2>{{ cart.Item }}</h2>
          <h5>
            <b-badge
              v-if="cart.discount === true"
              variant="danger"
            >特價：{{ cart.Price }} NTD</b-badge>
            <b-badge
              v-else
              variant="success"
            >售價：{{ cart.Price }} NTD</b-badge>
          </h5>
          <b-card-text>
            {{ cart.text }}
          </b-card-text>
        </div>
        <b-card-footer>
          <b-row
            class="text-center"
            no-gutters
          >
            <b-col>
              <b-button
                variant="outline-info"
                @click="minusHandler(index)"
              >－</b-button>
            </b-col>
            <b-col>
              <b-button
                disabled
                variant="light"
              >{{ cart.Number }}</b-button>
            </b-col>
            <b-col>
              <b-button
                variant="outline-info"
                @click="plusHandler(index)"
              >＋</b-button>
            </b-col>
            <b-col>
              <b-button
                variant="outline-info"
                @click="buyHandler(index)"
              >Buy</b-button>
            </b-col>
          </b-row>
        </b-card-footer>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
  export default {
    methods: {
      minusHandler(index) {
        if (this.$store.state.carts[index].Number > 0) {
          this.$store.commit("MINUS_CART_NUMBER", index);
        }
      },
      plusHandler(index) {
        this.$store.commit("PLUS_CART_NUMBER", index);
      },
      buyHandler(index) {
        this.$store.commit("BUY_CART", index);
      }
    }
  };
</script>

<style scoped>
  .card-body {
    padding: 0;
  }
  .card-footer {
    font-family: monospace;
    padding-left: 0;
    padding-right: 0;
  }
  .mycard {
    padding: 20px;
  }
  h2 {
    margin-bottom: 6px;
  }
  h5 {
    font-size: 20px;
  }
  .badge {
    line-height: 1.1;
  }
</style>