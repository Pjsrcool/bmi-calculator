"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _BmiForm = _interopRequireDefault(require("./BmiForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("BmiForm Component", function () {
  var wrapper;
  var prop = {
    change: jest.fn()
  };
  beforeEach(function () {
    wrapper = (0, _enzyme.shallow)(
    /*#__PURE__*/
    _react.default.createElement(_BmiForm.default, prop));
  });
  it("renders", function () {
    expect(wrapper).not.toBeNull();
  });
  it("should update the weight", function () {
    var weight = wrapper.find("#weight");
    weight.simulate("change", {
      target: {
        name: "weight",
        value: "50"
      }
    });
    expect(wrapper.find("#weight").props().value).toEqual("50");
  });
  it("should update the height", function () {
    var height = wrapper.find("#height");
    height.simulate("change", {
      target: {
        name: "height",
        value: "176"
      }
    });
    expect(wrapper.find("#height").props().value).toEqual("176");
  });
  it("should call change", function () {
    wrapper.find("button").simulate("click");
    expect(prop.change).toHaveBeenCalledTimes(1);
  });
});