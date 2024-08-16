<template>
    <div class="user-connections">
      <h2>Connections</h2>
      <ul class="connection-list">
        <li v-for="connection in connections" :key="connection.name" class="connection-item">
          <img :src="connection.photo" alt="User Photo" />
          <div class="connection-info">
            <h3>{{ connection.name }}</h3>
            <p>{{ connection.connections }} Connections</p>
          </div>
          <button class="btn-remove" @click="removeConnection(connection)">Remove</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const connections = ref([
    { name: 'Victor Mejia', connections: 46, photo: './assets/IMAGENANA.png' },
    { name: 'Daniel Jimenez', connections: 123, photo: './assets/IMAGENANA.png' },
    { name: 'Camila Sepulveda', connections: 92, photo: './assets/IMAGENANA.png' },
    { name: 'Alexander Hernandez', connections: 60, photo: './assets/IMAGENANA.png' },
    { name: 'Mario Cortes', connections: 13, photo: './assets/IMAGENANA.png' },
  ]);
  
  const removeConnection = (connection: any) => {
    connections.value = connections.value.filter(conn => conn.name !== connection.name);
  };
  </script>
  
  <style scoped lang="scss">
  .user-connections {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  
    h2 {
      font-size: 18px;
      margin-bottom: 20px;
    }
  
    .connection-list {
      list-style: none;
      padding: 0;
  
      .connection-item {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
  
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-right: 20px;
        }
  
        .connection-info {
          flex: 1;
  
          h3 {
            margin: 0;
            font-size: 16px;
          }
  
          p {
            margin: 4px 0;
            color: #888;
          }
        }
  
        .btn-remove {
          background-color: #f44336;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
        }
      }
    }
  }
  </style>
  