'use strict';

var utils = require('../utils/writer.js');
var Cliente = require('../service/ClienteService');

module.exports.addClient = function addClient (req, res, next, body) {
  Cliente.addClient(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteClient = function deleteClient (req, res, next, clienteId, api_key) {
  Cliente.deleteClient(clienteId, api_key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findAllClients = function findAllClients (req, res, next) {
  Cliente.findAllClients()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getClientById = function getClientById (req, res, next, clienteId) {
  Cliente.getClientById(clienteId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateClient = function updateClient (req, res, next, body) {
  Cliente.updateClient(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
