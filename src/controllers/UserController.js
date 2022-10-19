const users = require('../mocks/users')

module.exports = {
  listUsers(req, resp) {
    const { order } = req.query
    const sordeUsers = users.sort((a, b) => {
      if (order === 'desc') {
        return a.id < b.id ? 1 : -1
      }

      return a.id > b.id ? 1 : -1
    })

    resp.writeHead(200, {
      'Content-Type': 'application/json'
    })
    resp.end(JSON.stringify(sordeUsers))
  }
}
