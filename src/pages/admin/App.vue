<template>
  <march-container
    :user="user"
    sidebar="admin"
    :auth="[data.permission]"
    @scope-change="scopeChanged"
  >
    <context-component />
  </march-container>
</template>

<script setup lang="ts">
import { defineComponent, reactive } from 'vue';
import RedirectMixin from 'src/libs/mixins/page-event/redirect';
import UserMixin from 'src/libs/mixins/user';
import SidebarPermissionMixin from 'src/libs/mixins/sidebar-permission';
import ContextComponent from './Context';
import { MarchContainer } from '@app/components/MarchContainer';

const data = reactive(
  {
    scope: 'BACKEND',
    permission: 'BACKEND',
    sidebar: []
  }
);
defineComponent({
  ContextComponent,
  AnContainer
});

</script>
