<template>
  <form @submit.prevent="handleSubmit()" class="send-message-form">
    <input :disabled="disabled" v-model="message" placeholder="Type your message and hit ENTER" type="text" />
  </form>
</template>

<script>
export default {
  name: 'SendMessageForm',
  props: { disabled: Boolean, sendMessage: Function },
  data() {
    return {
      message: '',
    };
  },
  methods: {
    handleSubmit() {
      this.sendMessage(this.message);
      this.message = '';
    },
  },
};
</script>

<style>

.send-message-form {
    grid-area: s;
}


.send-message-form {
    background: var(--send-message-form);
    display: flex;
}

.send-message-form input {
    width: 100%;
    padding: 15px 10px;
    margin: 0;
    border-style: none;
    background: var(--send-message-form);
    font-weight: 200;

}

.send-message-form input:focus {
    outline-width: 0;
}

.send-message-form input::placeholder {
    color: var(--main-text-color);
}

</style>