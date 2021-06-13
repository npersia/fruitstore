'use strict';


/**
 * Agregar un nuevo combo
 *
 * body Combo Combo para agregar
 * no response value expected for this operation
 **/
exports.addCombo = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Elimina un Combo
 *
 * comboId Long ID del combo a eliminar
 * api_key String  (optional)
 * no response value expected for this operation
 **/
exports.deleteCombo = function(comboId,api_key) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Devuelve todos los combos
 * Trae todos los combos existentes
 *
 * returns List
 **/
exports.findAllCombos = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "precio" : 5,
  "items-combo" : [ {
    "id_producto" : 6,
    "cantidad" : 1
  }, {
    "id_producto" : 6,
    "cantidad" : 1
  } ],
  "id" : 0
}, {
  "precio" : 5,
  "items-combo" : [ {
    "id_producto" : 6,
    "cantidad" : 1
  }, {
    "id_producto" : 6,
    "cantidad" : 1
  } ],
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Encuentra combo por ID
 * Devuelve un solo combo
 *
 * comboId Long ID del combo para devolver
 * returns Combo
 **/
exports.getComboById = function(comboId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "precio" : 5,
  "items-combo" : [ {
    "id_producto" : 6,
    "cantidad" : 1
  }, {
    "id_producto" : 6,
    "cantidad" : 1
  } ],
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Actualizar un combo existente
 *
 * body Combo Combo para agregar
 * no response value expected for this operation
 **/
exports.updateCombo = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

