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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedGridColumnMenu = void 0;
const react_1 = __importDefault(require("react"));
const x_data_grid_1 = require("@mui/x-data-grid");
const material_1 = require("@mui/material");
const arrow__up_1 = __importDefault(require("@hcl-software/enchanted-icons/dist/carbon/es/arrow--up"));
const arrow__down_1 = __importDefault(require("@hcl-software/enchanted-icons/dist/carbon/es/arrow--down"));
const column_1 = __importDefault(require("@hcl-software/enchanted-icons/dist/carbon/es/column"));
const view_1 = __importDefault(require("@hcl-software/enchanted-icons/dist/carbon/es/view"));
const Divider_1 = __importDefault(require("../Divider"));
const MenuItem_1 = __importDefault(require("../Menu/MenuItem"));
const ExtendedGridColumnMenu = ({ colDef, onSortModelChange, onColumnVisibilityModelChange, columnVisibilityModel, }) => {
    const apiContext = (0, x_data_grid_1.useGridApiContext)();
    const handleSortModelChange = (value) => {
        onSortModelChange([{ field: colDef.field, sort: value }]);
    };
    const handleHideColumn = () => {
        onColumnVisibilityModelChange(Object.assign(Object.assign({}, columnVisibilityModel), { [colDef.field]: false }));
    };
    return (react_1.default.createElement(material_1.Paper, { elevation: 3 },
        react_1.default.createElement(MenuItem_1.default, { onClick: () => { handleSortModelChange('asc'); } },
            react_1.default.createElement(arrow__up_1.default, null),
            ' ',
            "Ascending"),
        react_1.default.createElement(MenuItem_1.default, { onClick: () => { handleSortModelChange('desc'); } },
            react_1.default.createElement(arrow__down_1.default, null),
            ' ',
            "Descending"),
        react_1.default.createElement(Divider_1.default, null),
        react_1.default.createElement(MenuItem_1.default, { onClick: () => { handleHideColumn(); } },
            react_1.default.createElement(view_1.default, null),
            ' ',
            "Hide column"),
        react_1.default.createElement(MenuItem_1.default, { onClick: () => { apiContext.current.showPreferences(x_data_grid_1.GridPreferencePanelsValue.columns); } },
            react_1.default.createElement(column_1.default, null),
            ' ',
            "Manage columns")));
};
exports.ExtendedGridColumnMenu = ExtendedGridColumnMenu;
