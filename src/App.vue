<template>
  <div class="app welcome-text">
    <h1>Hi The Good... Load your gun Cowboy!</h1>
    <p>You must:</p>
    <ol>
      <li>Build your app with snippets in bullets.txt</li>
      <li>Run your app and fix it!</li>
      <li>Enter the #Saloon room</li>
      <li>Use your Passphrase as fast as possible to shoot any message in the #Saloon room, gain access to the band of #ElPasoBank and some points!</li>
      <li>Enter the #ElPasoBank using your new band name</li>
      <li>Shoot *bang in the #ElPasoBank and gain points!</li>
    </ol>

    <p>In #Saloon room: you can use
      <strong>*rank</strong> to see your current team points.</p>
    <p>In #ElPasoBank room: you can use
      <strong>*rank</strong> to see your current team points and
      <strong>*bands</strong> to see current band members.</p>

    <h2>Good Luck cowboy!</h2>

    <!-- View Messages -->
    <!-- Write Messages -->
    <!-- Show Rooms -->

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
      messages: [],
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
        this.getRooms();
      })
      .catch(err => console.log('error on connecting: ', err));
  },
  methods: {
    getRooms() {},
    subscribeToRoom(roomId) {},
    sendMessage(text) {},
    createRoom(name) {},
  },
};
</script>

<style>
/* :root {
  --main-color: #dedede;
  --secondary-color: #2e2e2d;
  --main-text-color: #2e2e2d;
  --secondary-text-color: #dedede;
  --send-message-form: white;
  --commit-color: #be1724;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: system-ui;
  font-weight: 200;
  color: white;
}

#root {
  height: 100%;
}

.app {
  display: grid;
  height: 100%;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 60px;
  grid-template-areas:
    'm m m m m r'
    'm m m m m r'
    'm m m m m r'
    'm m m m m r'
    'm m m m m r'
    's s s s s s';
} */

.welcome-text {
  color: var(--secondary-color);
}
</style>
