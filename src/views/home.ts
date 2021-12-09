import { ref, watch, watchEffect, computed, reactive } from 'vue'

export const utils = () => {
  const counter = ref(0)
  const state = reactive({
    lists: [
      {
        id: 1,
        text: 'zhang san'
      },
      {
        id: 2,
        text: 'li si'
      }
    ]
  })
  let num = 2
  const total = ref(0)
  const add = () => {
    counter.value++
    total.value = num * counter.value
  }
  const minuseEventHandler = () => {
    counter.value--
  }
  const modify = () => {
    num = 3
  }
  const setList = () => {
    state.lists[0].text = 'changed'
  }
  // watch和watchEffect的区别
  //   1、都可以侦听响应式对象的变化，从而执行回调
  //     2、watchEffect会默认执行一次，而watch不会，必须时间触发
  //     3、watchEffect只接受函数作为参数，但是wathc可以监听多可响应式变化
  watch([counter, total], (newVal, oldVal) => {
    console.log('oldVal: ', oldVal)
    console.log('newVal: ', newVal)
  })

  watchEffect(() => {
    const total = counter.value * 2
    console.log('total: ', total)
  }
  //   , {
  //     onTrack: (e) => {
  //       console.log('e: ', e)
  //     }
  //   }
  )
  return {
    counter,
    computedTotal: computed(() => counter.value * num), // computed
    add,
    minuseEventHandler,
    modify,
    state,
    setList
  }
}
