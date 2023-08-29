<script setup lang="js">
import {ref} from 'vue'
const editMode=ref(false);
const {$bootstrap} = useNuxtApp();
const modalElement = ref();
const modalisko =ref();
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
}


function trybedycji() {

}
let x="pozycja na liscie zostala przejeta"
function edytuj(index, tekst) {
// items.value.set(item,text: x.value);
  items.value.vm.$set(index,tekst)
  editMode.value=false;
}

function usun(item) {
  let spliced = items.value.splice(item, 1);

}

function popup() {
  console.log("dzien dobry");
  modalisko.value = new nuxtApp.$bootstrap.Modal(modalElement.value, {
  });

  modalisko.value.show();

}
</script>

<template>
<Modalisko ref="modalElement"/>
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
                <div id="lista" class="d-flex align-self-start justify-content-center">

                  <ul>
<div v-if="editMode">
  <form @submit.prevent="zmien">

    <input v-model="zmienic" type="text"/>

  </form>
  <button type="button" @click=edytuj(index,zmienic) class="btn btn-outline-info">zapisz</button>

  <button type="button" @click="editMode = false" class="btn btn-outline-danger">anuluj</button>
</div>
                    <div v-else>
                    <li :key="index" v-for="(item,index,id) in items">
                      {{ item.text }}-{{ index }}

                      <br>
                      <button type="button" @click="editMode=true" class="btn btn-outline-info">edytuj</button>

                      <button type="button" @click=usun(index) class="btn btn-outline-danger">usun</button>

                    </li>
                      <Lista
                      v-for="(item, index) in items"
                      :key="item.id"
                      :napis="item.text"
                      @remove="items.splice(index, 1)"
                      />
                    </div>

                  </ul>
                </div>


                <div id="dolnyBar" class="d-flex  align-self-end justify-content-center">
                  <form @submit.prevent="dodaj">

                    <input v-model="tekst" type="text"/>

                    <h4>dodaj cos do listy</h4>

                  </form>
                </div>


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

ul {
  list-style-type: none;
  text-align: center;
  padding: 1rem;
  width: 100%;
}

li {
  width: 100%;
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