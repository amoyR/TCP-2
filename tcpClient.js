const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const net = require("net")

const client = net.connect("3300", "localhost", () => {
  console.log("connected to server")
  readline.question('What message do you wanna send to the server ? => ', msg => {
    console.log(`your msg is ${msg}`);
    client.write(msg)
    readline.close();
  })
})
