$(function () {

  // make connection
  var socket = io.connect('http://localhost:3000')

  // buttons inputs
  var message = $("#message")
  var username = $("#username")
  var send_message = $("#send_message")
  var send_username = $("#send_username")
  var chatroom = $("#chatroom")
  var feedback = $("#feedback")

  // emit mesasge
  send_message.click(function () {
    socket.emit('new_message', { message: message.val() })
  })

  // listen on new message
  socket.on("new_message", (data) => {
    feedback.html('');
    message.val('');
    chatroom.append("<p class='message'>" + data.username + ": " + data.message + "</p>");
  })

  // emit a username
  send_username.click(function () {
    socket.emit('change_username', { username: username.val() })
  })

  // emit typing
  message.bind("keypress", () => {
    socket.emit('typing')
  })

  // listen on typing
  socket.on('typing', (data) => {
    feedback.html("<p><i>" + data.username + " is typing a message..." + "</i></p>")
  })

})