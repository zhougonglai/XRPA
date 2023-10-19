<template>
  <section class="w-screen flex-1">
    <aside class="flex flex-col w-56 bg-white shadow h-full space-y-4">
      <div class="flex items-center m-4">
        <Menu as="div" class="relative w-full flex items-center">
          <MenuButton class="text-white bg-blue-500 hover:bg-blue-600 py-1 px-4 rounded flex-1">新建</MenuButton>
          <transition enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">
            <MenuItems
              class="absolute space-y-2 left-0 top-full origin-top-left border border-blue-500 mt-2 w-56 bg-white rounded shadow p-1">
              <h6 class="text-xs text-gray-400">自动化应用</h6>
              <MenuItem>
              <button class="hover:bg-gray-200 w-full text-left rounded py-1 px-2 leading-8">
                PC自动化应用
              </button>
              </MenuItem>
              <h6 class="text-xs text-gray-400">自动化指令</h6>
              <MenuItem>
              <button class="hover:bg-gray-200 w-full text-left rounded py-1 px-2 leading-8">
                自动化指令
              </button>
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
      </div>

      <ul class="pl-4 flex flex-col space-y-2">
        <h6 class="text-xs text-gray-400">
          我的应用
        </h6>
        <li>
          我开发的应用
        </li>
        <li>
          我获取的应用
        </li>
      </ul>

      <ul class="pl-4 flex flex-col space-y-2">
        <h6 class="text-xs text-gray-400">
          自定义指令
        </h6>
        <li>
          我开发的指令
        </li>
      </ul>
    </aside>
    <div class="flex-1">

    </div>
  </section>
</template>
