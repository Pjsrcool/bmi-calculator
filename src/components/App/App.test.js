"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('App Component', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.shallow)(
    /*#__PURE__*/
    _react.default.createElement(_App.default, null));
  });
  it('renders', function () {
    expect(wrapper).not.toBeNull();
  });
});