<template>
    <div>
        success: {{msg}}
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  async setup () {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        // eslint-disable-next-line prefer-promise-reject-errors
        // reject('error message')
        resolve('user 组件 loaded success')
      }, 2000)
    })
    const msg = await promise
    console.log('msg: ', msg)
    return {
      msg
    }
  }
})
</script>

<style scoped>

</style>
