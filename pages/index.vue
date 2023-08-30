<script setup lang="js">
import {ref} from 'vue'

const {$bootstrap} = useNuxtApp();
const modalElement = ref();
const modalisko = ref();
const nuxtApp = useNuxtApp();
let id = 0;
const tekst = ref()
const items = ref([{id: id++, text: 'jeden'}, {id: id++, text: 'dwa'}, {id: id++, text: "trzy"}])

function dodaj() {
  const czyjest = items.value.filter((i) => i.text === tekst.value);
  if (czyjest.length) {
    popup()
  }
      // if (items.value.indexOf((i) => i.text === tekst.value) >= 0) {
      //   popup()
      //
  // }
  else {


    if (tekst.value != null) {
      items.value.push({id: id++, text: tekst.value})
      tekst.value = null;
    } else {
      console.log("nie");
    }
  }
}       //DODAJE NOWY TEKST DO ARRAYA ITEMS

function edytujItemy(index,zmien) {
  items.value[index].text=zmien;
}

function popup() {
  console.log("dzien dobry");
  modalisko.value = new nuxtApp.$bootstrap.Modal(modalElement.value, {});

  modalisko.value.show();

}       //MA POKAZYWAC MODALISKO ALE NIE DZIALA JESZCZE
</script>

<template>
  <Modalisko ref="modalElement"/>      <!--modalisko sie jeszcze nie pokazue-->

  <main>

    <div class="text-primary justify-content-around d-flex">

      <h1>WITAJ</h1></div>
    <hr>
    <div class="row">
      <div id="NaSrodek" class="d-flex justify-content-around align-items-center col-12 h-100">
        <div id="blok" class="text-light h-100">


          <div class="containter">
            <div class="row">

              <h2 class="d-flex justify-content-around align-self-start">Lista</h2>
              <div id="lista" class="d-flex flex-column align-self-start justify-content-center">

                <Lista
                    v-for="(item, index) in items"
                    :key="item.id"
                    :napis="item.text"
                    @usun="items.splice(index, 1)"
                    @edytuj="(zmien)=>edytujItemy(index,zmien)"
                />                                                                  <!--LISTA-->

              </div>


              <div id="dolnyBar" class="d-flex  align-self-end justify-content-center">
                <form @submit.prevent="dodaj">

                  <input v-model="tekst" type="text"/>

                  <h4>dodaj cos do listy</h4>

                </form>
              </div>       <!--input nowego tekstu do arraya items-->


            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

</template>

<style scoped>
main {
  min-height: 100vh;
}
#blok {

  background-color: #6797c4;
  min-width: 30rem;
  min-height: 40rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#NaSrodek {

  min-height: calc(100vh - 89px);
}

#lista {
  column-count: auto;

}

</style>