<!--
 * @Author: zhangjie
 * @Date: 2021-12-07 11:33:49
 * @LastEditors: zhangjie
 * @LastEditTime: 2021-12-29 20:47:35
 * @FilePath: \vue3-demo\src\App.vue
-->
<template>
  <router-link to="/">Home</router-link>
  <hr />
  <router-link to="/ref">RefView</router-link>
  <hr />
  <router-link to="/suspense">suspense</router-link>
  <hr />
  <teleport to="#end-of-body" :disabled="toggle">teleport area</teleport>
  <button type="button" @click="toggleHandle">
    [teleport] toggle value: {{ toggle }}
  </button>
  <div>this is app area</div>
  <hr />
  <div>
    {{ count }}
    <button type="button" @click="increEvent">+1</button>
    <button type="button" @click="decreEvent">-1</button>
  </div>
  <router-view />
</template>
<script lang="ts">
import { computed, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import store from '@/store' // ①-推荐

import { INCREMENT, DECREMENT } from '@/store/mutations-type'
export default {
  setup () {
    const toggle = ref(false)
    const toggleHandle = () => {
      toggle.value = !toggle.value
    }

    // vuex
    // const store = useStore() ①-不推荐 useStore()必须在setup执行完了之后使用
    const increEvent = () => {
      store.commit(INCREMENT)
    }
    const decreEvent = () => {
      store.commit(DECREMENT)
    }
    return reactive({
      toggle,
      toggleHandle,
      count: computed(() => store.state.storeCount),
      increEvent,
      decreEvent
    })
  }
}
</script>
<style lang="scss"></style>
