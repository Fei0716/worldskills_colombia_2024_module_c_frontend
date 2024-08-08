import {watchEffect,ref,computed} from "vue";

const auth = ref({
    //states
    token: localStorage.getItem('token') || 'null',
});

watchEffect(()=>{
    localStorage.setItem('token' , auth.value.token);
});
//actions


//getters
auth.value.isAuthenticated = computed(()=>{
    return auth.value.token !== 'null';
});

export default auth;