"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeData = exports.getData = void 0;

var getData = function getData(key) {
  if (!localStorage) return;

  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (err) {
    console.error("Error getting item ".concat(key, " from localStorage"), err);
  }
};

exports.getData = getData;

var storeData = function storeData(key, item) {
  if (!localStorage) return;

  try {
    return localStorage.setItem(key, JSON.stringify(item));
  } catch (err) {
    console.error("Error storing item ".concat(key, " to localStorage"), err);
  }
};

exports.storeData = storeData;