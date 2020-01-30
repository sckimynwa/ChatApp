const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

//routes
app.get('/', (req, res) => {
  res.render('index')
})

server = app.listen(3000);

// socket.io 
const io = require('socket.io')(server)
io.on('connection', (socket) => {
  console.log('new user connected')
})