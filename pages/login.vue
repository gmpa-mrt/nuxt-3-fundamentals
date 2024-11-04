<script setup lang="ts">
  // const isLoggedIn = useIsLoggedIn()
  const userStore = useUserStore()
  definePageMeta({
    layout:false
  })

</script>

<template>
  <form  @submit.prevent="userStore.login()">
    <h1>Login</h1>
    <label>
      Username
      <input type="text">
    </label>
    <label>
      Password
      <input type="password">
    </label>

    <button type="submit">Login</button>
  </form>
</template>

<style scoped>

</style>