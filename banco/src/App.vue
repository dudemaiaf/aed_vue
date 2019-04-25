<template>
  <div id="app">
    <div id="top" class="top">
      <p>{{  heap  }}</p>
    </div>

    <div id="middle">
      <input placeholder="Nome">
      <input v-model="priority" placeholder="Prioridade">
      <v-btn
        v-on:click=insert(priority,heap)
        slot="activator"
        class="v-btn--simple"
        color="danger">Button Add
      </v-btn>
    </div>

    <div id="bottom">
      <div id="guiche">
        <p>Guiche 1</p>
        <br>
        <h1>{{  max  }}</h1>
        <v-btn
          v-on:click=pop(max,heap)
          slot="activator"
          class="v-btn--simple"
          color="danger">Button Pop
          <h1>{{  max  }}</h1>
        </v-btn>
      </div>

      <div id="guiche">
        <p>Guiche 2</p>
        <h1>{{  max  }}</h1>
        <br>
        <v-btn
          v-on:click=pop(max,heap)
          slot="activator"
          class="v-btn--simple"
          color="danger">Button Pop
          <h1>{{  max  }}</h1>
        </v-btn>
      </div>

      <div id="guiche">
        <p>Guiche 3</p>
        <h1>{{  max  }}</h1>
        <br>
        <v-btn
          v-on:click=pop(max,heap)
          slot="activator"
          class="v-btn--simple"
          color="danger">Button Pop
          <h1>{{  max  }}</h1>
        </v-btn>
      </div>

    </div>
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
var Heap = require("collections/heap");
/* eslint-disable */
import heap from '../backend/server/controllers/heap.js'
export default {
  data: () => ({
    heap: new Heap([]),
    list: [],
    priority: '',
    message: '',
    max: '',
  }),
  methods: {
    insert(value, list){
      list.push(value);
    },
    push(){},
    pop(max, list){
      max = list.max()
      list.pop()
      console.log(max)
      return max
    },
    bubbleUp(){},
    extractMax(){},
    sinkDown(){},

  },
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#logo {
  padding-top: 5px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 25px;
}

#top.top {
  border-radius: 25px;
  background-color: #ccc;
}

#bottom {
  background-color: lightgreen;
  column-count: 3;
}

#p {
  font-size: 100px
}

#button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>