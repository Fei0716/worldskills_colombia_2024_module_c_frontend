<template>
  <HeaderNav></HeaderNav>

  <div class=" bg-slate-300 w-[800px] flex flex-col p-4 rounded-ee rounded-bl">
    <div class="w-full flex justify-between">
      <h2 class="text-slate-800 text-2xl font-semibold">Add Participant</h2>
      <div>
        <router-link :to="{name: 'EventManagement'}">
          <button class="btn btn-sm text-slate-400 bg-slate-900 border-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            Back to
          </button>
        </router-link>
      </div>
    </div>
    <form action="" @submit.prevent="addParticipant">
      <div class=" bg-slate-300 w-[380px] flex flex-col p-4 rounded-ee rounded-bl">
        <label class="text-slate-600 font-semibold">FullName:</label>
        <input type="text" placeholder="fullname" class="bg-slate-400 placeholder-slate-600 text-slate-600 input input-bordered w-full mb-2" v-model="fullname" required/>
        <label class="text-slate-600 font-semibold">Email:</label>
        <input type="text" placeholder="email" class="bg-slate-400 placeholder-slate-600 text-slate-600 input input-bordered w-full mb-2" v-model="email"  required/>
        <label class="text-slate-600 font-semibold">Phone:</label>
        <input type="text" placeholder="phone" class="bg-slate-400 placeholder-slate-600 text-slate-600 input input-bordered w-full mb-2" v-model="phone"  required/>
        <label class="text-slate-600 font-semibold">Event:</label>
        <select class="select bg-slate-400 placeholder-slate-600 text-slate-600 input input-bordered w-full mb-2" v-model="event_id"  required>
          <option disabled selected>Select...</option>
          <option :value="e.id" v-for="e of events" :key="e.id">{{e.name}}</option>
        </select>
        <button type="submit" class="btn mt-4 bg-slate-700 text-slate-400 w-full border-0">Add</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import HeaderNav from "../components/HeaderNav.vue";
import Notification from "../components/Notification.vue";
import api  from '../api.js';
import {ref,reactive} from 'vue';
import router  from '../router.js';

//states
const events= reactive([]);
const fullname = ref('');
const email = ref('');
const phone = ref('');
const event_id = ref('');

getEvents();
// methods
async function getEvents(){
  try{
    const {data} = await api.get('/events/list');
    events.push(...data.events);
  }catch (e) {
    console.error(e);
  }
}

async function addParticipant(){
  try{
    await api.post('/participants/create',{
      fullname: fullname.value,
      email: email.value,
      event_id: event_id.value,
      phone: phone.value,
    });
    router.push({name: 'EventManagement'});
  }catch (e) {
    console.error(e);
  }
}
</script>

<style scoped>

</style>