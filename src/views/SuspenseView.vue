<template>
    <div>
        <div v-if="err">
            {{err}}
        </div>
        <Suspense v-else>
            <template #default>
                <User />
            </template>
            <template #fallback>
                loading...
            </template>
        </Suspense>

    </div>
</template>

<script lang="ts">
import { defineComponent, onErrorCaptured, ref } from 'vue'
import User from '@/components/User.vue'
export default defineComponent({
  components: { User },
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
