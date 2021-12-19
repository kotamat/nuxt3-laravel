<template>
  <div>
    {{refData.aa.fuga}}
    {{refData.this.is.super.nested.master.data.gender}}
  </div>
</template>
<script setup lang="ts">
import { DefaultApi } from '~~/spec';

const api = new DefaultApi
const {data} = await api.apiMasterGET();
const refData = reactive(data)

</script>