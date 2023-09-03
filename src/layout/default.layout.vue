<template>
  <main class="h-screen bg-light-50 flex flex-col">
    <header class="shadow hover:shadow-lg transition-shadow w-full drag">
      <div class="h-12 flex place-content-center place-items-center">
        <div class="text-blue-500 px-5 w-56 no-drag">
          XRPA
        </div>

        <nav class="flex-1 space-x-4">
          <router-link :to="{ name: 'index' }" class="inline-block w-10 text-center no-drag">
            应用
          </router-link>
          <router-link :to="{ name: 'strategy' }" class="inline-block w-10 text-center no-drag">
            策略
          </router-link>
          <router-link :to="{ name: 'market' }" class="inline-block w-10 text-center no-drag">
            市场
          </router-link>
        </nav>

        <ul class="inline-grid grid-cols-3 gap-x-2 w-24">
          <li>
            <button class="no-drag" @click="mini">
              -
            </button>
          </li>
          <li>
            <button class="no-drag" @click="maximize">
              ☐
            </button>
          </li>
          <li>
            <button class="no-drag" @click="hide">
              &times;
            </button>
          </li>
        </ul>
      </div>

    </header>
    <router-view></router-view>
  </main>
</template>
<script setup lang="ts">
const mini = () => {
  window.electron.ipcRenderer.send('minimize')
}

const maximize = () => {
  window.electron.ipcRenderer.send('maximize')
}

const hide = () => {
  window.electron.ipcRenderer.send('maximize')
}

</script>
