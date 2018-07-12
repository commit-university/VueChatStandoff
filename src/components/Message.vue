<template>
  <div class="message">
    <div class="message-username">{{message.username}}</div>
    <div class="message-text">{{message.text}}</div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: { message: Object },
};
</script>

<style>
.message {
  margin: 15px 0;
}

.message .message-username {
  font-size: 11px;
  color: var(--main-text-color);
  opacity: 0.9;
  margin-bottom: 6px;
}

.message .message-text {
  background: var(--commit-color);
  color: var(--primary-text-color);
  display: inline;
  padding: 4px 8px;
  border-radius: 8px;
  line-height: 1.75em;
}
</style>