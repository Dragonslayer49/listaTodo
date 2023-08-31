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


const Monday = ref([{id: id++, text: 'Onem'}, {id: id++, text: 'Two'}, {id: id++, text: "Three"}])
const Tuesday = ref([{id: id++, text: 'Onet'}, {id: id++, text: 'Two'}, {id: id++, text: "Three"}])
const Wednsday = ref([{id: id++, text: 'Onew'}, {id: id++, text: 'Two'}, {id: id++, text: "Three"}])
const Thursday = ref([{id: id++, text: 'Oneth'}, {id: id++, text: 'Two'}, {id: id++, text: "Three"}])
const Friday = ref([{id: id++, text: 'Onef'}, {id: id++, text: 'Two'}, {id: id++, text: "Three"}])
const Saturday = ref([{id: id++, text: 'Ones'}, {id: id++, text: 'Two'}, {id: id++, text: "Three"}])
const Sunday = ref([{id: id++, text: 'Onesu'}, {id: id++, text: 'Two'}, {id: id++, text: "Three"}])


const Doneitems = ref([{idd: idd++, text: 'wyniesc smieci'}, {idd: idd++, text: 'posprzatac dom'}, {idd: idd++, text: 'dodac wiecej rzeczy do donelist'}])

function DoDone(zrobione, index, arr) {
  console.log(arr)
  Doneitems.value.push({idd: idd++, text: zrobione.value})
  usuni(index,arr);
  // zrobione.value = null;
}

function usuni(index,arr) {
  arr.splice(index, 1)
}

function dodaj(arr) {
  const czyjest = arr.filter((i) => i.text === tekst.value);
  if (czyjest.length) {
    popup()
  }
      // if (items.value.indexOf((i) => i.text === tekst.value) >= 0) {
      //   popup()
      //
  // }
  else {


    if (tekst.value != null) {
      arr.push({id: id++, text: tekst.value})
      tekst.value = null;
    } else {
      console.log("nie");
    }
  }
  let i = 0;
  for (i; i < arr.length; i++) {
    console.log(arr[i].text);
  }
}       //DODAJE NOWY TEKST DO ARRAYA

function edytujItemy(index, zmien, arr) {
  arr[index].text = zmien;

}  //edytuje tekst

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
      <div id="NaSrodek" class="d-flex justify-content-around align-items-center col-12 h-100">
        <div id="blok" class="d-flex flex-column text-light">

          <h2 class="align-self-center">List</h2>


          <div class="row p-3">
            <div id="monday" class="col-1 dzientyg"><h3 class="align-self-center dzien">monday</h3>
                        <div id="lista" class="d-flex flex-column">
                          <ul >
                            <draggable
                                :list="Monday"
                                item-key="id"
                            >
                              <template #item="{ element,index }"
                              >

                            <Lista
                                :napis="element.text"
                                :items="Monday"
                                @usun="Monday.splice(index, 1)"
                                @edytuj="(zmien)=>edytujItemy(index, zmien, Monday)"
                                @doneitems="(zrobione)=>DoDone(zrobione, index, Monday)"
                            />
                              </template></draggable><!--LISTA-->
                          </ul>
                        </div>


            </div>
            <div id="tuesday" class="col-1 dzientyg"><h3 class="align-self-center dzien">tuesday</h3>
              <div id="lista" class="d-flex flex-column">
                <ul >
                  <draggable
                      :list="Tuesday"
                      item-key="id"
                  >
                    <template #item="{ element,index }"
                    >

                      <Lista
                          :napis="element.text"
                          :items="Tuesday"
                          @usun="Tuesday.splice(index, 1)"
                          @edytuj="(zmien)=>edytujItemy(index, zmien, Tuesday)"
                          @doneitems="(zrobione)=>DoDone(zrobione, index, Tuesday)"
                      />
                    </template></draggable><!--LISTA-->
                </ul>
              </div>


            </div>
            <div id="wednsday" class="col-1 dzientyg"><h3 class="align-self-center dzien">wednsday</h3>
              <div id="lista" class="d-flex flex-column">
                <ul >
                  <draggable
                      :list="Wednsday"
                      item-key="id"
                  >
                    <template #item="{ element,index }"
                    >

                      <Lista
                          :napis="element.text"
                          :items="Wednsday"
                          @usun="Wednsday.splice(index, 1)"
                          @edytuj="(zmien)=>edytujItemy(index, zmien, Wednsday)"
                          @doneitems="(zrobione)=>DoDone(zrobione, index, Wednsday)"
                      />
                    </template></draggable><!--LISTA-->
                </ul>
              </div>


            </div>
            <div id="thurday" class="col-1 dzientyg"><h3 class="align-self-center dzien">thurday</h3>
              <div id="lista" class="d-flex flex-column">
                <ul >
                  <draggable
                      :list="Thursday"
                      item-key="id"
                  >
                    <template #item="{ element,index }"
                    >

                      <Lista
                          :napis="element.text"
                          :items="Thursday"
                          @usun="Thursday.splice(index, 1)"
                          @edytuj="(zmien)=>edytujItemy(index, zmien, Thursday)"
                          @doneitems="(zrobione)=>DoDone(zrobione, index, Thursday)"
                      />
                    </template></draggable><!--LISTA-->
                </ul>
              </div>


            </div>
            <div id="friday" class="col-1 dzientyg"><h3 class="align-self-center dzien">friday</h3>
              <div id="lista" class="d-flex flex-column">
                <ul >
                  <draggable
                      :list="Friday"
                      item-key="id"
                  >
                    <template #item="{ element,index }"
                    >

                      <Lista
                          :napis="element.text"
                          :items="Friday"
                          @usun="Friday.splice(index, 1)"
                          @edytuj="(zmien)=>edytujItemy(index, zmien, Friday)"
                          @doneitems="(zrobione)=>DoDone(zrobione, index, Friday)"
                      />
                    </template></draggable><!--LISTA-->
                </ul>
              </div>


            </div>
            <div id="saturday" class="col-1 dzientyg"><h3 class="align-self-center dzien">saturday</h3>
              <div id="lista" class="d-flex flex-column">
                <ul >
                  <draggable
                      :list="Saturday"
                      item-key="id"
                  >
                    <template #item="{ element,index }"
                    >

                      <Lista
                          :napis="element.text"
                          :items="Saturday"
                          @usun="Saturday.splice(index, 1)"
                          @edytuj="(zmien)=>edytujItemy(index, zmien, Saturday)"
                          @doneitems="(zrobione)=>DoDone(zrobione, index, Saturday)"
                      />
                    </template></draggable><!--LISTA-->
                </ul>
              </div>


            </div>
            <div id="sunday" class="col-1 dzientyg"><h3 class="align-self-center dzien">sunday</h3>
              <div id="lista" class="d-flex flex-column">
                <ul >
                  <draggable
                      :list="Sunday"
                      item-key="id"
                  >
                    <template #item="{ element,index }"
                    >

                      <Lista
                          :napis="element.text"
                          :items="Sunday"
                          @usun="Sunday.splice(index, 1)"
                          @edytuj="(zmien)=>edytujItemy(index, zmien, Sunday)"
                          @doneitems="(zrobione)=>DoDone(zrobione, index, Sunday)"
                      />
                    </template></draggable><!--LISTA-->
                </ul>
              </div>


            </div>
          </div>


          <!--          <div id="lista" class="d-flex flex-column">-->
          <!--            <ul>-->
          <!--              <draggable-->
          <!--                  :list="items"-->
          <!--                  item-key="id"-->
          <!--              >-->
          <!--                <template #item="{ element,index }"-->
          <!--                >-->

          <!--              <Lista-->
          <!--                  :napis="element.text"-->
          <!--                  :items="items"-->
          <!--                  @usun="items.splice(index, 1)"-->
          <!--                  @edytuj="(zmien)=>edytujItemy(index,zmien)"-->
          <!--                  @doneitems="(zrobione)=>DoDone(zrobione,index)"-->
          <!--              />-->
          <!--                </template></draggable>&lt;!&ndash;LISTA&ndash;&gt;-->
          <!--            </ul>-->
          <!--          </div>-->


          <!--          <div id="dolnyBar" class="d-flex align-self-center mt-auto">-->
          <!--            <form @submit.prevent="dodaj">-->

          <!--              <input v-model="tekst" type="text"/>-->

          <!--              <h4>dodaj cos do listy</h4>-->

          <!--            </form>-->
          <!--          </div>       &lt;!&ndash;input nowego tekstu do arraya items&ndash;&gt;-->


        </div>
      </div>


      <div id="done" class="d-flex justify-content-around align-items-center col-12 h-100">
        <div id="blokDone" class="d-flex flex-column text-light">
          <h2 class="align-self-center">Done</h2>
          <div id="lista" class="d-flex flex-column">


            <ul>
              <draggable
                  :list="Doneitems"
                  item-key="id"
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
  text-align: start;
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
  min-height: 80%;
  height: auto;
  min-width:90%;
  width:auto;


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

.dzientyg{
  flex-basis: 14.2%;
  min-height:40rem;

}
.dzien{
text-align:center;
}


/*
#monday {
  background-color: cyan;
}

#tuesday {
  background-color: #008cff;
}

#wednsday {
  background-color: #8400ff;
}

#thurday {
  background-color: #ff00dd;
}

#friday {
  background-color: #ff0000;
}

#saturday {
  background-color: #ff8000;
}

#sunday {
  background-color: #ffdd00;
}

 */
</style>