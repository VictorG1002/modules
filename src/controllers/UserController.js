const users = require('../mocks/users')

module.exports = {
  listUsers(req, resp) {
    resp.writeHead(200, {
      'Content-Type': 'application/json'
    })
    resp.end(JSON.stringify(users))
  }
}
