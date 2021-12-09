<template>
    <SuspenseWithError>
        <template #error="{errorMsg}">{{errorMsg}}</template>
        <template #default>
            <User />
        </template>
        <template #fallback>
            loading...
        </template>
    </SuspenseWithError>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SuspenseWithError from '@/components/SuspenseWithError.vue'
import User from '@/components/User.vue'
export default defineComponent({
  components: { SuspenseWithError, User },
  setup () {
    return {}
  }
})
</script>

<style scoped>

</style>
