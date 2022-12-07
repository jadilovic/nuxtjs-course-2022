export default defineNuxtRouteMiddleware(() => {
    const pageCount = useVisitedPagesCount();
    pageCount.value++;
})