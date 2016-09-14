'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = PauseIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('./IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PauseIcon(props) {
    return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, props, {
            viewBox: '0 0 24 24'
        }),
        _react2.default.createElement('path', { d: 'M6 19h4V5H6v14zm8-14v14h4V5h-4z' }),
        _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
    );
}