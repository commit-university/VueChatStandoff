<template>

</template>

<script>
import { userName } from '../config';
export default {
  name: 'Message',
  props: { message: Object },
  data() {
    return {
      user: userName,
    };
  },
};
</script>

<style scoped>
.message {
  margin: 15px 0;
}

.my-message {
  text-align: right;
}

.message .message-username {
  font-size: 12px;
  font-weight: 900;
  color: var(--main-text-color);
  opacity: 0.9;
  margin-bottom: 6px;
}

.message .message-text {
  font-size: 14px;
  background: var(--commit-color);
  color: var(--primary-text-color);
  display: inline;
  padding: 4px 8px;
  border-radius: 8px;
  line-height: 1.75em;
}

.my-message .message-text {
  background: var(--secondary-color);
}
</style>