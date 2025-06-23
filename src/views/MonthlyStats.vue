<template>
    <div>
        <h2>每月心情統計</h2>
        <div v-if="loading">載入中...</div>
        <div v-else>
            <div v-for="(data,month) in stats" :key="month" class="month-block">
                <h3>{{ month }}</h3>
                <p>記錄天數：{{data.days_with_entries}}</p>
                <ul>
                    <li v-for="(count,mood) in data.mood_counts" :key="mood">
                        {{ mood }}:{{count}} 次
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script setup>

import { ref, onMounted } from 'vue'
import axios from 'axios'

const stats = ref({});
const loading = ref(true);

onMounted(async () =>{
    try {
        console.log("@@@@@@");
        const res = await axios.get('http://127.0.0.1:8000/api/entries/stats');
        stats.value = res.data;
    } catch (error) {
        alert('載入統計資料失敗：' + error.message);
    }finally{
        loading.value = false;
    }
})


</script>


<style scoped>
.month-block {
    border: 1px solid #ccc;
    margin: 1em 0;
    padding: 1em;
    border-radius: 8px;
}
</style>