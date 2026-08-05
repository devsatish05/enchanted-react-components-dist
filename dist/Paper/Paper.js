"use strict";
/* ======================================================================== *
 * Copyright 2024 HCL America Inc.                                          *
 * Licensed under the Apache License, Version 2.0 (the "License");          *
 * you may not use this file except in compliance with the License.         *
 * You may obtain a copy of the License at                                  *
 *                                                                          *
 * http://www.apache.org/licenses/LICENSE-2.0                               *
 *                                                                          *
 * Unless required by applicable law or agreed to in writing, software      *
 * distributed under the License is distributed on an "AS IS" BASIS,        *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. *
 * See the License for the specific language governing permissions and      *
 * limitations under the License.                                           *
 * ======================================================================== */
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMuiPaperThemeOverrides = void 0;
const react_1 = __importDefault(require("react"));
const Paper_1 = __importDefault(require("@mui/material/Paper"));
const getMuiPaperThemeOverrides = () => {
    return {
        MuiPaper: {
            variants: [
                {
                    props: { variant: 'nopadding' },
                    style: {
                        padding: '0px',
                    },
                },
            ],
            styleOverrides: {
                root: ({ ownerState, theme }) => {
                    return (Object.assign(Object.assign({ '&.MuiPaper-root': {
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: theme.palette.background.paper,
                        } }, ownerState.variant === 'elevation' && {
                        boxShadow: (ownerState.elevation !== undefined && theme.shadows[ownerState.elevation]) || theme.shadows[2],
                        padding: '8px',
                    }), ownerState.variant === 'outlined' && {
                        border: `1px solid ${theme.palette.border.primary}`,
                        padding: '8px',
                    }));
                },
            },
        },
    };
};
exports.getMuiPaperThemeOverrides = getMuiPaperThemeOverrides;
const paperDefaultProps = {
    variant: 'outlined',
    square: false,
    elevation: 0,
};
const Paper = react_1.default.forwardRef((_a, ref) => {
    var rawProps = __rest(_a, []);
    const props = Object.assign(Object.assign({}, paperDefaultProps), rawProps);
    return react_1.default.createElement(Paper_1.default, Object.assign({ ref: ref }, props));
});
exports.default = Paper;
