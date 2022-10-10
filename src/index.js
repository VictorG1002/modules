const http = require('http')

const UserController = require('./controllers/UserController')

const server = http.createServer((req, resp) => {
  console.log(`method: ${req.method} | Endpoint: ${req.url}`)

  if (req.url === '/users' && req.method === 'GET') {
    UserController.listUsers(req, resp)
  } else {
    resp.writeHead(404, {
      'Content-Type': 'text/html'
    })
    resp.end(`Cannot ${req.method} ${req.url}`)
  }
})

server.listen(3001, () => {
  console.log('rodando')
})
