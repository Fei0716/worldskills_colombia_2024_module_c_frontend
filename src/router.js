import {createRouter, createWebHistory} from "vue-router";
//import stores
import auth from './stores/auth.js';
//import the components
import EventManagement from './views/admin-events.vue';
import Login from './views/login.vue';
import CreateEvent from './views/add-event.vue';
import CreateParticipant from './views/add-participant.vue';
import EditEvent from './views/edit-event.vue';
import ListParticipant from './views/list-participants.vue';

//routes for the front end app

const routes = [
    {
        path: '/',
        name: 'EventManagement',
        component: EventManagement,
        meta: {
            guard: 'auth'
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            guard: 'guest'
        }
    },
    {
        path: '/create-event',
        name: 'CreateEvent',
        component: CreateEvent,
        meta: {
            guard: 'auth'
        }
    },
    {
        path: '/create-participant',
        name: 'CreateParticipant',
        component: CreateParticipant,
        meta: {
            guard: 'auth'
        }
    },
    {
        path: '/edit-event/:id',
        name: 'EditEvent',
        component: EditEvent,
        meta: {
            guard: 'auth'
        }
    },
    {
        path: '/list-participants/:id',
        name: 'ListParticipant',
        component: ListParticipant,
        meta: {
            guard: 'auth'
        }
    },
    //redirect all invalid routes back to home page
    {
        path: '/:catchAll(.*)',
        redirect: '/',
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
//add middleware
router.beforeEach((to,from , next)=>{
    //if not authenticated redirect back to login page
    if(to.meta.guard === 'auth' && !auth.value.isAuthenticated){
        next({name: 'Login'});
    }else{
        next();
    }
})


export default router;