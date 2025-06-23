<template>
    <div>
        <h2>心情記錄表</h2>
        <ul v-if="entries.length">
            <li v-for="entry in entries":key="entry.id">
            🗓️ {{ entry.date }} <br/>
            😶‍🌫️ {{ entry.mood }} <br/>
            📝 {{ entry.note }}
            <router-link :to="`/edit/${entry.id}`">✏️ 編輯</router-link>
            <button @click="deleteEntry(entry.id)">Delete</button>
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
        const response = await axios.get(`http://127.0.0.1:8000/api/entries`) //向 Laravel 發送 GET 請求
        entries.value = response.data

        console.log('後端回傳：', response.data)
    } catch (error) {
        console.error('載入紀錄時發生錯誤：',error)
    }
})

const fetchEntries = async () =>{
    try {
        const res = await axios.get('http://127.0.0.1:8000/api/entries');
        entries.value = res.data;
    } catch (error) {
        alert('讀取紀錄失敗：' + error.message)
    }
    
}

// 刪除紀錄
const deleteEntry = async (id) =>{
    if(!confirm('確定要刪除這筆紀錄嗎？')) return

    try {
        await axios.delete(`http://127.0.0.1:8000/api/entries/${id}`)
        await fetchEntries() // 重新取得資料
    } catch (error) {
        alert('刪除失敗：' + error.message)
    }
}
onMounted(()=>{
    fetchEntries();
})
</script>