'use strict';


/**
 * Agregar un nuevo producto
 *
 * body Producto Producto para agregar
 * no response value expected for this operation
 **/
exports.addProduct = function(body) {
  return new Promise(function(resolve, reject) {
    /*resolve();*/
    console.log("hola mundo");
  });
}


/**
 * Elimina un producto
 *
 * prodId Long ID del producto a eliminar
 * api_key String  (optional)
 * no response value expected for this operation
 **/
exports.deleteProduct = function(prodId,api_key) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Devuelve todos los productos
 * Trae todos los productos existentes
 *
 * returns List
 **/
exports.findAllProducts = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "descripcion" : "descripcion",
  "precio" : 6.0274563,
  "id" : 0,
  "nombre" : "banana"
}, {
  "descripcion" : "descripcion",
  "precio" : 6.0274563,
  "id" : 0,
  "nombre" : "banana"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Encuentra productos por ID
 * Devuelve un solo producto
 *
 * prodId Long ID del producto para devolver
 * returns Producto
 **/
exports.getProductById = function(prodId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "descripcion" : "descripcion",
  "precio" : 6.0274563,
  "id" : 0,
  "nombre" : "banana"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Actualizar un producto existente
 *
 * body Producto Producto para agregar
 * no response value expected for this operation
 **/
exports.updateProduct = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

