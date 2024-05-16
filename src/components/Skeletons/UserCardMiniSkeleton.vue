<template>
  <div
    class="user-card-mini grid grid-cols-3 rounded-lg shadow-[0px_0px_6px_0px_rgba(0,0,0,0.1)] cursor-pointer animate-pulse"
  >
    <div class="user-card-mini__image col-span-1 p-4 border-r-2 border-gray-200">
      <img src="https://via.placeholder.com/200/92c952" />
    </div>
    <div class="user-card-mini__info col-span-2 p-4">
      <div class="user-card-mini__name font-bold">{{}}</div>
      <div class="user-card-email text-gray-500">{{}}</div>
    </div>
  </div>
</template>
