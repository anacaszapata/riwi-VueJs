<template>
    <div class="user-teams">
      <h2>Teams</h2>
      <ul class="team-list">
        <li v-for="team in teams" :key="team.name" class="team-item">
          <div class="team-info">
            <h3>{{ team.name }}</h3>
            <p>{{ team.members }} Members</p>
          </div>
          <button class="btn-edit" @click="editTeam(team)">Edit</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const teams = ref([
    { name: 'React Developers', members: 72 },
    { name: 'Support Team', members: 50 },
    { name: 'UI Designer', members: 24 },
    { name: 'Vue.js Developers', members: 200 },
    { name: 'Digital Marketing', members: 34 },
  ]);
  
  const editTeam = (team) => {
    console.log(`Editing team: ${team.name}`);
  };
  </script>
  
  <style scoped lang="scss">
  .user-teams {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  
    h2 {
      font-size: 18px;
      margin-bottom: 20px;
    }
  
    .team-list {
      list-style: none;
      padding: 0;
  
      .team-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
  
        .team-info {
          h3 {
            margin: 0;
            font-size: 16px;
          }
  
          p {
            margin: 4px 0;
            color: #888;
          }
        }
  
        .btn-edit {
          background-color: #2196F3;
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
  