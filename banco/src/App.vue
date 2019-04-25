<template>
  <div id="app">
    <div id="top" class="top">
      <img alt="Vue logo" src="./assets/logo.png">
    </div>

    <div id="middle">
      <input v-model="message" placeholder="Nome">
      <input v-model="priority" placeholder="Prioridade">
      <button id="button">Button</button>
    </div>

    <div id="bottom">
      <div id="guiche">
        <p>Guiche 1</p>
        <img id="logo" alt="Vue logo" src="./assets/logo.png">
      </div>

      <div id="guiche">
        <p>Guiche 2</p>
        <img id="logo" alt="Vue logo" src="./assets/logo.png">
      </div>

      <div id="guiche">
        <p>Guiche 3</p>
        <img id="logo" alt="Vue logo" src="./assets/logo.png">
      </div>

    </div>
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
/* eslint-disable */
export default {
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
  padding: 0px;
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