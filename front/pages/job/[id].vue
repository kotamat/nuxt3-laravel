<script lang="ts" setup>
const route = useRoute()
const jobId = route.params.id || 0
const { data } = await useFetch(`/api/job/show/?job_id=${jobId}`)
</script>
<template>
<!-- show name when 200 -->
    <div v-if="data.status === 200">{{ data.data.name }}</div>
<!-- show error trace when 404 -->
    <div v-if="data.status === 404">
        {{ data.data.message }}
        stack trace
        <ul>
            <li v-for="trace in data.data.trace">
            {{trace.file}}:{{trace.line}} <br />
            {{trace.class}}::{{trace.function}}
            </li>
        </ul>
    </div>
</template>