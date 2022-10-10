const http = require('http')

const users = require('./mocks/users')

const server = http.createServer((req, resp) => {
  console.log(`method: ${req.method} | Endpoint: ${req.url}`)

  if (req.url === '/users' && req.method === 'GET') {
    resp.writeHead(200, {
      'Content-Type': 'application/json'
    })
    resp.end(JSON.stringify(users))
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
