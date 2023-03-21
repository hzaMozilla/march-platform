<template>
  <content-component>
    <el-row :gutter="20">
      <template
        v-for="{
          icon,
          name,
          href,
          permission,
          index,
          description,
          children
        } in sidebarItems"
      >
        <el-col v-if="href" :key="index" :span="6">
          <card-component
            :permission="permission"
            :icon="icon"
            :name="name"
            :href="href"
            :description="description"
          />
        </el-col>
        <el-col
          v-for="{ name, href, permission, index, description } in children"
          v-else
          :key="index"
          :span="6"
        >
          <card-component
            :permission="permission"
            :name="name"
            :href="href"
            :description="description"
          />
        </el-col>
      </template>
    </el-row>
  </content-component>
</template>

<script setup lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
import sidebarItems from 'src/dependencies/sidebars/admin';
import ContentComponent from 'src/libs/components/layout/Content';
import UserPermissionMixin from 'src/libs/mixins/user-permission';
import CardComponent from 'src/modules/components/layout/Card';

const duties = ref<any[]>([]);
const sidebarItems = ref<any[]>([]);
defineComponent({
  ContentComponent,
  CardComponent
});
onMounted(() => {
  sidebarItems.value = sidebarItems;
});
</script>
