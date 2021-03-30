import Calendar from '../page/Calendar.vue';
import Chat from '../page/Chat.vue';
import Dashboard from '../page/Dashboard.vue';
import Documents from '../page/Documents.vue';
import Store from '../page/Store.vue';
import { createRouter,createWebHistory } from "vue-router";
const routes = [
    {path:'/calendar', name:'calendar', component:Calendar},
    {path:'/chat', name:'chat', component:Chat},
    {path:'/dashboard', name:'dashboard', component:Dashboard},
    {path:'/documents', name:'documents', component:Documents},
    {path:'/store', name:'store', component:Store },
]
export const router = createRouter({
    history:createWebHistory(),
    routes,
});
