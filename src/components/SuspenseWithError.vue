<template>
    <slot v-if="err" name="error" :errorMsg="err"></slot>
    <Suspense v-else>
        <template #default>
            <slot  name="default"></slot>
        </template>
        <template #fallback>
            <slot  name="fallback"></slot>
        </template>
    </Suspense>
</template>

<script lang="ts">
import { defineComponent, onErrorCaptured, ref } from 'vue'

export default defineComponent({
  setup () {
    const err = ref('')
    // 捕捉user里面的reject错误
    onErrorCaptured((error) => {
      err.value = error as unknown as string
      return true
    })
    return {
      err
    }
  }
})
</script>

<style scoped>

</style>
