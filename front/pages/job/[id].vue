<script lang="ts" setup>
const route = useRoute()
const jobId = route.params.id || 0
const { data } = await useFetch(`/api/job/show/?job_id=${jobId}`)
</script>
<template>
    <div v-if="data.status === 200">{{ data.data.name }}</div>
    <div v-if="data.status === 404">{{ data.data.message }}</div>
</template>