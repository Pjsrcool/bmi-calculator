"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactChartjs = require("react-chartjs-2");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bar = function Bar(_ref) {
  var labelData = _ref.labelData,
      bmiData = _ref.bmiData;

  var data = function data(canvas) {
    var ctx = canvas.getContext('2d');
    var gradient = ctx.createLinearGradient(63, 81, 181, 700);
    gradient.addColorStop(0, '#929dd9');
    gradient.addColorStop(1, '#172b4d');
    return {
      labels: labelData,
      datasets: [{
        label: 'BMI',
        data: bmiData,
        backgroundColor: gradient,
        borderColor: '#3F51B5',
        pointRadius: 6,
        pointHoverRadius: 8,
        pointHoverBorderColor: 'white',
        pointHoverBorderWidth: 2
      }]
    };
  };

  var options = {
    responsive: true,
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Date',
          fontSize: 18,
          fontColor: 'white'
        },
        gridLines: {
          display: false,
          color: 'white'
        },
        ticks: {
          fontColor: 'white',
          fontSize: 16
        }
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'BMI',
          fontSize: 18,
          fontColor: 'white'
        },
        gridLines: {
          display: false,
          color: 'white'
        },
        ticks: {
          fontColor: 'white',
          fontSize: 16,
          beginAtZero: true
        }
      }]
    },
    tooltips: {
      titleFontSize: 13,
      bodyFontSize: 13
    }
  };
  return (
    /*#__PURE__*/
    _react.default.createElement(_react.default.Fragment, null,
    /*#__PURE__*/
    _react.default.createElement(_reactChartjs.Line, {
      data: data,
      options: options
    }))
  );
};

Bar.propTypes = {
  labelData: _propTypes.default.array,
  bmiData: _propTypes.default.array
};
var _default = Bar;
exports.default = _default;