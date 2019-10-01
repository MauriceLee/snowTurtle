<template>
  <div id="Nav">
    <b-card-header header-tag="nav">
      <b-nav
        card-header
        tabs
      >
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