<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <img
          src="https://github.com/Kifaa26/images/blob/main/images/1693394828293.jpg?raw=true"
          alt="profile"
          class="img-fluid"
          loading="lazy"
        />
      </div>
      <div class="col">
        <h1 class="display-1">Aakifah Palekar</h1> 
        <span>{{ jobTitle[0].title }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
const jobTitle = 
computed(() => this.$store.state.jobTitle)
  onMounted(() => {
    this.$store.dispatch('fetchJobTitle')
  })
</script>

<style scoped>
</style>
