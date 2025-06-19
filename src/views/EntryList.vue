<template>
    <div>
        <h2>這是測試</h2>
        <pre>{{ entries }}</pre>
        <pre>{{ entries.value }}</pre>
    </div>
    <div>
        <h2>心情記錄表</h2>
        <ul v-if="entries.length.length > 0">
            <li v-for="entry in entries":key="entry.id">
            🗓️ {{ entry.date }} - 😶‍🌫️ {{ entry.mood }} <br />
            📝 {{ entry.note }}
            <hr/>
            </li>
        </ul>
        <p v-else>目前這裡沒有紀錄喔！</p>
    </div>
    
</template>

<script setup>
import {ref, onMounted} from 'vue';
import axios from 'axios';

const entries = ref([]) //建立一個 reactive 陣列來裝紀錄資料

onMounted(async()=>{ //Vue 生命週期，畫面一載入就會執行裡面程式
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/entries') //向 Laravel 發送 GET 請求
        entries.value = response.data
        console.log('後端回傳：', response.data)
    } catch (error) {
        console.error('載入紀錄時發生錯誤：',error)
    }
})

</script>