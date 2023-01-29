<template>
    <nav>
        <div class="title"  >
            <h3><router-link :to="{name: 'home'}">{{title}}</router-link></h3>
        </div>
        <div>
            <ul class="links">
                <li>
                <router-link :to="{name: 'profile'}">Profile</router-link>
                </li>
                <li>
                <router-link :to="{name: 'products'}">Products</router-link>
                </li>
            </ul>
        </div>
        <button @click="$emit('buttonClicked')">Logout</button>

    </nav>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: 'NavBar1',
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    setup() {
      return {};
    },
  });
  </script>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    padding: 30px;
    align-items: center;
    background-color: #82e07679 
}

.title {
    color:rgb(56, 23, 56);      
    font-size: 35px;
    font-family: Arial, Helvetica, sans-serif;
}
nav a {
    font-weight: bold;
    color:rgb(0, 0, 0);
    padding: 0px 20px 0px 20px;
    text-decoration: none;
}

ul {
    list-style: none; 
    display: flex;   
    justify-content: center;
}

.links:visited {
    color: white;
    text-decoration: none;
}

button {
    font-weight: bold;
    font-size:12px;
    padding: 20px;
    color: white;
    background-color: #0f9cc0;
    border: none;
    border-radius: 30px;
}
</style>


