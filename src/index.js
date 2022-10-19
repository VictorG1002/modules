const http = require('http')
const { URL } = require('url')

const UserController = require('./controllers/UserController')

const routes = require('./routes')

const server = http.createServer((req, resp) => {
  const parsedUrl = new URL('http://localhost:3001/users?order=desc')

  console.log(`method: ${req.method} | Endpoint: ${parsedUrl.pathname}`)

  const route = routes.find(
    routeObj =>
      routeObj.endpoint === parsedUrl.pathname && routeObj.method === req.method
  )

  if (route) {
    req.query = parsedUrl.query
    route.handler(req, resp)
  } else {
    resp.writeHead(404, {
      'Content-Type': 'text/html'
    })
    resp.end(`Cannot ${req.method} ${parsedUrl.pathname}`)
  }
})

server.listen(3001, () => {
  console.log('rodando')
})
