const http = require('http')
const { URL } = require('url')

const UserController = require('./controllers/UserController')

const routes = require('./routes')

const server = http.createServer((req, resp) => {
  const parsedUrl = new URL(`http://localhost:3001${req.url}`)

  console.log(`method: ${req.method} | Endpoint: ${parsedUrl.pathname}`)

  let { pathname } = parsedUrl

  const splitEndpoint = pathname
    .split('/')
    .filter(routeItem => Boolean(routeItem))

  if (splitEndpoint.length > 1) {
    pathname = `/${splitEndpoint[0]}/:id`
    id = splitEndpoint[1]
  }

  const route = routes.find(
    routeObj => routeObj.endpoint === pathname && routeObj.method === req.method
  )

  if (route) {
    req.query = parsedUrl.query
    req.params = { id }

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
