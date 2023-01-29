<template>
    <br>
    <div>
      <h2>Login</h2>       
    </div>   
    <br>    
    <form>
      <div>
        <label for="email">Email:</label>
        <br>
        <input type="email" id="email">
      </div>
      <br>
      <div>
        <label for="password">Password:</label>
        <br>
        <input type="password" id="password">
      </div>
        <br>
        <button>Send</button>
    </form>
  </template>
  
  
  <style scoped>
  
  
  form {
    padding: 30px;
    background-color: rgb(247, 232, 101)
    
  }
  
  
  button {
      font-weight: bold;
      font-size:20px;
      padding: 15px;
      color: rgb(0, 0, 0);
      background-color: #24c7bc;
      border: none;
      border-radius: 10px;
  }
  
  input {
    border: none;
    padding: 5px;
  }
  </style>