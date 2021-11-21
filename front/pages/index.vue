<template>
    <ul>
        <li v-for="item in data.data" :key="item.id">
            <nuxt-link :to="`/job/${item.id}`">{{ item.name }}</nuxt-link>
        </li>
        <nuxt-link
            :to="`/?page=${data.current_page - 1}`"
            v-if="data.current_page > 0"
        >past</nuxt-link>
        <nuxt-link
            :to="`/?page=${data.current_page + 1}`"
            v-if="data.current_page < data.last_page"
        >next</nuxt-link>
    </ul>
</template>

<script lang="ts" setup>
const route = useRoute()
const page = route.query.page || 1
const { data,refresh } = await useFetch(`/api/job/get/?page=${page}`)
watch(() => route.query, () => {
    refresh(true) 
    })
</script>