<template>
  <div id="Nav">
    <b-card-header header-tag="nav">
      <!-- card-header為了要讓padding=0，tabs為了要讓nav有框線 -->
      <b-nav
        card-header
        tabs
      >
        <!-- 三個屬性是為了nav與router結合時的寫法 -->
        <b-nav-item
          to="/todolist"
          exact
          exact-active-class="active"
        >
          <router-link to="/todolist">全部</router-link>
        </b-nav-item>
        <b-nav-item
          to="/todolist/active"
          exact
          exact-active-class="active"
        >
          <router-link to="/todolist/active">進行中</router-link>
        </b-nav-item>
        <b-nav-item
          to="/todolist/complete"
          exact
          exact-active-class="active"
        >
          <router-link to="/todolist/complete">已完成</router-link>
        </b-nav-item>
      </b-nav>
    </b-card-header>
  </div>
</template>