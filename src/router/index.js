import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import CreateEntry from '../views/CreateEntry.vue';
import EntryList from '../views/EntryList.vue';

const routes = [
    {path: '/', component: Home},
    {path: '/entries', component: EntryList},
    {path: '/new', component: CreateEntry}
]

const router = createRouter(
    {
        history:createWebHistory(),
    routes
    }

)

export default router