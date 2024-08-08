<template>
      <Notification v-show="error">
          {{error}}
      </Notification>
        <h1 class="bg-slate-800 text-slate-400 flex gap-2 items-center justify-center text-3xl text-center p-2 rounded-ss rounded-tr">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            Login
        </h1>
        <div class=" bg-slate-300 w-[380px] flex flex-col p-4 rounded-ee rounded-bl">
            <label class="text-slate-600 font-semibold">Username:</label>
            <input type="text" placeholder="username" class="bg-slate-400 placeholder-slate-600 text-slate-600 input input-bordered w-full mb-2" v-model="username"/>
            <label class="text-slate-600 font-semibold">Password:</label>
            <input type="password" placeholder="password" class="bg-slate-400 placeholder-slate-600 text-slate-600 input input-bordered w-full mb-2" v-model="password"/>
            <button class="btn mt-4 bg-slate-700 text-slate-400 w-full border-0" @click="login">Login</button>
        </div>

</template>

<script setup>
 import Notification from "../components/Notification.vue";
 import api  from '../api.js';
 import {ref} from 'vue';
 import router  from '../router.js';
 import auth from '../stores/auth.js';

 //states
 const username = ref('');
 const password = ref('');
 const error = ref(null);
 async function login(){
   try{
      const {data} = await api.post('/login',{
        username: username.value,
        password: password.value,
      });

      auth.value.token = data.token;
      router.push({name: 'EventManagement'});
   }catch(e){
      error.value = e.response.data;
      setTimeout(()=>{
        error.value = null;
      }, 5000);
     console.error(e);
   }
 }
</script>


<style scoped>

</style>
