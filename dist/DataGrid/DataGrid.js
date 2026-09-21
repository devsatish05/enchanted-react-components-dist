"use strict";
/* ======================================================================== *
 * Copyright 2024-2026 HCL America Inc.                                          *
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
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
exports.DataGridTestIds = exports.alwaysVisibleColHeadIconModifier = void 0;
const react_1 = __importDefault(require("react"));
const x_data_grid_1 = require("@mui/x-data-grid");
const material_1 = require("@mui/material");
const Checkbox_1 = __importDefault(require("../Checkbox"));
const Pagination_1 = __importStar(require("../Pagination"));
const eventUtils_1 = require("../utils/eventUtils");
const DataGridDivider_1 = __importDefault(require("./DataGridDivider"));
const ColumnSortedAscendingIcon_1 = __importDefault(require("./ColumnSortedAscendingIcon"));
const ColumnSortedDescendingIcon_1 = __importDefault(require("./ColumnSortedDescendingIcon"));
// Style modifier for the column header that ensures always visibility of sorting icon, NOT just on hover which was default behavior
exports.alwaysVisibleColHeadIconModifier = `${x_data_grid_1.gridClasses['columnHeader--sortable']}--alwaysVisibleIcon`;
var DataGridTestIds;
(function (DataGridTestIds) {
    DataGridTestIds["DATAGRID_CHECKBOX"] = "dataGridCheckbox";
    DataGridTestIds["DATAGRID_PAGINATION"] = "dataGridPagination";
})(DataGridTestIds || (exports.DataGridTestIds = DataGridTestIds = {}));
const StyledDataGrid = (0, material_1.styled)(x_data_grid_1.DataGrid)((props) => {
    const { theme } = props;
    const focusSelector = `.MuiDataGrid-row[data-id="${props.focusedRow}"]`;
    return Object.assign(Object.assign(Object.assign({ fontFamily: theme.typography.fontFamily, '&.MuiDataGrid-root': {
            border: 'none',
            '--DataGrid-containerBackground': theme.palette.common.white,
            '--DataGrid-overlayHeight': 'calc(var(--height) * 2)',
        }, '& .MuiDataGrid-columnHeaders': Object.assign({ background: theme.palette.common.white, '& .MuiDataGrid-columnHeaderTitle': Object.assign(Object.assign({}, theme.typography.subtitle2), { fontColor: theme.palette.text.primary }) }, (props.stickyHeader === true) && {
            position: 'sticky',
            zIndex: 1,
        }), [`& .${x_data_grid_1.gridClasses['row--borderBottom']} .${x_data_grid_1.gridClasses.filler}`]: {
            borderBottom: `1px ${theme.palette.border.primary} solid !important`,
        }, 
        // In MUI v7, border-bottom on column header cells (from row--borderBottom) is added ON TOP
        // of the row height (37px content + 1px border = 38px visible). In v5, the border was on
        // the container with box-sizing: border-box, so it was INCLUDED within 37px.
        // This fix uses box-sizing: border-box so the border fits within the inline height.
        [`& .${x_data_grid_1.gridClasses['row--borderBottom']} .${x_data_grid_1.gridClasses.columnHeader}`]: {
            boxSizing: 'border-box',
            borderBottom: `1px ${theme.palette.border.primary} solid !important`,
        }, [`& .${x_data_grid_1.gridClasses['row--borderBottom']} .${x_data_grid_1.gridClasses.scrollbarFiller}`]: {
            boxSizing: 'border-box',
        }, '& .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer': {
            gap: '0',
        }, '& .MuiDataGrid-hide-checkbox > .MuiDataGrid-cell': {
            borderTop: 'none',
        }, 
        // Remove default MUI withBorderColor border from column headers.
        // The row--borderBottom border (set above with higher specificity + !important) is preserved.
        '& .MuiDataGrid-withBorderColor, & .MuiDataGrid-columnHeader': {
            borderBottom: 'none',
        }, '& .MuiDataGrid-row': {
            '.MuiCheckbox-root': {
                marginRight: '0',
            },
        }, '& .MuiDataGrid-row:hover': Object.assign(Object.assign({ backgroundColor: theme.palette.action.hover }, (props.isRowClickable === true) && {
            cursor: 'pointer',
        }), { '.MuiCheckbox-root': {
                display: 'inline-flex',
                padding: '4px',
                height: '24px',
                width: '24px',
                '.PrivateSwitchBase-input': {
                    height: '24px',
                    width: '24px',
                },
            }, '& .MuiDataGrid-cell--withEndActions': {
                display: 'flex',
            } }), '& .MuiDataGrid-row.Mui-selected:hover': {
            backgroundColor: theme.palette.action.hover,
        }, '& .MuiDataGrid-row.Mui-selected': {
            backgroundColor: theme.palette.action.activeOpacity,
            '.MuiCheckbox-root': {
                display: 'inline-flex',
                padding: '4px',
                height: '24px',
                width: '24px',
                '.PrivateSwitchBase-input': {
                    height: '24px',
                    width: '24px',
                },
            },
        }, '& .MuiDataGrid-cell:focus': {
            border: `1px ${theme.palette.action.focus} solid`,
            outline: 'none',
        }, '& .MuiDataGrid-hide-checkbox .MuiCheckbox-root': {
            display: 'none',
        }, '& .withEndActions .MuiDataGrid-cell--withEndActions': {
            display: 'flex',
        }, '& .MuiDataGrid-cell': {
            borderBottom: `1px ${theme.palette.border.secondary} solid`,
            paddingLeft: '12px',
            paddingRight: '12px',
            textAlign: 'center',
            '&.MuiDataGrid-cellCheckbox': {
                paddingRight: '12px',
            },
        }, '& .MuiDataGrid-columnHeader': {
            padding: '0',
            '&--sortable--alwaysVisibleIcon': {
                '& .MuiDataGrid-iconButtonContainer': {
                    visibility: 'visible',
                    width: 'auto',
                    '& .MuiDataGrid-sortIcon': {
                        opacity: 0.5,
                        color: theme.palette.action.active,
                    },
                },
            },
            '&.MuiDataGrid-columnHeaderCheckbox': {
                '& .MuiDataGrid-columnHeaderTitleContainer': {
                    marginRight: '12px',
                },
            },
            '& .MuiDataGrid-iconButtonContainer': {
                margin: '8px',
            },
        }, '& .MuiDataGrid-columnHeaderTitleContainer': {
            marginLeft: '12px',
            marginRight: '12px',
        }, '& .MuiDataGrid-columnHeaderTitle': Object.assign({}, theme.typography.subtitle2), '& .MuiDataGrid-columnHeaders:hover': {
            '& .MuiDataGrid-columnSeparator': {
                display: 'flex',
            },
            '& .MuiDataGrid-columnHeader:last-child .MuiDataGrid-columnSeparator': {
                display: 'none',
            },
            '& .MuiDataGrid-columnSeparator--sideRight': {
                right: '4px',
            },
        }, '& .MuiDataGrid-columnSeparator': {
            display: 'none',
        }, '& .MuiDataGrid-columnHeaders:focus': {
            outline: 'none',
            border: `1px ${theme.palette.action.focus} solid`,
        }, '& .css-bvnt8w-MuiGrid-root': {
            height: `auto !important`,
        }, '& .MuiDataGrid-columnHeader--alignRight .MuiDataGrid-columnHeaderTitleContainer': {
            flexDirection: 'row',
            '& .MuiDataGrid-columnHeaderTitleContainerContent': {
                marginLeft: 'auto',
                marginRight: 0,
            },
        }, '& .MuiDataGrid-columnHeaderCheckbox.MuiDataGrid-columnHeader:focus-within': {
            outline: 'none',
            border: 'none',
        }, '& .MuiDataGrid-columnHeader:focus-within': {
            outline: 'none',
            border: `1px solid ${theme.palette.action.focus}`,
            ' .MuiDataGrid-iconButtonContainer': {
                visibility: 'visible',
                width: 'auto',
                ' .MuiSvgIcon-root': {
                    opacity: '1',
                    border: `1px solid ${theme.palette.action.focus}`,
                    borderRadius: '3px',
                },
            },
            ' .MuiTouchRipple-root': {
                display: 'none',
            },
        }, '& .MuiDataGrid-columnHeader:focus': {
            outline: 'none',
        }, '& .MuiDataGrid-cellCheckbox.MuiDataGrid-cell:focus-within': {
            outline: 'none',
            border: 'none',
            borderBottom: `1px ${theme.palette.action.activeOpacity} solid !important`, // need to be important so border bottom will not primary when it is a checkbox cell
        }, '& .MuiDataGrid-cell:focus-within': {
            outline: 'none',
            border: `1px ${theme.palette.action.focus} solid`,
            borderBottom: `1px ${theme.palette.action.focus} solid !important`, // need to be important to override data grid border bottom behaviour when focused
        }, [focusSelector]: {
            outline: 'none',
            border: `1px ${theme.palette.action.focus} solid`,
            '& .MuiDataGrid-cell:last-child': {
                borderRight: `2px ${theme.palette.action.focus} solid`,
            },
            '.MuiCheckbox-root': {
                display: 'inline-flex',
                padding: '4px',
                height: '24px',
                width: '24px',
                '.PrivateSwitchBase-input': {
                    height: '24px',
                    width: '24px',
                },
            },
            '& .MuiDataGrid-cell--withEndActions': {
                display: 'flex',
            },
        }, '& .MuiDataGrid-cell:has(.MuiDataGrid-cell--withEndActions)': {
            borderLeft: 'none',
            borderRight: 'none',
            borderTop: 'none',
            ':focus-within': {
                borderBottom: `1px ${theme.palette.action.activeOpacity} solid !important`,
            },
        }, '& .MuiDataGrid-columnHeader.MuiDataGrid-columnHeader--sortable:focus': {
            outline: 'none',
            border: 'none',
        }, '& .MuiDataGrid-row--lastVisible .MuiDataGrid-cell': {
            borderBottom: 'none',
        }, '& .MuiDataGrid-overlay': {
            background: theme.palette.common.white,
        } }, (props.stickyHeader === true) && {
        '& .MuiDataGrid-main': {
            // remove overflow hidden overwise sticky does not work
            overflow: 'unset',
        },
        '& .MuiDataGrid-virtualScroller': {
            // remove the space left for the header
            marginTop: '0!important',
        },
    }), (props.hideFooter) && {
        '& .MuiDataGrid-virtualScroller': {
            borderBottom: `1px ${theme.palette.border.secondary} solid`,
        },
    }), (props.totalCount <= 0) && {
        '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
        },
        '& .MuiDataGrid-columnHeaders': {
            display: 'none',
            border: 'none !important',
        },
    });
});
/**
* Renders a data grid, it replaces the table component.
*/
const DataGrid = (_a) => {
    var { slots, slotProps, page, pageSize, totalCount, translation, rowsPerPageOptions, onCheckboxClick, onPageChange, onPageSizeChange } = _a, props = __rest(_a, ["slots", "slotProps", "page", "pageSize", "totalCount", "translation", "rowsPerPageOptions", "onCheckboxClick", "onPageChange", "onPageSizeChange"]);
    const [focusRow, setFocusRow] = react_1.default.useState('');
    const arrowKey = react_1.default.useRef('');
    // this function handles different key bindings for each row on the table
    const handleOnRowKeyDown = (event) => {
        var _a, _b;
        const target = event.target;
        // get row check box for table row
        const rowCheckbox = (0, eventUtils_1.findTargetElement)(target, 'PrivateSwitchBase-input', false);
        // if users press enter or space it will select the row.
        if (event.key === 'Enter' || event.key === ' ') {
            if (rowCheckbox) {
                rowCheckbox.click();
            }
            else if (event.key === 'Enter') {
                target.click();
            }
        }
        // add navigation control if user press arrow right it will focus on action button on a row
        if (event.key === 'ArrowRight' && target.classList.contains('MuiDataGrid-row')) {
            setFocusRow(''); // to remove border
            const cellWithEndAction = target.querySelectorAll('.MuiDataGrid-cell--withEndActions');
            if (cellWithEndAction.length > 0) {
                const parentCell = (0, eventUtils_1.findTargetElement)(cellWithEndAction[0], 'MuiDataGrid-cell', true);
                if (parentCell === null || parentCell === void 0 ? void 0 : parentCell.firstElementChild) {
                    parentCell.firstElementChild.focus();
                }
            }
            else if (target.firstElementChild) {
                target.firstElementChild.focus();
            }
        }
        if (event.key === 'ArrowLeft') {
            // we need to focus on the row if the cell is the last cell
            if (!target.previousElementSibling) {
                const parentRow = (0, eventUtils_1.findTargetElement)(target, 'MuiDataGrid-row', true);
                setFocusRow(parentRow === null || parentRow === void 0 ? void 0 : parentRow.getAttribute('data-id'));
                if (parentRow)
                    parentRow.focus();
            }
            // we show the border if the cell is the checkbox cell or we are already focused on the row
            if (!target.classList.contains('PrivateSwitchBase-input') && !target.classList.contains('MuiDataGrid-row')) {
                setFocusRow(''); // to remove border
            }
        }
        // if user hold shift and press arrow down row should be selected below
        if (event.shiftKey && event.key === 'ArrowDown') {
            if (target.nextElementSibling) {
                if (target.className.includes('Mui-selected') && target.nextElementSibling.className.includes('Mui-selected')) {
                    // this handle when next row is already selected
                    if (rowCheckbox) {
                        rowCheckbox.click();
                        target.nextElementSibling.focus();
                    }
                }
                else {
                    const nextSiblingCheckBox = (0, eventUtils_1.findTargetElement)(target.nextElementSibling, 'PrivateSwitchBase-input', false);
                    // focuses on the next row
                    target.nextElementSibling.focus();
                    // enable select to next row
                    if (nextSiblingCheckBox)
                        nextSiblingCheckBox.click();
                }
            }
        }
        // if user hold shift and press arrow up row should be selected above
        if (!event.ctrlKey && event.shiftKey && event.key === 'ArrowUp') {
            if (target.previousElementSibling) {
                if (target.className.includes('Mui-selected') && target.previousElementSibling.className.includes('Mui-selected')) {
                    // this handle when previous row is already selected
                    if (rowCheckbox) {
                        rowCheckbox.click();
                        target.previousElementSibling.focus();
                    }
                }
                else {
                    const previousSiblingCheckBox = (0, eventUtils_1.findTargetElement)(target.previousElementSibling, 'PrivateSwitchBase-input', false);
                    // focuses on the previous row
                    target.previousElementSibling.focus();
                    // enable select to previous row
                    if (previousSiblingCheckBox)
                        previousSiblingCheckBox.click();
                }
            }
        }
        // this allow user to navigate via keyboard table row by pressing arrow down
        if (!event.shiftKey && event.key === 'ArrowDown') {
            const parentCell = (0, eventUtils_1.findTargetElement)(target, 'MuiDataGrid-cell', true);
            const parentRow = parentCell === null || parentCell === void 0 ? void 0 : parentCell.parentElement;
            if (target.nextElementSibling) {
                // hide the checkbox to current select row
                target.classList.add('MuiDataGrid-hide-checkbox');
                // focus to next row
                const nextFocusableRow = (0, eventUtils_1.findNextFocusableRow)(target);
                nextFocusableRow.focus();
            }
            else if (parentCell && ((_a = parentRow === null || parentRow === void 0 ? void 0 : parentRow.nextElementSibling) === null || _a === void 0 ? void 0 : _a.classList.contains('disabled-row'))) {
                // find next focusable row
                const nextFocusableRow = (0, eventUtils_1.findNextFocusableRow)(parentRow);
                if (!nextFocusableRow) {
                    return;
                }
                const nextRow = parentRow === null || parentRow === void 0 ? void 0 : parentRow.nextElementSibling;
                const nextRowCell = nextRow.querySelector(`.MuiDataGrid-cell[data-colindex="${parentCell === null || parentCell === void 0 ? void 0 : parentCell.getAttribute('data-colindex')}"]`);
                nextRowCell.firstChild.focus();
            }
        }
        // this allow user to navigate via keyboard table row by pressing arrow up
        if (!event.shiftKey && event.key === 'ArrowUp') {
            const previousFocusableRow = (0, eventUtils_1.findPreviousFocusableRow)(target);
            const parentCell = (0, eventUtils_1.findTargetElement)(target, 'MuiDataGrid-cell', true);
            const parentRow = parentCell === null || parentCell === void 0 ? void 0 : parentCell.parentElement;
            // check if we have previous row
            if (previousFocusableRow && target.classList.contains('MuiDataGrid-row')) {
                // hide the checkbox to current select row
                target.classList.add('MuiDataGrid-hide-checkbox');
                // focus to previous row
                previousFocusableRow.focus();
            }
            else if (parentCell && ((_b = parentRow === null || parentRow === void 0 ? void 0 : parentRow.previousElementSibling) === null || _b === void 0 ? void 0 : _b.classList.contains('disabled-row'))) {
                // find previous row
                const previousRow = parentRow === null || parentRow === void 0 ? void 0 : parentRow.previousElementSibling;
                const previousRowCell = previousRow.querySelector(`.MuiDataGrid-cell[data-colindex="${parentCell === null || parentCell === void 0 ? void 0 : parentCell.getAttribute('data-colindex')}"]`);
                previousRowCell.focus();
            }
            else {
                // to focus the columnHeaders since we dont have previousElementSibling
                target.classList.add('MuiDataGrid-hide-checkbox');
                const dataGridMain = (0, eventUtils_1.findTargetElement)(target, 'MuiDataGrid-main', true);
                if (dataGridMain.firstElementChild && dataGridMain.firstElementChild.className.includes('MuiDataGrid-columnHeaders ')) {
                    setFocusRow(''); // to hide border on current row
                    dataGridMain.firstElementChild.focus();
                }
            }
        }
        // this allow user to jump to column header row when they press shift, control then arrow up
        if (event.shiftKey && event.ctrlKey && event.key === 'ArrowUp') {
            setFocusRow('');
            const dataGridMain = (0, eventUtils_1.findTargetElement)(target, 'MuiDataGrid-main', true);
            dataGridMain.firstChild.focus();
        }
        // check if the row is the last available row and the user press tab
        if (event.key === 'Tab') {
            setFocusRow(''); // to hide border on current row
            // check if the row is the first focusable row then we need to focus on the column header row
            const previousElementSibling = (0, eventUtils_1.findPreviousFocusableRow)(target);
            if (event.shiftKey && !previousElementSibling && target.classList.contains('MuiDataGrid-row')) {
                const dataGridMain = (0, eventUtils_1.findTargetElement)(target, 'MuiDataGrid-main', true);
                if (dataGridMain.firstElementChild && dataGridMain.firstElementChild.className.includes('MuiDataGrid-columnHeaders ')) {
                    dataGridMain.firstElementChild.focus();
                }
            }
        }
    };
    // this function handles keyboard navigation on the column header row
    // Move preventDefault INSIDE each if-block, not at the top
    const handleOnColumnHeaderRowKeyDown = (event) => {
        const target = event.target;
        const rowCheckbox = (0, eventUtils_1.findTargetElement)(target, 'PrivateSwitchBase-input', false);
        const columnHeaderTitle = (0, eventUtils_1.findTargetElement)(target, 'MuiDataGrid-columnHeaderTitle', false);
        const columnHeader = (0, eventUtils_1.findTargetElement)(target, 'MuiDataGrid-columnHeader', false);
        if (event.key === 'Tab' || event.key === 'ArrowDown') {
            const gridMain = (0, eventUtils_1.findTargetElement)(target, 'MuiDataGrid-main', true);
            // children[1] is fragile in v7 — querySelector is reliable regardless of DOM structure
            const firstRow = gridMain === null || gridMain === void 0 ? void 0 : gridMain.querySelector('.MuiDataGrid-row');
            if (firstRow) {
                event.preventDefault();
                event.stopPropagation(); // prevent MUI's root handler from re-focusing the header
                if (firstRow.classList.contains('disabled-row')) {
                    const nextFocusableRow = (0, eventUtils_1.findNextFocusableRow)(firstRow);
                    if (nextFocusableRow) {
                        nextFocusableRow.focus();
                    }
                    else {
                        const footer = document.querySelector('.MuiDataGrid-footerContainer');
                        const focusableFooterElement = footer === null || footer === void 0 ? void 0 : footer.querySelector('.MuiAutocomplete-root');
                        focusableFooterElement === null || focusableFooterElement === void 0 ? void 0 : focusableFooterElement.focus();
                    }
                }
                else {
                    arrowKey.current = event.key;
                    firstRow.focus();
                }
            }
            // if firstRow is null (empty grid), Tab falls through naturally
        }
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            if (rowCheckbox)
                rowCheckbox.click();
            if (columnHeaderTitle)
                columnHeaderTitle.click();
        }
        if (event.key === 'ArrowRight') {
            event.preventDefault();
            if (rowCheckbox)
                rowCheckbox.focus();
            else if (columnHeader)
                columnHeader.focus();
        }
    };
    /**
     * Handles the focus event on the header of the DataGrid.
     * @param event - The keyboard event triggered when the header is focused.
     * This function prevents the default focus behavior, finds the column header row,
     * and sets it to be focusable by adding a `tabindex` attribute. It then focuses
     * on the column header row and adds a keydown event listener for keyboard navigation.
     * Additionally, it removes the focus from the row when the header is focused.
     */
    // Simplified for v7 — column headers container is already focused when this fires
    const handleOnHeaderFocus = (event) => {
        setFocusRow('');
        const parentElem = (0, eventUtils_1.findTargetElement)(event.currentTarget, 'MuiDataGrid-root', true);
        const firstRow = parentElem === null || parentElem === void 0 ? void 0 : parentElem.querySelector('.MuiDataGrid-row');
        if (firstRow === null || firstRow === void 0 ? void 0 : firstRow.classList.contains('disabled-row')) {
            firstRow.setAttribute('tabindex', '-1');
            firstRow.setAttribute('aria-disabled', 'true');
        }
    };
    // we need this function to show checkbox on that row when a cell is focused
    const handleOnCellFocus = (event) => {
        var _a;
        const target = event.target;
        const parentRow = (0, eventUtils_1.findTargetElement)(target, 'MuiDataGrid-row', true);
        if (parentRow && !parentRow.classList.contains('disabled-row') && parentRow.classList.contains('MuiDataGrid-hide-checkbox')) {
            parentRow.classList.remove('MuiDataGrid-hide-checkbox');
        }
        // we need to focus on next focusable row when we are pressing tab from a cell
        if (parentRow && parentRow.nextElementSibling && parentRow.nextElementSibling.classList.contains('disabled-row')) {
            parentRow.nextElementSibling.setAttribute('tabindex', '-1');
            parentRow.nextElementSibling.setAttribute('aria-disabled', 'true');
        }
        const parentCell = (0, eventUtils_1.findTargetElement)(target, 'MuiDataGrid-cell', true);
        if (parentRow === null || parentRow === void 0 ? void 0 : parentRow.classList.contains('disabled-row')) {
            const relatedTargetCell = (0, eventUtils_1.findTargetElement)(event.relatedTarget, 'MuiDataGrid-cell', true);
            const relatedTargetRow = relatedTargetCell === null || relatedTargetCell === void 0 ? void 0 : relatedTargetCell.parentElement;
            //  Find the next focusable row
            let nextFocusableRow;
            if (arrowKey.current === 'ArrowDown' || (relatedTargetRow === parentRow.nextElementSibling && arrowKey.current === '')) {
                nextFocusableRow = (0, eventUtils_1.findNextFocusableRow)(parentRow);
                // if we are at the last focusable row and if we press arrow down we need to hide focus from the disabled cell(last row is disabled cell)
                if (!nextFocusableRow)
                    target.blur();
            }
            else {
                nextFocusableRow = (0, eventUtils_1.findPreviousFocusableRow)(parentRow);
                if (!nextFocusableRow) {
                    const dataGridMain = (0, eventUtils_1.findTargetElement)(target, 'MuiDataGrid-main', true);
                    if (dataGridMain.firstElementChild && dataGridMain.firstElementChild.className.includes('MuiDataGrid-columnHeaders ')) {
                        parentRow.classList.add('MuiDataGrid-hide-checkbox'); // to hide checkbox from disabled current row
                        dataGridMain.firstElementChild.focus();
                    }
                }
            }
            if (nextFocusableRow) {
                const nextRowCell = (_a = nextFocusableRow.querySelector(`.MuiDataGrid-cell[data-colindex="${parentCell === null || parentCell === void 0 ? void 0 : parentCell.getAttribute('data-colindex')}"]`)) === null || _a === void 0 ? void 0 : _a.firstChild;
                nextRowCell === null || nextRowCell === void 0 ? void 0 : nextRowCell.focus();
            }
        }
        // need to refocus the from parent cell to action button
        const cellWithEndAction = target.querySelectorAll('.MuiDataGrid-cell--withEndActions');
        if (cellWithEndAction.length > 0) {
            const actionButton = (0, eventUtils_1.findTargetElement)(cellWithEndAction[0], 'MuiButtonBase-root', false);
            if (actionButton) {
                // this is needed to let the button to be focused instead of the cell
                window.setTimeout(() => {
                    actionButton.focus();
                }, 0);
            }
        }
    };
    // we need this function to hide checkbox on that row when a cell is blured
    const handleOnCellBlur = (event) => {
        var _a;
        const target = event.target;
        const parentRow = (0, eventUtils_1.findTargetElement)(target, 'MuiDataGrid-row', true);
        const parentCell = (0, eventUtils_1.findTargetElement)(target, 'MuiDataGrid-cell', true);
        // need to check if the previous cell is checkbox cell so that we will not hide the checkbox
        const isPreviousSiblingCheckbox = (_a = parentCell === null || parentCell === void 0 ? void 0 : parentCell.previousElementSibling) === null || _a === void 0 ? void 0 : _a.className.includes('MuiDataGrid-cellCheckbox');
        if (parentRow && !isPreviousSiblingCheckbox) {
            parentRow.classList.add('MuiDataGrid-hide-checkbox');
        }
    };
    // we need to check if previous cell is the checkbox cell so we can hide checkbox when we change row focus
    const handleOnCellKeydown = (event) => {
        var _a;
        const target = event.target;
        arrowKey.current = event.key;
        const parentCell = (0, eventUtils_1.findTargetElement)(target, 'MuiDataGrid-cell', true);
        // need to hide the end actions when we navigate to other cell
        parentCell === null || parentCell === void 0 ? void 0 : parentCell.classList.remove('withEndActions');
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            // check if the current cell is beside the checkbox so that we dont hide it.
            const isPreviousSiblingCheckbox = (_a = parentCell === null || parentCell === void 0 ? void 0 : parentCell.previousElementSibling) === null || _a === void 0 ? void 0 : _a.className.includes('MuiDataGrid-cellCheckbox');
            const parentRow = (0, eventUtils_1.findTargetElement)(target, 'MuiDataGrid-row', true);
            // !(parentRow.classList.contains('MuiDataGrid-row--lastVisible') && event.key === 'ArrowDown') we dont want to hide checkbox when are the last row on arrow down
            if (isPreviousSiblingCheckbox && parentRow && !(parentRow.classList.contains('MuiDataGrid-row--lastVisible') && event.key === 'ArrowDown')) {
                parentRow.classList.add('MuiDataGrid-hide-checkbox');
            }
        }
        // this is for the handling if you want to select the row from row cell
        if (target.classList.contains('PrivateSwitchBase-input') && (event.key === 'ArrowLeft' || (event.shiftKey && event.key === 'ArrowUp'))) {
            const parentRow = (0, eventUtils_1.findTargetElement)(target, 'MuiDataGrid-row', true);
            setFocusRow(parentRow === null || parentRow === void 0 ? void 0 : parentRow.getAttribute('data-id'));
            if (parentRow)
                parentRow.focus();
        }
        // hide checkbox to current row when user press tab
        if (event.key === 'Tab') {
            const parentCellDiv = (0, eventUtils_1.findTargetElement)(target, 'MuiDataGrid-cell', true);
            // need to set tabibex to -1 tp cell and child of that cell when lost focus due to tab
            if (parentCellDiv && parentCellDiv.classList.contains('MuiDataGrid-cell'))
                parentCellDiv.setAttribute('tabindex', '-1');
            if (parentCellDiv && parentCellDiv.firstChild)
                parentCellDiv.firstChild.setAttribute('tabindex', '-1');
            const parentRow = (0, eventUtils_1.findTargetElement)(target, 'MuiDataGrid-row', true);
            if (parentRow)
                parentRow.classList.add('MuiDataGrid-hide-checkbox');
        }
    };
    // this function is for navigating checkbox up and down
    const handleOnCheckboxKeydown = (event) => {
        const target = event.target;
        const parentRow = (0, eventUtils_1.findTargetElement)(target, 'MuiDataGrid-row', true); // get the parent row
        if (parentRow) {
            // navigate checkbox from top to bottom
            if (event.key === 'ArrowUp' && parentRow.previousElementSibling) {
                parentRow.previousElementSibling.classList.remove('MuiDataGrid-hide-checkbox');
            }
            // navigate checkbox from bottom to top
            if (event.key === 'ArrowDown' && parentRow.nextElementSibling) {
                parentRow.nextElementSibling.classList.remove('MuiDataGrid-hide-checkbox');
            }
            if (event.key === 'Enter' || event.key === ' ') {
                // we want remove to be last event to took place
                window.setTimeout(() => {
                    parentRow.classList.remove('MuiDataGrid-hide-checkbox');
                }, 0);
            }
        }
        const columnHeaderRow = (0, eventUtils_1.findTargetElement)(target, 'MuiDataGrid-columnHeaders', true);
        if (columnHeaderRow) {
            if (event.key === 'ArrowLeft') {
                columnHeaderRow.focus();
            }
        }
        // this handling for us to be able to focus on the first checkbox on the table body from the select all checkbox on Arrow down
        if (!parentRow && event.key === 'ArrowDown') {
            const dataGridMain = (0, eventUtils_1.findTargetElement)(target, 'MuiDataGrid-main', true);
            if (dataGridMain.children[1]) {
                const firstRow = (0, eventUtils_1.findTargetElement)(dataGridMain.children[1], 'MuiDataGrid-row', false);
                if (firstRow)
                    firstRow.classList.remove('MuiDataGrid-hide-checkbox');
            }
        }
    };
    // to show end action button via mouse click or keyboard nav
    const handleOnRowFocus = (event) => {
        const target = event.target;
        if (target.classList.contains('MuiDataGrid-row')) {
            const nextRows = target.nextElementSibling;
            if (nextRows && nextRows.classList.contains('disabled-row')) {
                nextRows.setAttribute('tabindex', '-1');
                nextRows.setAttribute('aria-disabled', 'true');
                // find all cells inside that cell and set tabindex to -1
                const nextRowCells = nextRows.querySelectorAll('.MuiDataGrid-cell');
                nextRowCells.forEach((cell) => {
                    cell.setAttribute('tabindex', '-1');
                    const cellChild = cell.firstChild;
                    cellChild.setAttribute('tabindex', '-1');
                    cell.setAttribute('aria-disabled', 'true');
                });
            }
            setFocusRow(target.getAttribute('data-id'));
        }
        arrowKey.current = '';
    };
    const handlePageChange = (event, newPage) => {
        if (onPageChange !== undefined) {
            onPageChange(newPage, event);
        }
    };
    const handlePageSizeChange = (event) => {
        if (onPageSizeChange && event.target) {
            onPageSizeChange(Number(event.target.value), event);
        }
    };
    // eslint-why to do
    // eslint-disable-next-line react/no-unstable-nested-components
    const DataGridTablePagination = () => {
        return (react_1.default.createElement(Pagination_1.default, { translation: translation, count: totalCount, page: page, rowsPerPage: pageSize, onRowsPerPageChange: handlePageSizeChange, onPageChange: handlePageChange, "data-testid": DataGridTestIds.DATAGRID_PAGINATION, rowsPerPageOptions: rowsPerPageOptions }));
    };
    const slotsOverride = {
        baseCheckbox: Checkbox_1.default,
        columnSortedAscendingIcon: ColumnSortedAscendingIcon_1.default,
        columnSortedDescendingIcon: ColumnSortedDescendingIcon_1.default,
        columnResizeIcon: DataGridDivider_1.default,
        pagination: DataGridTablePagination,
    };
    return (react_1.default.createElement(StyledDataGrid, Object.assign({}, props, { paginationModel: { page, pageSize }, page: page, pageSize: pageSize, totalCount: totalCount, rowCount: totalCount, translation: translation, rowsPerPageOptions: rowsPerPageOptions, focusedRow: focusRow, 
        // For list of slots that can be overridden - See https://mui.com/x/api/data-grid/data-grid/#slots
        slots: Object.assign(Object.assign({}, slots), slotsOverride), 
        // eslint-why MUI DataGrid slotProps type doesn't expose row/cell event handlers
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        slotProps: Object.assign(Object.assign(Object.assign({}, slotProps), props.checkboxSelection && {
            baseCheckbox: {
                'data-testid': DataGridTestIds.DATAGRID_CHECKBOX,
                onClick: onCheckboxClick,
                onKeyDown: handleOnCheckboxKeydown,
            },
        }), { row: {
                tabIndex: 0,
                onKeyDown: handleOnRowKeyDown,
                onFocus: handleOnRowFocus,
            }, cell: {
                onFocus: handleOnCellFocus,
                onBlur: handleOnCellBlur,
                onKeyDown: handleOnCellKeydown,
            }, columnHeaders: {
                tabIndex: 0,
                onFocus: handleOnHeaderFocus,
                onKeyDown: (e) => {
                    handleOnColumnHeaderRowKeyDown(e);
                },
            } }), getRowClassName: (params) => {
            const classes = ['MuiDataGrid-hide-checkbox'];
            if (params.row.disabled) {
                classes.push('disabled-row');
            }
            return classes.join(' ');
        } })));
};
DataGrid.defaultProps = {
    rowHeight: 37,
    columnHeaderHeight: 37,
    hideFooter: false, // shows footer containing TablePagination component
    autoHeight: true,
    columns: [],
    rows: [],
    checkboxSelection: false,
    disableColumnMenu: true, // hides menu icon (originally visible on hover)
    page: 0,
    pageSize: 10,
    totalCount: 0,
    rowsPerPageOptions: [10, 25, 50, 100],
    translation: {
        rowsPerPageLabel: 'Show rows:',
        rowsPerPageDescription: `${Pagination_1.TablePaginationLocalizationPlaceholders.CURRENT_PAGE_TO_END_PAGE} of ${Pagination_1.TablePaginationLocalizationPlaceholders.TOTAL_ROWS_COUNT}`,
        pageLabel: 'Page:',
        pageDescription: `of ${Pagination_1.TablePaginationLocalizationPlaceholders.TOTAL_PAGES_COUNT}`,
        firstPageAriaLabel: 'go to first page',
        prevPageAriaLabel: 'go to previous page',
        nextPageAriaLabel: 'go to next page',
        lastPageAriaLabel: 'go to last page',
    },
};
__exportStar(require("@mui/x-data-grid/DataGrid"), exports);
exports.default = DataGrid;
