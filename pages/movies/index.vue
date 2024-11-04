<script setup>
/*
  Local middleware
  definePageMeta({
      middleware(to, from) {

      }
    })
*/

definePageMeta({
  middleware: ["logger"]
})

</script>

<template>
  <MovieSearch/>
</template>