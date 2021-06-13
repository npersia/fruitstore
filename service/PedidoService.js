'use strict';


/**
 * Agregar un nuevo pedido
 *
 * body Pedido Pedido para agregar
 * no response value expected for this operation
 **/
exports.addPedido = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Elimina un Pedido
 *
 * pedidoId Long ID del pedido a eliminar
 * api_key String  (optional)
 * no response value expected for this operation
 **/
exports.deletePedido = function(pedidoId,api_key) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Devuelve todos los pedidos
 * Trae todos los pedidos existentes
 *
 * returns List
 **/
exports.findAllPedidos = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "cliente" : 5,
  "precio" : 5,
  "estado" : "calle",
  "combos" : [ {
    "id_producto" : 6,
    "cantidad" : 1
  }, {
    "id_producto" : 6,
    "cantidad" : 1
  } ],
  "id" : 0,
  "productos" : [ {
    "id_producto" : 6,
    "cantidad" : 1
  }, {
    "id_producto" : 6,
    "cantidad" : 1
  } ]
}, {
  "cliente" : 5,
  "precio" : 5,
  "estado" : "calle",
  "combos" : [ {
    "id_producto" : 6,
    "cantidad" : 1
  }, {
    "id_producto" : 6,
    "cantidad" : 1
  } ],
  "id" : 0,
  "productos" : [ {
    "id_producto" : 6,
    "cantidad" : 1
  }, {
    "id_producto" : 6,
    "cantidad" : 1
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Encuentra pedido por ID
 * Devuelve un solo pedido
 *
 * pedidoId Long ID del pedido para devolver
 * returns Pedido
 **/
exports.getPedidoById = function(pedidoId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "cliente" : 5,
  "precio" : 5,
  "estado" : "calle",
  "combos" : [ {
    "id_producto" : 6,
    "cantidad" : 1
  }, {
    "id_producto" : 6,
    "cantidad" : 1
  } ],
  "id" : 0,
  "productos" : [ {
    "id_producto" : 6,
    "cantidad" : 1
  }, {
    "id_producto" : 6,
    "cantidad" : 1
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Actualizar un pedido existente
 *
 * body Pedido Pedido para agregar
 * no response value expected for this operation
 **/
exports.updatePedido = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

