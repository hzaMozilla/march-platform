<template>
  <div class="loading-page">
    <div class="spinner">
      <div class="rect1" />
      <div class="rect2" />
      <div class="rect3" />
      <div class="rect4" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.loading-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: white;
}
.spinner {
  height: 40px;
  width: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
  .rect(@delay: 1.1s) {
    background: #333333;
    width: 6px;
    animation: sk-stretch 1.2s ease-in-out @delay infinite;
  }
  .rect1 {
    .rect(-1.1s);
  }
  .rect2 {
    .rect(-1s);
  }
  .rect3 {
    .rect(-0.9s);
  }
  .rect4 {
    .rect(-0.8s);
  }
}

@keyframes sk-stretch {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}
</style>
