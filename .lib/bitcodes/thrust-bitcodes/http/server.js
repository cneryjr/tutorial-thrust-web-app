var server = require("thrust-bitcodes/http")
var router = require("thrust-bitcodes/router")

print("Hello Server!!")

server.createServer(3000, router)
