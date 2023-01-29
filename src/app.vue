<template>
    <NavBar1
       title="Catalogo"/>
    <router-view/>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import NavBar1 from './components/NavBar1.vue';
  
  export default defineComponent({
    name: 'AppComponent',
    components: {
      NavBar1
    },
    setup() {
  
      return {
        
      } 
    },
  })
  </script>
  
  
  <style>
  *{
    padding: 0;
    margin: 0
    }
  
  #app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: black;
  }
  
  nav a.router-link-exact-active {
    color: rgb(59, 210, 162);
  }
  
  </style>
  