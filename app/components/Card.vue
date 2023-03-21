<template>
  <el-card
    v-if="!permission || hasPermission(permission)"
    class="card-container"
    shadow="hover"
    :body-style="{ padding: '5px 10px' }"
    @click.stop="redirect(href)"
  >
    <div>
      <div>
        <h4 class="card-title">{{ name }}</h4>
        <p>{{ description }}</p>
      </div>
      <i class="card-icon" :class="icon"></i>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { redirect } from '@src/utils/redirect';
import { hasPermission } from '@src/utils/userPermission';
defineProps({
  permission: String,
  name: String,
  description: String,
  icon: String,
  href: String
});
</script>

<style lang="less" scoped>
.card-container {
  margin-bottom: 15px;
  color: #5a5e66;
  :hover {
    color: #000;
    cursor: pointer;
  }
  .card-title {
    margin: 5px 0;
    font-size: 17px;
  }
  .card-icon {
    font-size: 25px;
  }
}
</style>
