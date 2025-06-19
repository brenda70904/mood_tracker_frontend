<script setup>
import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/entries">紀錄列表</router-link>
      <router-link to="/new">新增紀錄</router-link>
    </nav>
    <nav>
      <router-view></router-view>
    </nav>
  </div>
  </template>

<style>
nav{
  padding:10px;
}
router-link {
  margin-right: 10px;
}
</style>
