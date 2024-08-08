<template>
  <HeaderNav></HeaderNav>
  <div class=" bg-slate-300 w-[800px] flex flex-col p-4 rounded-ee rounded-bl">
    <div class="w-full flex justify-between">
      <h2 class="text-slate-800 text-2xl font-semibold">Add Event</h2>
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
    <form action="" @submit.prevent="addEvent">
      <div class=" bg-slate-300 w-[380px] flex flex-col p-4 rounded-ee rounded-bl">
        <label class="text-slate-600 font-semibold">Name:</label>
        <input type="text" placeholder="name" class="bg-slate-400 placeholder-slate-600 text-slate-600 input input-bordered w-full mb-2" v-model="name" required/>
        <label class="text-slate-600 font-semibold">Date:</label>
        <input type="date" placeholder="date" class="bg-slate-400 placeholder-slate-600 text-slate-600 input input-bordered w-full mb-2" v-model="date" required/>
        <label class="text-slate-600 font-semibold">Venue:</label>
        <select class="select bg-slate-400 placeholder-slate-600 text-slate-600 input input-bordered w-full mb-2" v-model="venue_id" required>
          <option disabled selected class="text-black">Select...</option>
          <option :value="v.id" v-for="v of venues" :key="v.id">{{v.name}}</option>
        </select>
        <button class="btn mt-4 bg-slate-700 text-slate-400 w-full border-0">Add</button>
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
const venues = reactive([]);
const name = ref('');
const date = ref('');
const venue_id = ref('');

getVenues();
async function getVenues(){
  try{
    const {data} = await api.get('/venues');
    venues.push(...data.venues);
  }catch (e) {
    console.error(e);
  }
}

async function addEvent(){
  try{
    await api.post('/events/create',{
      date: date.value,
      name: name.value,
      venue_id: venue_id.value,
    });

    router.push({name: 'EventManagement'});
  }catch (e) {
    console.error(e);
  }
}
</script>

<style scoped>

</style>