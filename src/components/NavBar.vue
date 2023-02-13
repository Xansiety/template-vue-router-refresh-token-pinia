<script setup lang="ts">
import { useUserAuth } from "../composables/useUserAuth";
const { userData, logoutUser } = useUserAuth();
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Basic vue 3</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" v-if="!!userData">
          <RouterLink
            :to="{
              name: 'home',
            }"
            class="nav-link"
            >Home</RouterLink
          >
          <RouterLink :to="{ name: 'profile' }" class="nav-link"
            >Profile</RouterLink
          >
          <button @click="logoutUser" class="btn btn-danger">Logout</button>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
