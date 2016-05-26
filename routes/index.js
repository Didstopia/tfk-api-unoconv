'use strict'

var config = require('../config')
var handlers = require('../handlers')

var routes = [
  {
    method: 'POST',
    path: '/unoconv/{format}',
    config: {
      payload: {
        output: 'stream',
        parse: true,
        allow: 'multipart/form-data',
        maxBytes: parseInt(config.PAYLOAD_MAX_SIZE, 10)
      },
      handler: handlers.handleUpload
    }
  },
  {
    method: 'GET',
    path: '/health',
    handler: function (request, reply) {
      return reply('OK');
    }
  }
]

module.exports = routes
