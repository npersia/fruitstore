'use strict';

var utils = require('../utils/writer.js');
var Pedido = require('../service/PedidoService');

module.exports.addPedido = function addPedido (req, res, next, body) {
  Pedido.addPedido(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePedido = function deletePedido (req, res, next, pedidoId, api_key) {
  Pedido.deletePedido(pedidoId, api_key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findAllPedidos = function findAllPedidos (req, res, next) {
  Pedido.findAllPedidos()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPedidoById = function getPedidoById (req, res, next, pedidoId) {
  Pedido.getPedidoById(pedidoId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePedido = function updatePedido (req, res, next, body) {
  Pedido.updatePedido(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
