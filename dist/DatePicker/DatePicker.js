"use strict";
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
exports.DatePickerDefaults = void 0;
/* ======================================================================== *
 * Copyright 2026 HCL America Inc.                                          *
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
const react_1 = __importStar(require("react"));
const DatePicker_1 = require("@mui/x-date-pickers/DatePicker");
const StaticDatePicker_1 = require("@mui/x-date-pickers/StaticDatePicker");
const dayjs_1 = __importDefault(require("dayjs"));
const uuid_1 = require("uuid");
const PickersDay_1 = require("@mui/x-date-pickers/PickersDay");
const dot_mark_1 = __importDefault(require("@hcl-software/enchanted-icons/dist/carbon/es/dot-mark"));
const calendar_1 = __importDefault(require("@hcl-software/enchanted-icons/dist/carbon/es/calendar"));
const caret__down_1 = __importDefault(require("@hcl-software/enchanted-icons/dist/carbon/es/caret--down"));
const SvgIcon_1 = require("@mui/material/SvgIcon");
const Paper_1 = __importDefault(require("../Paper"));
const Badge_1 = __importStar(require("../Badge/Badge"));
const TextField_1 = __importDefault(require("../TextField"));
const DEFAULT_FORMAT = 'MM/DD/YYYY';
// Shared formatter used by both static and regular date picker variants — returns the day abbreviation unchanged
// eslint-why dayOfWeekFormatter receives different types across MUI versions and must accept any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dayOfWeekFormatter = (date) => {
    if (dayjs_1.default.isDayjs(date)) {
        return date.format('dd'); // or 'ddd' for 3-letter abbreviations ("Sun", "Mon")
    }
    return typeof date === 'string' ? date.slice(0, 2) : String(date);
};
// Number of year columns rendered in the year picker view.
// Used by handleYearPickerKeyDown to correct arrow-key navigation for the non-static DatePicker.
const YEARS_PER_ROW = 3;
// Module-level day component for v7 slots API — wraps PickersDay with a Badge dot for today
// eslint-why PickersDayProps generic TDate is unknown at module level; any is required here
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomPickersDay = (props) => {
    const { day, isStaticMode, onStaticChange } = props, dayProps = __rest(props, ["day", "isStaticMode", "onStaticChange"]);
    const handleDayClick = () => {
        if (isStaticMode && dayProps.selected && onStaticChange) {
            onStaticChange(day, {});
        }
    };
    return (react_1.default.createElement(Badge_1.default, { key: day.toString(), overlap: "circular", variant: "standard", color: (dayProps.today && dayProps.selected) ? 'default' : 'primary', badgeContent: dayProps.today ? react_1.default.createElement(dot_mark_1.default, { fontSize: "small" }) : undefined, anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
        }, sx: {
            [`& .${Badge_1.badgeClasses.badge}`]: {
                right: '50%',
                padding: '1px',
                width: '4px',
                height: '1px',
                borderRadius: 'unset',
                minWidth: '0px',
                top: '70%',
                [`& .${SvgIcon_1.svgIconClasses.root}`]: Object.assign(Object.assign(Object.assign({}, (dayProps.today && dayProps.selected) && {
                    fill: 'common.white',
                    width: '2px',
                    height: '2px',
                }), !(dayProps.today && dayProps.selected) && {
                    fill: 'none',
                    width: '1px',
                    height: '1px',
                }), { fontSize: '1px' }),
            },
        } },
        react_1.default.createElement(PickersDay_1.PickersDay, Object.assign({ day: day }, dayProps, (isStaticMode && { onClick: handleDayClick })))));
};
const getDatePickerStyle = (theme, customStyles, staticMode) => {
    return Object.assign(Object.assign(Object.assign({}, theme.typography.body2), { margin: staticMode ? '0px' : '6px 0px 0px -8px', padding: '0px', height: 'auto', width: '228px', color: `1px solid ${theme.palette.background.paper}`, boxShadow: 1, '& .MuiDateCalendar-root': {
            width: '228px',
            margin: '0px',
            height: 'auto',
            overflowY: 'hidden',
            flexGrow: 1,
        }, '& .MuiYearCalendar-root': {
            maxHeight: '168px',
            overflowY: 'auto',
        }, 
        // Assumes year view displays 3 years across.
        // Requires `displayStaticWrapperAs: 'mobile'` to set
        // `yearsInRow = 3` for arrow key navigation.
        '& .MuiPickersYear-root': {
            flexBasis: '33.33%',
        }, '& .MuiPickersYear-yearButton': {
            width: '100%',
            maxWidth: 'unset',
        }, '& .MuiTouchRipple-root': {
            color: 'transparent',
            width: '228px',
        }, '& .MuiPickersCalendarHeader-label': Object.assign({ marginRight: '0px' }, theme.typography.subtitle2), '& .MuiPickersCalendarHeader-root': {
            padding: '24px 13px',
            margin: '4px',
            width: 'auto',
        }, '& .MuiPickersPopper-paper, & .MuiDateCalendar-viewTransitionContainer': {
            padding: '0px',
            margin: '0px',
            width: '228px',
        }, '& .MuiPickersArrowSwitcher-spacer': {
            width: '4px',
        }, '& .MuiDayCalendar-weekContainer': {
            margin: '0px',
            width: '228px',
        }, '& .MuiDayCalendar-weekDayLabel': Object.assign(Object.assign({}, theme.typography.body2), { color: theme.palette.text.secondary, margin: '4px 2px', width: '24px', padding: '0px', height: '16px', lineHeight: '16px', overflow: 'hidden' }), '& .MuiDateCalendar-viewTransitionContainer': {
            width: '228px',
        }, '& .MuiPickersLayout-root': {
            minWidth: '228px',
        }, '& .MuiDayCalendar-header': Object.assign(Object.assign({}, theme.typography.body1), { width: '228px' }), '& .MuiIconButton-root': {
            [`& .${SvgIcon_1.svgIconClasses.root}`]: {
                padding: '0px',
                width: '16px',
                height: '16px',
                border: 'none',
            },
        }, '& .MuiDayCalendar-monthContainer': {
            height: 'auto',
            position: 'inherit',
            width: '228px',
        }, '& .MuiPickersDay-root': Object.assign(Object.assign({ border: 'none', height: '24px', width: '24px', radius: '64px', margin: '4px 2px' }, theme.typography.body2), { '&.MuiPickersDay-today': {
                border: 'none',
                position: 'relative',
            }, '&.MuiPickersDay-dayOutsideMonth': {
                color: theme.palette.text.disabled,
            }, '&:hover': {
                backgroundColor: theme.palette.action.hover,
            }, '&:focus-visible': {
                backgroundColor: 'transparent',
                border: 'none',
                outline: `1px solid ${theme.palette.action.focus}`,
                outlineOffset: '3px',
                '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                    border: 'none',
                    outline: `1px solid ${theme.palette.action.focus}`,
                    outlineOffset: '3px',
                },
            }, '&.Mui-selected': {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.text.tertiary1,
                '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                },
                '&:focus-visible': {
                    backgroundColor: theme.palette.primary.main,
                    border: 'none',
                    outline: `1px solid ${theme.palette.action.focus}`,
                    outlineOffset: '3px',
                    '&:hover': {
                        backgroundColor: theme.palette.primary.dark,
                    },
                },
            } }), '& .MuiDayCalendar-slideTransition': {
            height: 'auto',
            minHeight: '140px',
            position: 'inherit',
        }, '& .MuiDialogActions-root': {
            display: '-webkit-box',
            padding: '12px 0px',
            justifyContent: 'center',
            borderTop: 'none',
        }, '& .MuiPickersArrowSwitcher-button': {
            '&:hover': {
                backgroundColor: theme.palette.action.hover,
            },
        } }), customStyles);
};
/**
 * Default prop values for DatePicker.
 * Exported for use in Storybook argTypes and story args.
 */
exports.DatePickerDefaults = {
    margin: 'none',
    color: 'primary',
    size: 'medium',
    label: '',
    helperText: '',
    enableHelpHoverEffect: false,
    helperIconTooltip: '',
    format: DEFAULT_FORMAT,
    unitLabel: '',
    required: false,
    disabled: false,
    fullWidth: false,
    hiddenLabel: false,
    nonEdit: false,
    showDaysOutsideCurrentMonth: true,
    error: false,
    staticMode: false,
};
const DatePicker = (_a) => {
    var { customStyles = {}, staticMode = false, margin = 'none', color = 'primary', size = 'medium', label = '', helperText = '', enableHelpHoverEffect = false, helperIconTooltip = '', format = DEFAULT_FORMAT, unitLabel = '', required = false, disabled = false, fullWidth = false, hiddenLabel = false, nonEdit = false, error = false, actionProps, customIcon, value, onViewChange, onAccept } = _a, muiProps = __rest(_a, ["customStyles", "staticMode", "margin", "color", "size", "label", "helperText", "enableHelpHoverEffect", "helperIconTooltip", "format", "unitLabel", "required", "disabled", "fullWidth", "hiddenLabel", "nonEdit", "error", "actionProps", "customIcon", "value", "onViewChange", "onAccept"]);
    const popperId = (0, uuid_1.v4)();
    // Controls the active view of StaticDatePicker. Resets to 'day' on Today click since
    // MUI v5 StaticDatePicker does not reset the view automatically.
    const [staticView, setStaticView] = (0, react_1.useState)('day');
    const handleOnKeyDownLeft = (event) => {
        var _a;
        if (event.key === 'ArrowRight') {
            const element = event.target;
            if ((_a = element.nextElementSibling) === null || _a === void 0 ? void 0 : _a.nextElementSibling) {
                element.nextElementSibling.nextElementSibling.focus();
            }
        }
    };
    const handleOnKeyDownRight = (event) => {
        var _a;
        if (event.key === 'ArrowLeft') {
            const element = event.target;
            if ((_a = element.previousElementSibling) === null || _a === void 0 ? void 0 : _a.previousElementSibling) {
                element.previousElementSibling.previousElementSibling.focus();
            }
        }
    };
    const handleStaticViewChange = (0, react_1.useCallback)((newView) => {
        setStaticView(newView);
        onViewChange === null || onViewChange === void 0 ? void 0 : onViewChange(newView);
    }, [onViewChange]);
    // Today button fires onAccept — reset to 'day' view so the calendar returns from year/month view.
    // eslint-why handleStaticAccept context parameter is an opaque MUI internal type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleStaticAccept = (0, react_1.useCallback)((acceptedValue, context) => {
        setStaticView('day');
        onAccept === null || onAccept === void 0 ? void 0 : onAccept(acceptedValue, context);
    }, [onAccept]);
    /**
     * Corrects Up/Down arrow key navigation in the year picker for the non-static DatePicker.
     * Our CSS renders 3 columns but MUI desktop mode may use a different default.
     * This intercepts the event before MUI handles it and manually moves focus by 3.
     */
    const handleYearPickerKeyDown = (event) => {
        const target = event.target;
        if (!target.classList.contains('MuiPickersYear-yearButton'))
            return;
        if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown')
            return;
        event.preventDefault();
        event.stopPropagation();
        const yearButtons = Array.from(document.querySelectorAll('.MuiPickersYear-yearButton:not([disabled])'));
        const currentIndex = yearButtons.indexOf(target);
        if (currentIndex === -1)
            return;
        const nextIndex = event.key === 'ArrowDown' ? currentIndex + YEARS_PER_ROW : currentIndex - YEARS_PER_ROW;
        if (nextIndex >= 0 && nextIndex < yearButtons.length) {
            yearButtons[nextIndex].focus();
        }
    };
    const focusDialog = () => {
        window.requestAnimationFrame(() => {
            var _a;
            const dialog = (_a = document.querySelector(`#datepickerPopper-${popperId}`)) !== null && _a !== void 0 ? _a : document.querySelector('.MuiPickersPopper-root');
            if (dialog) {
                const focusableElement = dialog.querySelector('button, [tabindex]:not([tabindex="-1"])');
                if (focusableElement instanceof window.HTMLElement) {
                    focusableElement.focus();
                }
                else if (dialog instanceof window.HTMLElement) {
                    dialog.focus();
                }
            }
        });
    };
    // Compute field error state based on the current date value
    let hasError = false;
    if (value !== null && value !== undefined) {
        const day = value;
        if (!Number.isNaN(day.day()) && !Number.isNaN(day.month()) && !Number.isNaN(day.year())) {
            hasError = !(0, dayjs_1.default)(day, format, true).isValid();
        }
    }
    // Text field slot props for the non-static DatePicker
    const textFieldSlotProps = {
        label,
        helperText,
        enableHelpHoverEffect,
        helperIconTooltip,
        required,
        disabled,
        margin,
        color,
        size,
        autoComplete: 'off',
        error: error || hasError,
        fullWidth,
        unitLabel,
        hiddenLabel,
        nonEdit,
        // value: value !== null && value !== undefined ? `${formatValue(value as unknown as Dayjs, format || DEFAULT_FORMAT)}` : '',
        actionProps,
        inputProps: { placeholder: format },
        customIcon,
    };
    const arrowIconButtonSlotProps = {
        previousIconButton: { size: 'small', onKeyDown: handleOnKeyDownLeft },
        nextIconButton: { size: 'small', onKeyDown: handleOnKeyDownRight },
    };
    const calendarHeaderIconButtonSlotProps = Object.assign({ switchViewButton: { size: 'small' } }, arrowIconButtonSlotProps);
    // Static mode - render calendar without input field
    if (staticMode) {
        return (react_1.default.createElement(Paper_1.default, { variant: "elevation", sx: (theme) => { return getDatePickerStyle(theme, customStyles, true); } },
            react_1.default.createElement(StaticDatePicker_1.StaticDatePicker, Object.assign({}, muiProps, { disabled: disabled, value: value }, { view: staticView }, { onViewChange: handleStaticViewChange, onAccept: handleStaticAccept, 
                // closeOnSelect={false}
                reduceAnimations: true, dayOfWeekFormatter: dayOfWeekFormatter, slots: {
                    switchViewIcon: caret__down_1.default,
                    day: CustomPickersDay,
                }, slotProps: Object.assign(Object.assign({ actionBar: { actions: ['today'] } }, calendarHeaderIconButtonSlotProps), { toolbar: { hidden: true }, day: {
                        isStaticMode: staticMode,
                        onStaticChange: muiProps === null || muiProps === void 0 ? void 0 : muiProps.onChange,
                        // eslint-why MUI slotProps day type doesn't include custom isStaticMode/onStaticChange props
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    } }) }))));
    }
    // Render regular DatePicker with input field
    return (react_1.default.createElement(DatePicker_1.DatePicker, Object.assign({}, muiProps, { disabled: disabled, value: value, format: format || DEFAULT_FORMAT, reduceAnimations: true, autoFocus: false, onOpen: focusDialog, dayOfWeekFormatter: dayOfWeekFormatter, sx: (theme) => {
            return Object.assign(Object.assign({}, (!nonEdit && { width: fullWidth ? '100%' : '240px' })), { 
                // Override focused label color to remain text.secondary (matching MUI v5 behavior)
                '& .MuiAutocomplete--label--focused': {
                    color: `${theme.palette.text.secondary} !important`,
                }, '& .MuiInputLabel-root.Mui-focused': {
                    color: `${theme.palette.text.secondary} !important`,
                }, '& .MuiFormLabel-root.Mui-focused': {
                    color: `${theme.palette.text.secondary} !important`,
                }, 
                // Override focused border color to remain border.tertiary (matching MUI v5 behavior)
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: `${theme.palette.border.tertiary} !important`,
                    borderWidth: '1px !important',
                }, '& .MuiOutlinedInput-root:focus-within .MuiOutlinedInput-notchedOutline': {
                    border: `1px solid ${theme.palette.border.tertiary} !important`,
                }, 
                // Add margin-top for helper text to match MUI v5 spacing
                '& .MuiFormHelperText-root': {
                    marginTop: '4px',
                } });
        }, slots: {
            openPickerIcon: calendar_1.default,
            switchViewIcon: caret__down_1.default,
            textField: TextField_1.default,
            day: CustomPickersDay,
        }, slotProps: Object.assign(Object.assign({ textField: textFieldSlotProps, popper: {
                placement: 'bottom-start',
                id: `datepickerPopper-${popperId}`,
            }, desktopPaper: {
                sx: (theme) => { return getDatePickerStyle(theme, customStyles); },
                onKeyDownCapture: handleYearPickerKeyDown,
            }, actionBar: { actions: ['today'] }, openPickerButton: { size: 'medium' } }, calendarHeaderIconButtonSlotProps), { day: {
                isStaticMode: false,
                onStaticChange: null,
                // eslint-why MUI slotProps day type doesn't include custom isStaticMode/onStaticChange props
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } }) })));
};
__exportStar(require("@mui/x-date-pickers/DatePicker"), exports);
exports.default = DatePicker;
