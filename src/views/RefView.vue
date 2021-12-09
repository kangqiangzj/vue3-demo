<template>
    <div>
        x:{{x}},y:{{y}}
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUpdated, reactive, toRefs, onRenderTracked, onRenderTriggered } from 'vue'
const utils = () => {
  const state = reactive({
    x: 0,
    y: 0
  })
  return toRefs(state) // 将失效的响应式，转换为响应式
}
export default defineComponent({
  setup () {
    const { x, y } = utils()
    onMounted(() => {
      console.log('onMounted...')
    })
    onUpdated(() => {
      console.log('onUpdated')
      console.log('x.value', x.value)
      console.log('y.value', y.value)
    })
    onRenderTracked((debug) => {
      console.log('onRenderTracked-debug', debug)
    })
    onRenderTriggered((debug) => {
      console.log('onRenderTriggered-debug', debug)
    })

    setTimeout(() => {
      x.value = 1
      y.value = 2
    }, 2000)
    return {
      x, y
    }
  }
})
</script>

<style scoped>

</style>
