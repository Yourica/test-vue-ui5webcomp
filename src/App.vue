<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Shellbar from '@/components/ShellBar.vue'
</script>

<template>
  <Shellbar />
  <RouterView />
</template>

<style>
  body {
    margin: 0;
    padding: 0;
  }
</style>