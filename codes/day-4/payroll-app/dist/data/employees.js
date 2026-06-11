"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports["default"] = exports.add = void 0;
var employees = [];
var add = exports.add = function add(e) {
  return employees.push(e);
};
var remove = exports.remove = function remove(index) {
  return employees.splice(index, 1);
};
var _default = exports["default"] = employees;
//# sourceMappingURL=employees.js.map