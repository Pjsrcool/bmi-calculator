"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Info = function Info(_ref) {
  var weight = _ref.weight,
      height = _ref.height,
      id = _ref.id,
      date = _ref.date,
      bmi = _ref.bmi,
      deleteCard = _ref.deleteCard;

  var handleDelete = function handleDelete() {
    deleteCard(id);
  };

  return (
    /*#__PURE__*/
    _react.default.createElement("div", {
      className: "col m6 s12"
    },
    /*#__PURE__*/
    _react.default.createElement("div", {
      className: "card"
    },
    /*#__PURE__*/
    _react.default.createElement("div", {
      className: "card-content"
    },
    /*#__PURE__*/
    _react.default.createElement("span", {
      className: "card-title",
      "data-test": "bmi"
    }, "BMI: ", bmi),
    /*#__PURE__*/
    _react.default.createElement("div", {
      className: "card-data"
    },
    /*#__PURE__*/
    _react.default.createElement("span", {
      "data-test": "weight"
    }, "Weight: ", weight, " kg"),
    /*#__PURE__*/
    _react.default.createElement("span", {
      "data-test": "height"
    }, "Height: ", height, " cm"),
    /*#__PURE__*/
    _react.default.createElement("span", {
      "data-test": "date"
    }, "Date: ", date)),
    /*#__PURE__*/
    _react.default.createElement("button", {
      className: "delete-btn",
      onClick: handleDelete
    }, "X"))))
  );
};

Info.propTypes = {
  weight: _propTypes.default.string,
  height: _propTypes.default.string,
  id: _propTypes.default.string,
  date: _propTypes.default.string,
  bmi: _propTypes.default.string,
  deleteCard: _propTypes.default.func
};
var _default = Info;
exports.default = _default;