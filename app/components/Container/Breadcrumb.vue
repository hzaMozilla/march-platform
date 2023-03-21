<template>
  <div class="page-breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>
        <i class="el-icon-location"></i>
      </el-breadcrumb-item>
      <el-breadcrumb-item
        v-for="(item, index) in breadcrumbs"
        :key="index"
      >
        <span
          :class="{ last: index === breadcrumbs.length - 1 }"
          class="breacrumb"
          @click="clickLink(item)"
        >
          {{ item.title }}
        </span>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <slot></slot>
  </div>
</template>

<script setup lang="ts" name="Breadcrumb">
import { defineProps } from 'vue';
import { Breadcrumbs } from '@src/_type';
defineProps({
  breadcrumbs: {
    type: Array,
    required: true
  }
});
const clickLink = (item: Breadcrumbs):void => {
  if (item.href) {
    window.location.href = item.href;
  }
};
</script>

<style scoped>
.page-breadcrumb {
  margin-bottom: 15px;
  padding: 15px;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.last {
  font-weight: 700;
  color: #000;
}
.breacrumb {
  cursor: pointer;
}
</style>
