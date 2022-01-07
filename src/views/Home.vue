<!--
 * @Description: 文件描述
 * @Author: zhangjie
 * @Date: 2021-12-07 11:33:49
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-01-06 15:33:56
 * @FilePath: \vue3-demo\src\views\Home.vue
-->

<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    {{ counter }}
    <button type="button" @click="add()">+</button>
    <HomeChild :propsName="counter" @minus-event="minuseEventHandler" id="5" :user="userData"/>
    <p>computedTotal is {{computedTotal}}</p>
    <button type="button" @click="modify">modify</button>
    <hr>
    <ul>
      <li v-for="item in state.lists" :key="item.id">{{item.text}}</li>
    </ul>
    <button type="button" @click="setList">setList</button>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { computed } from 'vue'
import HomeChild from '../components/HomeChild.vue'
import { utils } from './home' // 很好的解决了作用域问题
import router from '@/router'
import store from '@/store' // ①-推荐
// const stateUtils = utils()
export default {
  name: 'Home',
  components: {
    HomeChild
  },
  mounted () {
    // vue2 this.$router.push()
    // vue-router4.0特性
    // router.push({
    //   name: 'not-found',
    //   params: {
    //     pathMatch: ['not', 'found']// 'not/found'
    //   }
    // })
    // 但是可以不用这么麻烦，使用以下方法就好了
    // router.push('/not/found/url')
  },
  setup () {
    return {
      ...utils(),
      userData: computed(() => store.state.user)
    }
  }
}
</script>
