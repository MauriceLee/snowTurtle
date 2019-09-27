<template>
  <div id="button">
    <div class="row no-gutters">
      <div class="col-sm">
        <router-link :to="'/'">
          <b-button
            block
            variant="outline-primary"
          >Home</b-button>
        </router-link>
      </div>
      <div class="col-sm">
        <router-link :to="'equipment'">
          <b-button
            block
            variant="outline-primary"
          >Equipment</b-button>
        </router-link>
      </div>
      <div class="col-sm">
        <router-link :to="'todolist'">
          <b-button
            block
            variant="outline-primary"
          >Todolist</b-button>
        </router-link>
      </div>
      <div class="col-sm">
        <router-link :to="'register'">
          <b-button
            block
            variant="outline-primary"
          >Register</b-button>
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
.row {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>