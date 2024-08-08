<script setup>
import auth from '../stores/auth.js';
import api from  '../api.js';
import router from  '../router.js';
async function logout(){
  try{
    await api.post('/logout');
    auth.value.token = 'null';
    router.push({name: 'Login'});
  }catch (e) {
    console.error(e);
  }
}
</script>

<template>
  <h1 class="bg-slate-800 text-slate-400 flex gap-2 items-center justify-between text-3xl text-center p-2 rounded-ss rounded-tr">
            <span class="flex gap-2 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                  </svg>
                Admin Panel
            </span>
    <button class="btn btn-sm text-slate-400 bg-slate-900 border-0" @click="logout">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
      Close Sesion
    </button>
  </h1>
</template>

<style scoped>

</style>