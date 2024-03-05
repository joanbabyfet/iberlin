export default defineNuxtRouteMiddleware((to, from) => {
    //是否维护中
    let isMaintenance = false;
    if (isMaintenance) {
        if (to.path.startsWith('/') && to.path !== '/maintenance') {
            return navigateTo('/maintenance');
        }
    }
})