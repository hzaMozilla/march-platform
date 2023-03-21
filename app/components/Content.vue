<template>
  <div class="page-panel page-content" flex="dir:top" flex-box="1">
    <div v-if="$slots.toolbar" class="page-panel-toolbar">
      <slot name="toolbar"></slot>
    </div>
    <div class="page-panel-main" flex-box="1">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="page-panel-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
