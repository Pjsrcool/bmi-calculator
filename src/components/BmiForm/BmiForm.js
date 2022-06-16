"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("../App/App.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var initialValues = {
  weight: '',
  height: '',
  date: ''
};

var BmiForm = function BmiForm(_ref) {
  var change = _ref.change;

  var _useState = (0, _react.useState)(initialValues),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var handleChange = function handleChange(e) {
    var _objectSpread2;

    var _e$target = e.target,
        value = _e$target.value,
        name = _e$target.name;

    if (value > 999) {
      value = 999;
    }

    var date = new Date().toLocaleString().split(',')[0];
    setState(_objectSpread(_objectSpread({}, state), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, name, value), _defineProperty(_objectSpread2, "date", date), _objectSpread2)));
  };

  var handleSubmit = function handleSubmit() {
    change(state);
    setState(initialValues);
  };

  return (
    /*#__PURE__*/
    _react.default.createElement(_react.default.Fragment, null,
    /*#__PURE__*/
    _react.default.createElement("div", {
      className: "row"
    },
    /*#__PURE__*/
    _react.default.createElement("div", {
      className: "col m6 s12"
    },
    /*#__PURE__*/
    _react.default.createElement("label", {
      htmlFor: "weight"
    }, "Weight (in kg)"),
    /*#__PURE__*/
    _react.default.createElement("input", {
      id: "weight",
      name: "weight",
      type: "number",
      min: "1",
      max: "999",
      placeholder: "50",
      value: state.weight,
      onChange: handleChange
    })),
    /*#__PURE__*/
    _react.default.createElement("div", {
      className: "col m6 s12"
    },
    /*#__PURE__*/
    _react.default.createElement("label", {
      htmlFor: "height"
    }, "Height (in cm)"),
    /*#__PURE__*/
    _react.default.createElement("input", {
      id: "height",
      name: "height",
      type: "number",
      min: "1",
      max: "999",
      placeholder: "176",
      value: state.height,
      onChange: handleChange
    }))),
    /*#__PURE__*/
    _react.default.createElement("div", {
      className: "center"
    },
    /*#__PURE__*/
    _react.default.createElement("button", {
      id: "bmi-btn",
      className: "calculate-btn",
      type: "button",
      disabled: state.weight === '' || state.height === '',
      onClick: handleSubmit
    }, "Calculate BMI")))
  );
};

BmiForm.propTypes = {
  change: _propTypes.default.func.isRequired
};
var _default = BmiForm;
exports.default = _default;