<template>
  <div id="modal">
    <!-- id一定要寫才可以被另一端綁定，寫ref的原因是為了可以使用this.$refs["modal-center"].hide() -->
    <b-modal
      ref="modal-center"
      id="modal-center"
      centered
      title="Cart"
    >
      <!-- itesm，fields是寫死的就是這麼命名不可以改 -->
      <b-table
        :items="this.$store.state.buyCarts"
        :fields="this.$store.state.fields"
      >
        <template v-slot:cell(Check)="row">
          <b-button
            variant="danger"
            @click="deleteHandler(row.index)"
          >
            Delete
          </b-button>
        </template>
      </b-table>
      <!-- 不寫show就不會顯示 -->
      <b-alert
        show
        variant="success"
      >Total price：{{ this.$store.getters.totalPrice }} NTD</b-alert>
      <!-- 不寫v-slot:modal-foot按鈕就不會在右 -->
      <template v-slot:modal-footer>
        <b-button
          variant="info"
          @click="checkoutHandler"
        >Checkout</b-button>
        <b-button
          variant="secondary"
          @click="$bvModal.hide('modal-center')"
        >Cancel</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
  export default {
    methods: {
      deleteHandler(index) {
        this.$store.commit("DELETE_MODAL", index);
      },
      checkoutHandler() {
        this.$store.commit("CHECKOUT_CART");
      }
    },
    updated() {
      if (this.$store.state.closeModal === true) {
        this.$refs["modal-center"].hide();
      }
    }
  };
</script>