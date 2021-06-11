'use strict';


/**
 * Agregar un nuevo cliente
 *
 * body Cliente Cliente para agregar
 * no response value expected for this operation
 **/
exports.addClient = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Elimina un cliente
 *
 * clienteId Long ID del cliente a eliminar
 * api_key String  (optional)
 * no response value expected for this operation
 **/
exports.deleteClient = function(clienteId,api_key) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Devuelve todos los clientes
 * Trae todos los clientes existentes
 *
 * returns List
 **/
exports.findAllClients = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "us_telegram" : "us_telegram",
  "mail" : "mail",
  "direccion" : "direccion",
  "id" : 0,
  "nombre" : "nombre"
}, {
  "us_telegram" : "us_telegram",
  "mail" : "mail",
  "direccion" : "direccion",
  "id" : 0,
  "nombre" : "nombre"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Encuentra cliente por ID
 * Devuelve un solo cliente
 *
 * clienteId Long ID del cliente para devolver
 * returns Cliente
 **/
exports.getClientById = function(clienteId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "us_telegram" : "us_telegram",
  "mail" : "mail",
  "direccion" : "direccion",
  "id" : 0,
  "nombre" : "nombre"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Actualizar un cliente existente
 *
 * body Cliente Cliente para agregar
 * no response value expected for this operation
 **/
exports.updateClient = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

