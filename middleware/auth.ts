export default defineNuxtRouteMiddleware(() => {
    const auth = useAuth();
    return auth.value.isAuthorized;
})