<template>
    <div class="user-projects">
      <h2>Project List</h2>
      <table>
        <thead>
          <tr>
            <th>Project</th>
            <th>Leader</th>
            <th>Team</th>
            <th>Progress</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="project in projects" :key="project.name">
            <td>{{ project.name }}</td>
            <td>{{ project.leader }}</td>
            <td>{{ project.team }}</td>
            <td>{{ project.progress }}%</td>
            <td>
              <button class="btn-progress">Update</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const projects = ref([
    { name: 'BGC eCommerce App', leader: 'Eileen', team: 'Design', progress: 78 },
    { name: 'Falcon Logo Design', leader: 'Owen', team: 'Marketing', progress: 25 },
    { name: 'Dashboard Design', leader: 'Keith', team: 'UI/UX', progress: 50 },
    { name: 'Foodista mobile app', leader: 'Marine', team: 'Development', progress: 34 },
    { name: 'Django Email App', leader: 'Harmonia', team: 'Python', progress: 51 },
  ]);
  </script>
  
  <style scoped lang="scss">
  .user-projects {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  
    h2 {
      font-size: 18px;
      margin-bottom: 20px;
    }
  
    table {
      width: 100%;
      border-collapse: collapse;
  
      th, td {
        padding: 12px;
        text-align: left;
      }
  
      th {
        background-color: #f4f4f4;
      }
  
      tr:nth-child(even) {
        background-color: #f9f9f9;
      }
  
      .btn-progress {
        background-color: #4CAF50;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  }
  </style>
  