export default defineNuxtRouteMiddleware((to, from) => {
    const userIsLoggedIn = false
    if(!userIsLoggedIn) {
      //  return abortNavigation("You are not allowed to visite /admin page!")
        return navigateTo({name:'login'})
    }
})
