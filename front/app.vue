<template>
  <div>
    <!-- show exception when 403 -->
    <div v-if="data.status === 403">{{data.data.exception}}</div>
    <!-- show errors of name when 422 -->
    <div v-if="data.status === 422">
      <ul>
        <li v-for="name in data.data.errors.name">
          {{name}}
        </li>
      </ul>
    </div>
    <!-- show name when 200 -->
    <div v-if="data.status === 200">{{data.data.name}}</div>
  </div>
</template>
<script lang="ts" setup>

const {data} =await useFetch("/api/job/update")

</script>
