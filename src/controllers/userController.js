const axios = require('axios');

module.exports = {
  async getAllUsersSince(req, res) {
    const { since } = req.query;

    await axios.get('https://api.github.com/users' + `?since=${since}`)
      .then(function (gitResponse) {
        res.json(gitResponse.data)
      })
      .catch((err) => {
        res.json({ msg: `Users not found! ${err}` })
      })
  }
}