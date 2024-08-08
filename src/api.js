import axios from 'axios';
import auth from './stores/auth.js';
import router  from './router.js';
import {watch} from 'vue';

watch(auth.value.token, (newValue , oldValue)=>{
    auth.value.token = newValue;
});


const api = axios.create({
    baseURL: 'http://192.168.10.2:8080/api/v1/olympics',

});


api.interceptors.request.use((req)=>{
    req.headers = {
        'Authorization': `Bearer ${auth.value.token}`
    };
    return req;
},(err)=>{
    if(err.status === 401){
        auth.value.token = 'null';
        router.push({name:"Login"});
    }
    return  Promise.reject(err);
});
api.interceptors.response.use((res)=>{
    return res;
},(err)=>{
    if(err.status === 401){
        auth.value.token = 'null';
        router.push({name:"Login"});
    }
    return  Promise.reject(err);
});

export default api;