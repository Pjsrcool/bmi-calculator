"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Bar = _interopRequireDefault(require("./Bar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock("react-chartjs-2", function () {
  return {
    Line: function Line() {
      return null;
    }
  };
});
describe("Bar component", function () {
  var wrapper;
  var prop = {
    labelData: ["27/10/2019"],
    bmiData: ["16.14"]
  };
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(
    /*#__PURE__*/
    _react.default.createElement(_Bar.default, prop));
  });
  it("renders", function () {
    expect(wrapper).not.toBeNull();
    console.log(wrapper.debug());
  });
});