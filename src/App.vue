<template>
  <div id="warpper">
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">LAA OBD-Tracking System</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <template v-if="$store.state.isAuthenticated">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/measurements" class="nav-link">Measurements</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/user-setttings" class="nav-link">User Settings</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/raspberries" class="nav-link" >Raspberry Settings</router-link>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto">
              <li class="nav-item me-lg-2 mb-2 mb-lg-0">
                <div class="d-grid">
                  <router-link class="btn btn-success" to="my-account">My Account</router-link>
                </div>
              </li>
            </ul>
          </template>
          <template v-else>
            <ul class="navbar-nav ms-auto">
              <li class="nav-item me-lg-2 mb-2 mb-lg-0">
                <div class="d-grid">
                  <router-link class="btn btn-light" to="/registration">Register</router-link>
                </div>
              </li>
              <li class="nav-item">
                <div class="d-grid">
                  <router-link class="btn btn-success" to="/log-in">Login</router-link>
                </div>
              </li>
            </ul>
          </template>
        </div>
      </div>
    </nav>
    <section class="container-fluid">
      <router-view/>
    </section>
    <footer class="d-flex flex-wrap justify-content-center py-3 my-4 border-top">
      <p class="justify-text-centered">Copyright © FH Aachen LAA</p>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  beforeCreate() {
    this.$store.commit('initializeStore')

    const token = this.$store.state.token

    if (token) {
      axios.defaults.headers.common['Authorization'] = "Token " + token
    } else {
      axios.defaults.headers.common['Authorization'] = ""
    }
  },
}
</script>

<style lang="scss">
@import  '../node_modules/bootstrap';
</style>
