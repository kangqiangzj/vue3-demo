<!--
 * @Description: 文件描述
 * @Author: zhangjie
 * @Date: 2022-01-07 17:01:14
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-01-18 16:33:53
 * @FilePath: \vue3-demo\src\views\Editor.vue
-->
<template>
  <div class="wrap">
    <div class="left">
      <component-list
        :list="defaultTextTemplates"
        @onItemClick="addItem"
      ></component-list>
    </div>
    <div class="center">
      <h3>画布区域：</h3>
      <div class="canvas-area">
        <edit-wrapper
          v-for="ele in elements"
          :key="ele.id"
          :id="ele.id"
          @set-active="setActive"
          :active="(currentElement && currentElement.id) === ele.id"
        >
          <component :is="ele.name" v-bind="ele.props"></component>
        </edit-wrapper>
      </div>
    </div>
    <div class="right">
      <p class="right-tit">组件属性：</p>
      <props-table
        v-if="currentElement && currentElement.props"
        :props="currentElement.props"
        @change="handleChange"
      ></props-table>
      <pre>{{ currentElement && currentElement.props }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store/index'
import { ComponentData } from '../store/modules/editors'
import { defaultTextTemplates } from '../mock/defaultTextTemplates'
import LText from '@/components/base/LText.vue'
import ComponentList from '../components/ComponentList.vue'
import EditWrapper from '../components/EditWrapper.vue'
// import PropsTable from '../components/PropsTable.vue'
import PropsTable from '../components/tsx/PropsTable'
export default defineComponent({
  components: {
    LText,
    ComponentList,
    EditWrapper,
    PropsTable
  },
  setup () {
    const store = useStore<GlobalDataProps>()
    const elements = computed(() => store.state.editor.components)
    const currentElement = computed<ComponentData | null>(
      () => store.getters.getCurrentElement
    )
    const addItem = (props: any) => {
      store.commit('addComponents', props)
    }
    const setActive = (id: string) => {
      store.commit('setActive', id)
    }
    const handleChange = (e:any) => {
      console.log('e', e)
      store.commit('updateComponent', e)
    }
    return {
      elements,
      defaultTextTemplates,
      addItem,
      setActive,
      currentElement,
      handleChange
    }
  }
})
</script>

<style scoped lang="scss">
.wrap {
  display: flex;
  .left {
    width: 200px;
    border-right: 1px solid red;
  }
  .center {
    flex: 1;
    padding: 0 10px;
    background: #ccc;
  }
  .right {
    width: 400px;
    border-left: 1px solid red;
    padding: 0 12px;
    .right-tit{
      font-weight: 600;
      margin-bottom: 10px;
    }
  }
}
</style>
