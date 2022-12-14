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
  },

  getUserById(req, resp) {
    const { id } = req.params

    const user = users.find(user => user.id === Number(id))

    if (!user) {
      resp.writeHead(200, {
        'Content-Type': 'application/json'
      })
      resp.end(JSON.stringify({ error: 'User not found' }))
    } else {
      resp.writeHead(200, {
        'Content-Type': 'application/json'
      })
      resp.end(JSON.stringify(user))
    }
  }
}
