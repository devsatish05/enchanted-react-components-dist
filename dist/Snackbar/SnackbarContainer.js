"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnackbarContainerPosition = void 0;
const styles_1 = require("@mui/material/styles");
var SnackbarContainerPosition;
(function (SnackbarContainerPosition) {
    SnackbarContainerPosition["LEFT"] = "left";
    SnackbarContainerPosition["RIGHT"] = "right";
})(SnackbarContainerPosition || (exports.SnackbarContainerPosition = SnackbarContainerPosition = {}));
const SnackbarContainer = (0, styles_1.styled)('div')(({ position = SnackbarContainerPosition.RIGHT, }) => {
    return {
        position: 'fixed',
        bottom: '12px',
        right: position === SnackbarContainerPosition.RIGHT ? '12px' : 'unset',
        left: position === SnackbarContainerPosition.LEFT ? '12px' : 'unset',
        zIndex: 2,
    };
});
exports.default = SnackbarContainer;
