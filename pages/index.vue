<script setup lang="js">
import {ref} from 'vue'
import draggable from 'vuedraggable';

const {$bootstrap} = useNuxtApp();
const modalElement = ref();
const modalisko = ref();
const pokazskonczone = ref(false);
const nuxtApp = useNuxtApp();
let id = 0;
let idd = 0;
const tekst = ref()
const items = ref([{id: id++, text: 'One'}, {id: id++, text: 'Two'}, {id: id++, text: "Three"}])
const Doneitems=ref([{idd: idd++,text:'wyniesc smieci'},{idd: idd++,text:'posprzatac dom'},{idd: idd++,text:'dodac wiecej rzeczy do donelist'}])

function DoDone(zrobione){
  Doneitems.value.push({idd: idd++,text: zrobione.value})
  // usun.items.value.splice()
  // zrobione.value = null;
}
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
  let i = 0;
  for (i; i < items.value.length; i++) {
    console.log(items.value[i].text);
  }
}       //DODAJE NOWY TEKST DO ARRAYA ITEMS

function edytujItemy(index, zmien) {
  items.value[index].text = zmien;

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

    <div class="d-flex w-100 position-relative">

      <div id="welcome" class="">
        <h1 id="welcomeText">WELCOME</h1>
      </div>
      <div class="align-self-end">
        <button type="button" class="btn btn-outline-info" @Click="pokazskonczone=true"><b>Zapisz<br/>notatki</b>
        </button>
      </div>
    </div>


    <div class="row">
      <div id="NaSrodek" class="d-flex justify-content-around align-items-center col-6 h-100">
        <div id="blok" class="d-flex flex-column text-light">


          <h2 class="align-self-center">List</h2>
          <div id="lista" class="d-flex flex-column">
            <ul>
              <draggable
                  :list="items"
              >
                <template #item="{ element }">
              <Lista
                  :key="element.id"
                  :napis="element.text"
                  :items="items"
                  @usun="items.splice(index, 1)"
                  @edytuj="(zmien)=>edytujItemy(index,zmien)"
                  @Doneitems="(zrobione)=>DoDone(zrobione)"
              />
                </template></draggable><!--LISTA-->
            </ul>
          </div>




          <div id="dolnyBar" class="d-flex align-self-center mt-auto">
            <form @submit.prevent="dodaj">

              <input v-model="tekst" type="text"/>

              <h4>dodaj cos do listy</h4>

            </form>
          </div>       <!--input nowego tekstu do arraya items-->


        </div>
      </div>

        <div id="done" class="d-flex justify-content-around align-items-center col-6 h-100">
          <div id="blokDone" class="d-flex flex-column text-light">
            <h2 class="align-self-center">Done</h2>
            <div id="lista" class="d-flex flex-column">


              <ul>
                <draggable
                    :list="Doneitems"
                >
                  <template #item="{ element }">

                <DoneList
                    :key="element.idd"
                    :napis="element.text"
                    :items="Doneitems"
                />
                  </template>
                </draggable>
              </ul>


            </div>
          </div>
        </div>
      </div>

  </main>

</template>

<style scoped>
body {
  font-family: sans-serif;
}

main {
  min-height: 100vh;
}

ul {
  list-style-type: none;
  text-align: center;
  padding: 1rem;
  width: 100%;

}

#welcomeText {


  color: #edb7b7;
}

#welcome {
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -30%);
}

#blok {

  background-color: #edb7b7;
  min-width: 30rem;
  min-height: 30rem;
  height: auto;


  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#blokDone {

  background-color: #b7edc7;
  min-width: 30rem;
  min-height: 30rem;
  height: auto;


  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}


#NaSrodek {

  min-height: calc(100vh - 89px);
}

#done {

  min-height: calc(100vh - 89px);
}

#lista {
  column-count: auto;

}

</style>