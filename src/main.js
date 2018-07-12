import Vue from 'vue'
import App from './App.vue'
import RoomList from './components/RoomList'
import MessageList from './components/MessageList'
import Message from './components/Message'
import SendMessageForm from './components/SendMessageForm'

Vue.component('RoomList', RoomList)
Vue.component('MessageList', MessageList)
Vue.component('Message', Message)
Vue.component('SendMessageForm', SendMessageForm)

new Vue({
  el: '#app',
  render: h => h(App)
})
