import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import CreateEntry from '../views/CreateEntry.vue';
import EntryList from '../views/EntryList.vue';
import EditEntry from '../views/EditEntry.vue';
import MonthlyStats from "../views/MonthlyStats.vue";

const routes = [
    {path: '/', component: Home},
    {path: '/entries', component: EntryList},
    {path: '/new', component: CreateEntry},
    {path: '/edit/:id', component:EditEntry},
    {path: '/stats',name:'MonthlyStats', component:MonthlyStats}
]

const router = createRouter(
    {
        history:createWebHistory(),
    routes
    }

)

export default router