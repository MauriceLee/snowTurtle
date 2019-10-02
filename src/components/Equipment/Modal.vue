<template>
  <div id="modal">
    <!-- id一定要寫才可以被另一端綁定 -->
    <b-modal
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
            @click="deleteHandler(row.index, row.item)"
          >
            Delete
          </b-button>
        </template>
      </b-table>
      <!-- 不寫show就不會顯示 -->
      <b-alert
        show
        variant="success"
      >Total price：0 NTD</b-alert>
      <!-- 不寫v-slot:modal-foot按鈕就不會在右 -->
      <template v-slot:modal-footer>
        <b-button
          variant="info"
          @click="checkoutHandler(totalPrice)"
        >Checkout</b-button>
        <b-button
          variant="secondary"
          @click="$bvModal.hide('modal-center')"
        >Cancel</b-button>
      </template>
    </b-modal>
  </div>
</template>