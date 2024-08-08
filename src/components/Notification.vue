<script setup>

</script>

<template>
  <Transition name="notification">
    <output>
      <slot></slot>
    </output>
  </Transition>

</template>

<style scoped>
  output{
    position: fixed;
    top: 12px;
    right: 0;
    padding: 1rem 1.5rem;
    background-color: rgb(30 41 59 / 1);
    color: rgb(203 213 225 / 1);
    font-size: 1.25rem;
    text-align: center;
    border-radius: 0.25rem;
  }
  .notification-enter-from, .notification-leave-to{
    transform: translateX(100%);
    opacity: 0;
  }
  .notification-enter-active, .notification-leave-active{
    transition: all 0.5s ease;
  }
  .notification-enter-to, .notification-leave-from{
    transform: translateX(0);
    opacity: 1;

  }
</style>