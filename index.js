const express = require('express') 
const app = express() 
const http = require('http') 
const httpServer = http.createServer(app) 
const { Server } = require('socket.io') 
const io = new Server(httpServer)
const PORT = 8000 

httpServer.listen(PORT, () => { 
    console.log(`server is running on http://localhost:${PORT}`)
})

io.on('connection', (socket) => { 
    io.sockets.emit('myMSG', `This is a broadcast message, so the socket id ${socket.id} is same for all connected user`)
})

app.get('/', (req, res) => { 
    res.sendFile(__dirname+'/index.html')
})
