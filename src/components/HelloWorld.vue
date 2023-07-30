<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)

const launchBrowser = () => {
  window.postMessage({ payload: 'launch-browser' })
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card drag">
    <button type="button" @click="launchBrowser">count is {{ count }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
