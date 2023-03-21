<template>
  <loading v-if="!user" />
  <el-container
    v-else
    class="container"
  >
    <side-bar
      v-if="showSideBar"
      v-bind="sideBarProps"
      :user="user"
      class="side-bar"
      @select-menu="selectMenu"
    />
    <el-main class="content">
      <Breadcrumb
        v-if="breadcrumbs && breadcrumbs.length > 0"
        :breadcrumbs="breadcrumbs"
      />
    </el-main>
  </el-container>
</template>
<script setup lang="ts" name="Container">
import { defineProps, defineComponent, defineEmits } from 'vue';
import { ElContainer, ElMain } from 'element-plus';
import SideBar from './SideBar';
import Loading from './Loading';
import Breadcrumb from './Breadcrumb';

const $emit = defineEmits(['select-menu']);

defineProps({
  user: {
    type: Object,
    default () {
      return null;
    }
  },
  showSideBar: {
    type: Boolean,
    default: true
  },
  breadcrumbs: {
    type: Array,
    default () {
      return [];
    }
  },
  sideBarProps: {
    type: Object,
    required: true
  }
});
defineComponent({
  ElContainer,
  ElMain,
  SideBar,
  Loading,
  Breadcrumb
});
const selectMenu = (menu) => {
  $emit('select-menu', menu);
};
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
}
.content {
  background: #eef1f5;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
}
.main {
  background: #fff;
  flex: 1;
  padding: 15px;
}
.side-bar {
  overflow: hidden auto;
}
</style>
