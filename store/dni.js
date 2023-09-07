// stores/counter.js
import { defineStore } from "pinia";
import { ref } from "vue";
let idd = 0;
let zapis = false;
export const useListStore = defineStore("lista", {
  state: () => ({
    Doneitems: [
      { idd: idd++, text: "wyniesc smieci" },
      { idd: idd++, text: "posprzatac dom" },
      { idd: idd++, text: "dodac wiecej rzeczy do donelist" },
    ],
  }),

  actions: {
    dodaj(napis) {
      this.Doneitems.push({ idd: idd++, text: napis.value });
    },
  },
  persist: true,
});
