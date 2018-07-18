<template>

</template>

<script>
export default {
  name: 'RoomList',
  props: {
    rooms: {
      type: [Array, Object],
      required: true,
    },
    subscribeToRoom: {
      type: Function,
    }
  },
  data() {
    return {
      roomId: null,
    };
  },
  methods: {
    handle(roomId) {
    }
  }
};
</script>

<style scoped>

.rooms-list {
    grid-area: r;
}
.rooms-list-logo-wrap {
    text-align: center;
}
.rooms-list-logo {
    width: 50%;
}

.rooms-list {
    box-sizing: border-box;
    padding: 10px;
    background-color: var(--secondary-color);
    overflow: scroll;
    height: 100%;
}
.rooms-list ul {
    list-style-type: none;    
    padding: 0;
    overflow: scoll;
}
.rooms-list li {
    margin: 10px 0;
}
.rooms-list h3 {
    margin: 5px 0;
    color: var(--secondary-color-color);
}
.rooms-list .room a {
    color: var(--secondary-text-color);
    font-weight: 600;
    text-decoration: none;
 }
.rooms-list .room.active a {
    color: var(--commit-color);
}


</style>