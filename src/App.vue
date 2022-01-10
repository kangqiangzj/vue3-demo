<!--
 * @Author: zhangjie
 * @Date: 2021-12-07 11:33:49
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-01-10 09:21:29
 * @FilePath: \vue3-demo\src\App.vue
-->
<template>
  <router-link to="/">Home</router-link>&nbsp;&nbsp; | &nbsp;&nbsp;
  <router-link to="/ref">RefView</router-link>&nbsp;&nbsp; | &nbsp;&nbsp;
  <router-link to="/suspense">suspense</router-link>&nbsp;&nbsp; | &nbsp;&nbsp;
  <router-link to="/editor">editor</router-link>&nbsp;&nbsp; | &nbsp;&nbsp;
  <hr>
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
  <div class="content">
    <router-view />
  </div>
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
      count: computed(() => store.state.common.storeCount),
      increEvent,
      decreEvent
    })
  }
}
</script>
<style lang="scss">
.content{
  padding: 50px;
}
</style>
