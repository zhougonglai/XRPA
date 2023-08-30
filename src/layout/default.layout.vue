<template>
  <main class="h-screen bg-light-50 flex flex-col">
    <header class="shadow hover:shadow-lg transition-shadow w-full">
      <div class="h-12 flex place-content-center place-items-center space-x-10">
        <div class="text-blue-500 px-5 ">
          XRPA
        </div>

        <nav class="flex-1 space-x-4 ">
          <router-link :to="{ name: 'index' }" class="inline-block w-10 text-center">
            应用
          </router-link>
          <router-link :to="{ name: 'strategy' }" class="inline-block w-10 text-center">
            策略
          </router-link>
          <router-link :to="{ name: 'market' }" class="inline-block w-10 text-center">
            市场
          </router-link>
        </nav>

        <ul class="inline-grid grid-cols-3 gap-x-2 w-24">
          <li>
            <button>
              -
            </button>
          </li>
          <li>
            <button>
              ☐
            </button>
          </li>
          <li>
            <button>
              &times;
            </button>
          </li>
        </ul>
      </div>

    </header>
    <router-view></router-view>
  </main>
</template>
