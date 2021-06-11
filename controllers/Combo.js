'use strict';

var utils = require('../utils/writer.js');
var Combo = require('../service/ComboService');

module.exports.addCombo = function addCombo (req, res, next, body) {
  Combo.addCombo(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCombo = function deleteCombo (req, res, next, comboId, api_key) {
  Combo.deleteCombo(comboId, api_key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findAllCombos = function findAllCombos (req, res, next) {
  Combo.findAllCombos()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getComboById = function getComboById (req, res, next, comboId) {
  Combo.getComboById(comboId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCombo = function updateCombo (req, res, next, body) {
  Combo.updateCombo(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
