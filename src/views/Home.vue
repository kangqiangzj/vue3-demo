
<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    {{ counter }}
    <button type="button" @click="add()">+</button>
    <HomeChild :propsName="counter" @minus-event="minuseEventHandler" id="5"/>
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
// import HelloWorld from '@/components/HelloWorld.vue'
import HomeChild from '../components/HomeChild.vue'
import { utils } from './home' // 很好的解决了作用域问题
import router from '@/router'
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
    router.push('/not/found/url')
  },
  setup () {
    return {
      ...utils()
    }
  }
}
</script>
