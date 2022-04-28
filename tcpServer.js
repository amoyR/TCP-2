const net = require("net")

const server = net.createServer(socket => {
  socket.on("data", data => {
    console.log("data: " + data + " /from" + socket.remoteAddress + ":" + socket.remotePort)
  })
}).listen(3300)
