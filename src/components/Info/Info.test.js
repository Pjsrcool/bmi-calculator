"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Info = _interopRequireDefault(require("./Info"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Info Component", function () {
  var wrapper;
  var props = {
    weight: "50",
    height: "176",
    id: "2b926f1b-db1f-45ac-af87-2130da1e1a2f",
    date: "10/25/2019",
    bmi: "16.14",
    deleteCard: jest.fn()
  };
  beforeEach(function () {
    wrapper = (0, _enzyme.shallow)(
    /*#__PURE__*/
    _react.default.createElement(_Info.default, props));
  });
  it("renders", function () {
    expect(wrapper).not.toBeNull();
  });
  it("renders with props", function () {
    expect(wrapper.find("[data-test='bmi']").text()).toEqual("BMI: 16.14");
    expect(wrapper.find("[data-test='weight']").text()).toEqual("Weight: 50 kg");
    expect(wrapper.find("[data-test='height']").text()).toEqual("Height: 176 cm");
    expect(wrapper.find("[data-test='date']").text()).toEqual("Date: 10/25/2019");
  });
  it("should delete the card", function () {
    wrapper.find("button").simulate("click");
    expect(props.deleteCard).toHaveBeenCalledTimes(1);
  });
});