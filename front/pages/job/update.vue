<template>
    <div>
        <div v-if="data.status === 200">{{ data.data.name }}</div>
        <div v-if="data.status === 422">{{ data.data.message }}</div>
        <div v-if="data.status === 403">{{ data.data.trace }}</div>
    </div>
</template>
<script setup lang="ts">
const { data } = await useFetch("/api/job/update")

</script>