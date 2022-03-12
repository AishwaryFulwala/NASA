const port = process.env.port || 8000
const http = require('http')

const app = require('./app')

const { loadPlantes } = require('./models/planets.model')

const server = http.createServer(app)

async function startServer() { 
    server.listen(port, () => {
        console.log(port)
    })

    await loadPlantes()
}

startServer()