<template>
  <div>
    <!-- show exception when 403 -->
    <div v-if="data.status === 403">{{data.data.exception}}</div>
    <!-- show error name when 422 -->
    <div v-if="data.status === 422">{{data.data.errors.name}}</div>
    <!-- show data when 200 -->
    <div v-if="data.status === 200">{{data.data.name}}</div>
  </div>
</template>
<script lang="ts" setup>

const {data} =await useFetch("/api/job/update")

</script>
