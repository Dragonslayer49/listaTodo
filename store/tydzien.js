// stores/counter.js
import { defineStore } from "pinia";

import { reactive, computed } from "vue";
let idd = 0;
export const useWEEKStore = defineStore("tydzien", {
  state: () => ({
    WEEK: [
      {
        name: "MONDAY",
        items: [{ id: idd++, text: "dodawaj i usuwaj rzeczy" }],
      },
      {
        name: "TUESDAY",
        items: [{ id: idd++, text: "dodawaj i usuwaj rzeczy" }],
      },
      {
        name: "WEDNSDAY",
        items: [{ id: idd++, text: "dodawaj i usuwaj rzeczy" }],
      },
      {
        name: "THURDAY",
        items: [{ id: idd++, text: "dodawaj i usuwaj rzeczy" }],
      },
      {
        name: "FRIDAY",
        items: [{ id: idd++, text: "dodawaj i usuwaj rzeczy" }],
      },
      {
        name: "SATURDAY",
        items: [{ id: idd++, text: "dodawaj i usuwaj rzeczy" }],
      },
      {
        name: "SUNDAY",
        items: [{ id: [idd++], text: ["dodawaj i usuwaj rzeczy"] }],
      },
    ],
  }),
  actions: {
    dodaj(tekst, arr) {
      const czyjest = arr.filter((i) => i.text === tekst);
      if (czyjest.length) {
        //tutaj funckja z modalem miala byc ale modal nie dziala jeszcze
      } else {
        if (tekst != null) {
          arr.push({ id: idd++, text: tekst });
        } else {
          console.log("nie");
        }
      }
      let i = 0;
      for (i; i < arr.length; i++) {
        console.log(arr[i].text);
      }
    }, //DODAJE NOWY TEKST DO ARRAYA

    edytujItemy(zmien, arr, index) {
      arr[index].text = zmien;
      //edytuje tekst
    },
  },
  persist: true,
});
