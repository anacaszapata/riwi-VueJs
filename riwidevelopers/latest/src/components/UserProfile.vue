<template>
    <div class="user-profile">
      <div class="header">
        <img class="banner" :src="bannerImage" alt="User Banner" />
        <div class="user-info">
          <img class="user-photo" :src="photo" alt="User Photo" />
          <div class="user-details">
            <h1>{{ name }}</h1>
            <p>{{ role }}</p>
            <p><i class="fas fa-map-marker-alt"></i> {{ location }}</p>
            <p><i class="fas fa-calendar-alt"></i> Joined {{ joinDate }}</p>
          </div>
          <button class="btn connected">Connected</button>
        </div>
      </div>
  
      <div class="main-content">
        <div class="sidebar">
          <div class="about">
            <h2>About</h2>
            <p><strong>Full Name:</strong> {{ name }}</p>
            <p><strong>Status:</strong> Active</p>
            <p><strong>Role:</strong> {{ role }}</p>
            <p><strong>Country:</strong> {{ country }}</p>
            <p><strong>Language:</strong> {{ language }}</p>
            <div class="contacts">
              <p><strong>Contact:</strong> {{ contact }}</p>
              <p><strong>Email:</strong> {{ email }}</p>
            </div>
            <div class="teams">
              <h2>Teams</h2>
              <p>{{ teams }}</p>
            </div>
          </div>
        </div>
  
        <div class="content">
          <div class="tabs">
            <button @click="activeTab = 'profile'" :class="{ active: activeTab === 'profile' }">Profile</button>
            <button @click="activeTab = 'team'" :class="{ active: activeTab === 'team' }">Team</button>
            <button @click="activeTab = 'projects'" :class="{ active: activeTab === 'projects' }">Projects</button>
            <button @click="activeTab = 'connections'" :class="{ active: activeTab === 'connections' }">Connections</button>
          </div>
  
          <div v-if="activeTab === 'profile'" class="activity-timeline">
            <h2>Activity Timeline</h2>
            <ul>
              <li>
                <p>Invoices have been paid</p>
                <span>12 min ago</span>
              </li>
              <li>
                <p>Client Meeting with John</p>
                <span>45 min ago</span>
              </li>
              <li>
                <p>New project created for client</p>
                <span>2 days ago</span>
              </li>
            </ul>
          </div>
  
          <div v-if="activeTab === 'team'">
            <UserTeams />
          </div>
  
          <div v-if="activeTab === 'projects'">
            <UserProjects />
          </div>
  
          <div v-if="activeTab === 'connections'">
            <UserConnections />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import UserTeams from './UserTeams.vue';
  import UserProjects from './UserProjects.vue';
  import UserConnections from './UserConnections.vue';
  
  const name = 'Ana Castrillon';
  const role = 'Coder';
  const location = 'Medellin';
  const joinDate = 'Oct 2023';
  const country = 'COL';
  const language = 'Spanish';
  const contact = '(123) 456-7890';
  const email = 'ana@gmail.com';
  const teams = 'Backend Developer (126 Members), VueJS Developer (98 Members)';
  const photo = './assets/IMAGENANA.png';
  const bannerImage = './assets/banner.png';
  const activeTab = ref('profile');
  
  </script>
  
  <style scoped lang="scss">
  .user-profile {
    display: flex;
    flex-direction: column;
  
    .header {
      position: relative;
  
      .banner {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }
  
      .user-info {
        position: absolute;
        bottom: -40px;
        left: 20px;
        display: flex;
        align-items: center;
  
        .user-photo {
          border-radius: 50%;
          width: 80px;
          height: 80px;
          border: 4px solid white;
        }
  
        .user-details {
          margin-left: 20px;
          color: white;
  
          h1 {
            margin: 0;
            font-size: 24px;
          }
  
          p {
            margin: 4px 0;
          }
        }
  
        .connected {
          margin-left: auto;
          background-color: #4CAF50;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
        }
      }
    }
  
    .main-content {
      display: flex;
      margin-top: 60px;
      padding: 20px;
  
      .sidebar {
        flex: 0 0 250px;
        padding-right: 20px;
  
        .about, .teams {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 20px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  
          h2 {
            font-size: 18px;
            margin-bottom: 10px;
          }
  
          p {
            margin: 5px 0;
          }
  
          .contacts {
            margin-top: 10px;
          }
        }
      }
  
      .content {
        flex: 1;
  
        .tabs {
          display: flex;
          justify-content: space-around;
          margin-bottom: 20px;
  
          button {
            background-color: #eee;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 4px;
  
            &.active {
              background-color: #4CAF50;
              color: white;
            }
          }
        }
  
        .activity-timeline {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  
          h2 {
            font-size: 18px;
            margin-bottom: 10px;
          }
  
          ul {
            list-style: none;
            padding: 0;
  
            li {
              display: flex;
              justify-content: space-between;
              margin-bottom: 10px;
  
              p {
                margin: 0;
              }
  
              span {
                color: #888;
              }
            }
          }
        }
      }
    }
  }
  </style>
  