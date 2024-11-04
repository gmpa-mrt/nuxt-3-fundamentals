<script setup>
  const userStore = useUserStore()
  // const isLoggedIn = useIsLoggedIn()
</script>

<template>
  <div>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/movies">Movies</NuxtLink>
      <NuxtLink v-if="!userStore.isLoggedIn" to="/login">Login</NuxtLink>
      <button v-else @click.prevent="userStore.logout()">Logout</button>
    </nav>
  </div>
  <slot></slot>
</template>