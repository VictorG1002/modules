const http = require('http')

const UserController = require('./controllers/UserController')

const routes = require('./routes')

const server = http.createServer((req, resp) => {
  console.log(`method: ${req.method} | Endpoint: ${req.url}`)

  const route = routes.find(
    routeObj => routeObj.endpoint === req.url && routeObj.method === req.method
  )

  if (route) {
    route.handler(req, resp)
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
