<template>
    <div>
        <h2>編輯心情紀錄</h2>
        <form @submit.prevent="updateEntry">
            <div>
                <label> 日期:</label>
                <input type="date" v-model="date" required>
            </div>
            <div>
                <label>心情:</label>
                <select v-model="mood" required>
                    <option disable value="">請選擇</option>
                    <option>Happy</option>
                    <option>sad</option>
                    <option>angry</option>
                    <option>anxious</option>
                    <option>tired</option>
                </select>
            </div>
            <label>心情描述：</label>
            <textarea v-model="note" rows="4" cols="30" />
            <div>
                <button type="submit">更新紀錄</button>
            </div>
        </form>
    </div>
</template>

<script setup>

import {ref, onMounted} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const router = useRouter();

const date = ref('');
const mood = ref('');
const note = ref('');

const entryId = route.params.id
console.log("entryID: " + entryId)
console.log(`entryID: + ${entryId}`)

onMounted(async ()=>{
    try {
        const res = await axios.get(`http://127.0.0.1:8000/api/entries/${entryId}`);
        const entry = res.data;
        date.value = entry.date;
        mood.value = entry.mood;
        mood.value = entry.note;

    } catch (error) {
        alert('載入資料失敗：'+ error.message);
    }
})

const updateEntry = async () => {
    try {
        await axios.put(`http://127.0.0.1:8000/api/entries/${entryId}`,{
            date:date.value,
            mood:mood.value,
            note:note.value
        });
        alert('更新成功！');
        router.push('/entries')
    } catch (error) {
        alert('更新失敗：' + err.message);
    }
}

</script>