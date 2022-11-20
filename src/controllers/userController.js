const axios = require('axios');

module.exports = {
  async getAllUsersSince(req, res) {
    const { since } = req.query;

    await axios.get('https://api.github.com/users' + `?since=${since}`)
      .then(function (gitResponse) {
        const usersList = {
          list: gitResponse.data,
          nextPage: gitResponse.headers.link.split(';')[0].slice(1, -1)
        }
        res.json(usersList)
      })
      .catch((err) => {
        res.json({ msg: `Users not found! ${err}` })
      })
    
  }
}