const express =require('express')
const app = express()

const http = require('http')
const server = http.createServer(app)
//create server using socketio
const {Server} = require('socket.io')

//websocket on server
const io = new Server(server)

//interface when entering the homepage
app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
        console.log('user-connected')
        socket.on('on-chat', data => {
                io.emit('user-chat', data)
        })
})
//server initialization
server.listen(process.env.PORT || 3000, () => {
        console.log('listening on port 3000')
})

