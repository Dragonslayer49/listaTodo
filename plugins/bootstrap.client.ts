import Bootstrap from "bootstrap/dist/js/bootstrap";
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide("bootstrap", Bootstrap);
});