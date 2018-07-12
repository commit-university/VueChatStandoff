<template>
  <div class="app">
    <RoomList :rooms="[...joinableRooms, ...joinedRooms]" :subscribeToRoom="subscribeToRoom" />
    <MessageList :roomId="roomId" :messages="messages" />
    <SendMessageForm :disabled="!roomId" :sendMessage="sendMessage" />
  </div>
</template>

<script>
import Chatkit from '@pusher/chatkit';
import { tokenUrl, instanceLocator, userName } from './config';

export default {
  name: 'app',
  data() {
    return {
      joinableRooms: [],
      joinedRooms: [],
      roomId: null,
      currentUser: '',
      messages: []
    };
  },
  mounted() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: userName,
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl,
      }),
    });

    chatManager
      .connect()
      .then(currentUser => {
        this.currentUser = currentUser;
        console.log(this.currentUser.rooms);
        this.getRooms();
      })
      .catch(err => console.log('error on connecting: ', err));
  },
  methods: {
    getRooms() {
      this.currentUser
        .getJoinableRooms()
        .then(joinableRooms => {
          this.joinableRooms = joinableRooms;
          this.joinedRooms = this.currentUser.rooms;
        })
        .catch(err => console.log('error on joinableRooms: ', err));
    },
    subscribeToRoom(roomId) {
      this.messages = [];
      this.currentUser
        .subscribeToRoom({
          roomId: roomId,
          hooks: {
            onNewMessage: message => {
              this.messages = [...this.messages, message]
            },
            onUserStartedTyping: user => {
              /** render out the users */
            },
          },
        })
        .then(room => {
          this.roomId = room.id, 
          this.getRooms();
        })
        .catch(err => console.log('error on subscribing to room: ', err));
    },
    sendMessage(text) {
      this.currentUser.sendMessage({
        text,
        roomId: this.roomId,
      });
    },
    createRoom(name) {
      this.currentUser
        .createRoom({
          name,
        })
        .then(room => {
          this.subscribeToRoom(room.id);
        })
        .catch(err => console.log('error with createRoom: ', err));
    },
  },
};
</script>

<style>
:root {
    --main-color: #dedede;
    --secondary-color: #2e2e2d;
    --main-text-color: #2e2e2d;
    --secondary-text-color: #dedede;
    --send-message-form: white;
    --commit-color: #be1724
}

html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: system-ui;
    font-weight: 200;
    color: white; 
}

.app {
    display: grid;
    height: 100%;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 60px;
    grid-template-areas: 
        "m m m m m r"
        "m m m m m r"
        "m m m m m r"
        "m m m m m r"
        "m m m m m r"
        "s s s s s s";
}

</style>
