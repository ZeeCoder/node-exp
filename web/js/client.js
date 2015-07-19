var Client = {
  socket: null,

  init: function() {
    this.socket = io();
  },

  sendMessage: function(msg) {
    this.socket.emit('some event', msg);
  }
};

Client.init();
