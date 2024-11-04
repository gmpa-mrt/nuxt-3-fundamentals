<script setup>
const route = useRoute()
/*
    Create client side request
    const res = await $fetch(`http://www.omdbapi.com/?apikey=6b428e5f&i=${route.params.id}`)
 */

/*
  Longer way
  const {data} = useAsyncData(
      `movie/${route.params.id}`, // Prevent no refresh
      () => $fetch(`http://www.omdbapi.com/?apikey=6b428e5f&i=${route.params.id}`),
      {
        pick: ["Plot", "Title"] // shorthand of transform
  /!*      transform(data) {
          return {
            title: data.Title,
            plot: data.Plot
          }
        }*!/
      }
  )
*/

// httpbin.org/status/500

/* Short way */
const {data} = await useFetch(
    `http://www.omdbapi.com/?apikey=6b428e5f&i=${route.params.id}`,
    {
      pick: ["Plot", "Title", "Poster"],
      key: `movie/${route.params.id}`,
      onResponse({request, response}) {
        if (response._data.Response === "False") {
          showError({statusCode: 404, statusMessage: "Page not found!"})
        }
      },
      onResponseError({response}) {
        showError({statusCode: 404, statusMessage: "Page not found!"})
      },
      onRequestError() {
        showError({statusCode: 500, statusMessage: "noes!"})
      }
    }
)

useHead({
  title: data.value.Title,
  meta: [
    {name: "description", content: data.value.Plot},
    {property: "og:description", content: data.value.Plot},
    {property: "og:image", content: data.value.Poster},
    {name: "twitter:card", content: `summary_large_image`}
  ]
})

</script>

<template>
  <pre>
    {{ data }}
  </pre>
</template>

<style scoped>

</style>