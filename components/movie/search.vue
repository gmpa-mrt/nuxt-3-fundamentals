<script setup>
  const query = ref("titanic")
  const movies = ref([])
  async function search() {
    const {Search} = await $fetch(`http://www.omdbapi.com/?apikey=6b428e5f&s=${query.value}`)
    movies.value = Search
  }

  search()
</script>
<template>
  <form @submit.prevent="search">
    <input type="text" v-model="query">
    <button>Search</button>
  </form>

  <ul>
    <li v-for="movie in movies">
      <NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID } }">
        <img :src="movie.Poster" :alt="movie.title">
      </NuxtLink>
    </li>
  </ul>
</template>
<style scoped></style>
