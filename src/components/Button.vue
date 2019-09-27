// 做一個最上方的按鈕群來做分頁

<template>
  <div id="button">
    <!-- 加no-gutters讓button之間沒有空隙 -->
    <div class="row no-gutters">
      <div class="col-sm">
        <router-link :to="'home'">
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