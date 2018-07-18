<template>
</template>

<script>
export default {
  name: 'MessageList',
  props: {
    messages: {
      type: [Array],
    },
    roomId: Number,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>

.message-list {
    grid-area: m;
}

.message-list {
    box-sizing: border-box;
    padding-left: 6px;
    width: 100%;
    height: 100%;
    overflow: scroll;
    background: var(--main-color);
}
.message-list .join-room {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 34px;
    font-weight: 300;
}

</style>