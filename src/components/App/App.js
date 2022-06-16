"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _uuid = require("uuid");

require("materialize-css/dist/css/materialize.min.css");

require("./App.css");

var _BmiForm = _interopRequireDefault(require("../BmiForm/BmiForm"));

var _Info = _interopRequireDefault(require("../Info/Info"));

var _Bar = _interopRequireDefault(require("../Bar/Bar"));

var _localStorage = require("../../helpers/localStorage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var App = function App() {
  var initialState = function initialState() {
    return (0, _localStorage.getData)('data') || [];
  };

  var _useState = (0, _react.useState)(initialState),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

  (0, _react.useEffect)(function () {
    (0, _localStorage.storeData)('data', state);
    var date = state.map(function (obj) {
      return obj.date;
    });
    var bmi = state.map(function (obj) {
      return obj.bmi;
    });
    var newData = {
      date: date,
      bmi: bmi
    };
    setData(newData);
  }, [state]);

  var handleChange = function handleChange(val) {
    var heightInM = val.height / 100;
    val.bmi = (val.weight / (heightInM * heightInM)).toFixed(2);
    val.id = (0, _uuid.v4)();
    var newVal = [].concat(_toConsumableArray(state), [val]);
    var len = newVal.length;
    if (len > 7) newVal = newVal.slice(1, len);
    setState(newVal);
  };

  var handleDelete = function handleDelete(id) {
    (0, _localStorage.storeData)('lastState', state);
    var newState = state.filter(function (i) {
      return i.id !== id;
    });
    setState(newState);
  };

  var handleUndo = function handleUndo() {
    setState((0, _localStorage.getData)('lastState'));
  };

  return (
    /*#__PURE__*/
    _react.default.createElement("div", {
      className: "container"
    },
    /*#__PURE__*/
    _react.default.createElement("div", {
      className: "row center"
    },
    /*#__PURE__*/
    _react.default.createElement("h1", {
      className: "white-text"
    }, " BMI Tracker ")),
    /*#__PURE__*/
    _react.default.createElement("div", {
      className: "row"
    },
    /*#__PURE__*/
    _react.default.createElement("div", {
      className: "col m12 s12"
    },
    /*#__PURE__*/
    _react.default.createElement(_BmiForm.default, {
      change: handleChange
    }),
    /*#__PURE__*/
    _react.default.createElement(_Bar.default, {
      labelData: data.date,
      bmiData: data.bmi
    }),
    /*#__PURE__*/
    _react.default.createElement("div", null,
    /*#__PURE__*/
    _react.default.createElement("div", {
      className: "row center"
    },
    /*#__PURE__*/
    _react.default.createElement("h4", {
      className: "white-text"
    }, "7 Day Data")),
    /*#__PURE__*/
    _react.default.createElement("div", {
      className: "data-container row"
    }, state.length > 0 ?
    /*#__PURE__*/
    _react.default.createElement(_react.default.Fragment, null, state.map(function (info) {
      return (
        /*#__PURE__*/
        _react.default.createElement(_Info.default, {
          key: info.id,
          id: info.id,
          weight: info.weight,
          height: info.height,
          date: info.date,
          bmi: info.bmi,
          deleteCard: handleDelete
        })
      );
    })) :
    /*#__PURE__*/
    _react.default.createElement("div", {
      className: "center white-text"
    }, "No log found"))), (0, _localStorage.getData)('lastState') !== null ?
    /*#__PURE__*/
    _react.default.createElement("div", {
      className: "center"
    },
    /*#__PURE__*/
    _react.default.createElement("button", {
      className: "calculate-btn",
      onClick: handleUndo
    }, "Undo")) : '')))
  );
};

var _default = App;
exports.default = _default;