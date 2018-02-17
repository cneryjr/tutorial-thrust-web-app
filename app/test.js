exports = {

  GET: {
    hello: function(params, req, res) {
      res.write('GET hello!')
    }
  },

  POST: {
    phello: function(params, req, res) {
      print('phello => ', JSON.stringify(params))
      res.write('hello!')
    },
    pecho: function(params, req, res) {
      print('pecho => ', JSON.stringify(params))
      params.server = true
      res.json(params)
    }
  },

  echo: function(params, req, res) {
    print('echo => ', JSON.stringify(params))
    params.server = true
    res.json(params)
  }

}
