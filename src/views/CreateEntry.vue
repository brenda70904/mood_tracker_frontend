<template>
    <div>
        <h2>新增心情紀錄</h2>
        <form @submit.prevent="submitEntry" >
            <div>
                <label >日期</label>
                <input type="date" v-model = 'date' required>
            </div>
            <div>
                <label >心情</label>
                <select v-model="mood" required>
                    <option disabled value="">請選擇</option>
                    <option>Happy</option>
                    <option>sad</option>
                    <option>angry</option>
                    <option>anxious</option>
                    <option>tired</option>
                </select>
            </div>
            <div>
                <label> 心情描述：</label>
                <textarea v-model="note" row="4" cols="30"/>
            </div>
            <button type="submit"> 送出紀錄</button>
        </form>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import axios from 'axios';
import { useRouter } from 'vue-router';

const date = ref('')
const mood = ref('')
const note = ref('')

const router = useRouter()

const submitEntry = async ()=>{
    try {
        await axios.post(`http://127.0.0.1:8000/api/entries`, {
            date: date.value,
            mood: mood.value,
            note: note.value,
        })
        alert('新增成功！')
        router.push('/entries') // 自動導向列表頁
    } catch (error) {
        alert('新增失敗：' + error.message)
    }
}



</script>