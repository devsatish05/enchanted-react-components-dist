"use strict";
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
exports.getEndAdornment = exports.getEndAdornmentSlots = exports.getMuiTextFieldThemeOverrides = void 0;
const react_1 = __importDefault(require("react"));
const FormControl_1 = __importDefault(require("@mui/material/FormControl"));
const TextField_1 = __importDefault(require("@mui/material/TextField"));
const FormHelperText_1 = __importDefault(require("@mui/material/FormHelperText"));
const warning_1 = __importDefault(require("@hcl-software/enchanted-icons/dist/carbon/es/warning"));
const material_1 = require("@mui/material");
const utils_1 = require("@mui/utils");
const styles_1 = require("@mui/material/styles");
const Typography_1 = __importDefault(require("../Typography"));
const InputLabelAndAction_1 = __importDefault(require("../prerequisite_components/InputLabelAndAction/InputLabelAndAction"));
const ADORNMENT_GAP = 8;
const ADORNMENT_SLOT_ATTRIBUTE = 'data-adornment-slot';
const ADORNMENT_FIXED_SLOT_ATTRIBUTE = 'data-adornment-fixed';
const ADORNMENT_ACTION_SLOT_ATTRIBUTE = 'data-adornment-action';
const CLEAR_INDICATOR_CLASS = 'clearIndicator';
const POPUP_INDICATOR_CLASS = 'popupIndicator';
const END_ADORNMENT_CLASS = 'MuiAutocomplete-endAdornment';
/**
 * Helper function to ensure passed React nodes have an aria-label if they are interactive buttons
 */
const ensureAccessibleNode = (node, fallbackLabel) => {
    if (!react_1.default.isValidElement(node))
        return node;
    const nodeProps = node.props;
    // If node is an element without aria-label and without direct string children
    if (!nodeProps['aria-label'] && typeof nodeProps.children !== 'string') {
        return react_1.default.cloneElement(node, {
            'aria-label': fallbackLabel,
        });
    }
    return node;
};
const getMuiTextFieldThemeOverrides = () => {
    return {
        MuiTextField: {
            styleOverrides: {
                root: ({ ownerState, theme }) => {
                    return {
                        // below MuiTextField override only applicable for Autocomplete to make sure Autocomplete is parent component
                        '.MuiAutocomplete-inputRoot': Object.assign(Object.assign({ position: 'relative' }, ownerState.error ? {
                            '&.MuiOutlinedInput-root:focus-within': {
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: `2px solid ${theme.palette.error.main}`,
                                },
                            },
                            '&.MuiOutlinedInput-root:hover': {
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: `${theme.palette.error.main}`,
                                },
                            },
                        } : {
                            '& .MuiInputBase-root:hover': {
                                outline: `1px solid ${theme.palette.border.primary}`,
                            },
                            '&.MuiOutlinedInput-root:focus-within': {
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: `2px solid ${theme.palette.primary.main}`,
                                },
                            },
                        }), { '&.MuiOutlinedInput-root': {
                                paddingRight: ownerState.disabled ? '8px' : '16px',
                            }, 
                            // Reserve a stable right-side area so selected text does not shift when icons toggle.
                            '& .MuiAutocomplete-input': {
                                paddingRight: 'var(--erc-autocomplete-end-adornment-width, 56px) !important',
                            }, '& [class*=MuiInputAdornment-positionEnd]': {
                                position: 'absolute',
                                right: '8px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                // Width must be auto so ResizeObserver can measure actual icon widths
                                width: 'auto',
                                marginLeft: '0px',
                                justifyContent: 'flex-end',
                                zIndex: 2, // Raised to ensure adornments remain clickable over the input
                            }, '& .MuiAutocomplete-endAdornment': {
                                position: 'static',
                                transform: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                            }, '& .MuiAutocomplete-endAdornment .MuiButtonBase-root': {
                                position: 'static',
                                transform: 'none',
                            } }),
                        '.MuiOutlinedInput-root': Object.assign({ '&:not(.Mui-disabled)': {
                                background: theme.palette.common.white,
                            } }, ownerState.error ? {
                            '&.MuiOutlinedInput-root:focus-within': {
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: `2px solid ${theme.palette.error.main}`,
                                },
                            },
                            '&.MuiOutlinedInput-root:hover': {
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: `${theme.palette.error.main}`,
                                },
                            },
                        } : {
                            '& .MuiInputBase-root:hover': {
                                outline: `1px solid ${theme.palette.border.primary}`,
                            },
                            '&.MuiOutlinedInput-root:focus-within': {
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: ownerState.disabled ? `${theme.palette.error.main}` : `2px solid ${theme.palette.primary.main}`,
                                },
                            },
                        }),
                        // below MuiTextField override only applicable for DatePicker to make sure DatePicker is parent component
                        '[data-mui-test=calendarIcon] + .MuiTouchRipple-root': {
                            color: 'transparent',
                        },
                    };
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                contained: ({ theme }) => {
                    return Object.assign(Object.assign({}, theme.typography.caption), { color: theme.palette.text.secondary, marginTop: '4px', cursor: 'default', marginLeft: '0px', marginRight: '0px', textAlign: 'left' });
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: ({ theme }) => {
                    return {
                        borderRadius: '2px',
                        width: '100%',
                        margin: '0px',
                        padding: '5px 8px',
                        input: Object.assign(Object.assign({}, theme.typography.body2), { color: theme.palette.text.primary, padding: '0px', height: '1.5em', position: 'relative', zIndex: 1, 
                            // MuiSelect-nativeInput must stay position:absolute (MUI default) so it stays
                            // off-flow. Our position:relative above would override it and make the hidden
                            // input participate in layout, expanding the Select height unexpectedly.
                            '&.MuiSelect-nativeInput': {
                                position: 'absolute',
                                height: 'auto',
                            }, '&::placeholder': {
                                fontStyle: 'italic',
                                color: theme.palette.text.secondary,
                                opacity: 9,
                            }, 
                            // Strip the padding ONLY for number inputs so the stepper is perfectly flush
                            '&[type="number"]': {
                                paddingRight: '0px',
                                '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
                                    marginRight: '0px',
                                },
                            } }),
                        textarea: Object.assign(Object.assign({}, theme.typography.body2), { color: theme.palette.text.primary, paddingTop: '1px', paddingBottom: '1px', position: 'relative', zIndex: 1, '&::placeholder': {
                                fontStyle: 'italic',
                                color: theme.palette.text.secondary,
                                opacity: 9,
                            } }),
                        '&.MuiInputBase-fullWidth': {
                            width: '100%',
                        },
                        '&.Mui-disabled': {
                            backgroundColor: theme.palette.action.disabledBackground,
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: theme.palette.action.disabledBackground,
                            },
                            ':hover': {
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: theme.palette.action.disabledBackground,
                                },
                            },
                            '& [class*=MuiInputAdornment-positionEnd]': {
                                '& [class*=MuiTypography-body2]': {
                                    color: theme.palette.text.disabled,
                                    cursor: 'default',
                                },
                                '& button': {
                                    pointerEvents: 'none',
                                    cursor: 'default',
                                    '& svg': {
                                        color: theme.palette.text.disabled,
                                    },
                                },
                            },
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            top: '0px',
                            borderColor: theme.palette.border.tertiary,
                            borderRadius: '2px',
                            '& legend': {
                                display: 'none',
                            },
                        },
                        '&.Mui-error': {
                            ':hover': {
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: theme.palette.error.main,
                                },
                            },
                            '&.Mui-focused': {
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: theme.palette.error.main,
                                },
                            },
                        },
                        ':hover': {
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: theme.palette.action.active,
                            },
                        },
                        '&.Mui-focused': {
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: theme.palette.action.focus,
                            },
                        },
                        '& [class*=MuiButtonBase-root]': {
                            padding: '0px',
                            minWidth: 'unset',
                        },
                        '& [class*=MuiInputAdornment-root]': {
                            margin: '0px',
                        },
                        '& [class*=MuiInputAdornment-positionStart]': {
                            marginRight: '8px',
                            height: '18px',
                            position: 'relative',
                            zIndex: 2,
                            '& svg:not(.MuiCircularProgress-svg)': {
                                margin: '0px 0px 0px 4px',
                                padding: '0px',
                                fontSize: '16px',
                            },
                            '& [class*=MuiTypography-body2]': {
                                margin: '0px 0px 0px 8px',
                                cursor: 'default',
                            },
                        },
                        // Shared styles for ALL end adornments (Select, DatePicker, TextField, etc.)
                        '& [class*=MuiInputAdornment-positionEnd]': {
                            height: '18px',
                            margin: '0px',
                            position: 'relative',
                            zIndex: 2,
                            '& svg:not(.MuiCircularProgress-svg)': {
                                margin: '0px',
                                padding: '0px',
                                fontSize: '16px',
                            },
                            '& .MuiSelect-icon, & .MuiNativeSelect-icon': {
                                position: 'relative !important',
                                right: 'auto !important',
                            },
                            '& [class*=MuiTypography-body2]': {
                                margin: '0px',
                                cursor: 'default',
                            },
                            // Preserve the original button margin so non-erc adornments keep their spacing
                            '& button': {
                                minWidth: '0px',
                                margin: '0px 0px 0px 8px',
                                padding: '0px',
                                '& svg': {
                                    margin: '0px',
                                    height: '16px',
                                    width: '16px',
                                },
                            },
                        },
                        // Flex layout and slot-specific overrides scoped ONLY to our custom adornment root.
                        // This prevents display:flex / justifyContent / gap from leaking into
                        // Select's or DatePicker's native InputAdornments and shifting their icons.
                        '& .erc-textfield-end-adornment-root': {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            gap: `${ADORNMENT_GAP}px`,
                            // Reset the general button margin — gap on the container handles spacing
                            '& button': {
                                margin: '0px',
                            },
                            // endAdornmentIconButton fixed/action slots
                            '& [data-adornment-action="true"] button, & [data-adornment-fixed="true"] button': {
                                minWidth: '0px',
                                margin: '0px',
                                padding: '0px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                '& svg': {
                                    margin: '0px',
                                    height: '16px',
                                    width: '16px',
                                },
                            },
                            // Neutralize MuiIconButton-edgeEnd negative margin — when the calendar button is
                            // extracted from MUI's native InputAdornment and re-wrapped in erc-textfield-end-adornment-root,
                            // the -12px right margin causes the icon to overflow outside the input border.
                            '& .MuiIconButton-edgeEnd': {
                                marginRight: '0px',
                            },
                        },
                    };
                },
            },
        },
    };
};
exports.getMuiTextFieldThemeOverrides = getMuiTextFieldThemeOverrides;
const StyledMuiFormControl = (0, styles_1.styled)(FormControl_1.default)((theme) => {
    return {
        '.MuiAutocomplete--label--focused': {
            color: theme.theme.palette.primary.main,
        },
    };
});
const getStartAdornment = (props, isComboBox) => {
    var _a;
    if ((_a = props.InputProps) === null || _a === void 0 ? void 0 : _a.startAdornment) {
        return props.InputProps.startAdornment;
    }
    return null;
};
const wrapAdornmentNodes = (nodes, type = 'flow') => {
    return react_1.default.Children.map(nodes, (node) => {
        return (react_1.default.createElement("span", Object.assign({ [ADORNMENT_SLOT_ATTRIBUTE]: 'true' }, (type === 'fixed' ? { [ADORNMENT_FIXED_SLOT_ATTRIBUTE]: 'true' } : {}), (type === 'action' ? { [ADORNMENT_ACTION_SLOT_ATTRIBUTE]: 'true' } : {}), { style: {
                display: 'flex',
                alignItems: 'center',
                flexShrink: 0,
            } }), node));
    });
};
const partitionAdornmentNodes = (node) => {
    const clearNodes = [];
    const popupNodes = [];
    const otherNodes = [];
    const traverse = (currentNode) => {
        react_1.default.Children.forEach(currentNode, (child) => {
            if (!react_1.default.isValidElement(child))
                return;
            // Type assertion to ReactElement with generic props object
            const element = child;
            const className = element.props.className || '';
            if (typeof className === 'string') {
                if (className.includes(CLEAR_INDICATOR_CLASS)) {
                    clearNodes.push(element);
                    return;
                }
                if (className.includes(POPUP_INDICATOR_CLASS)) {
                    popupNodes.push(element);
                    return;
                }
                if (className.includes(END_ADORNMENT_CLASS) || className.includes('MuiInputAdornment-root')) {
                    if (element.props.children)
                        traverse(element.props.children);
                    return;
                }
            }
            if (element.type === react_1.default.Fragment) {
                if (element.props.children)
                    traverse(element.props.children);
                return;
            }
            otherNodes.push(element);
        });
    };
    traverse(node);
    return { clearNodes, popupNodes, otherNodes };
};
const getEndAdornmentSlots = (props, isComboBox) => {
    var _a, _b;
    const flowNodes = [];
    const fixedNodes = [];
    const actionNodes = [];
    // Parse and include native InputProps.endAdornment ONLY when it is a ComboBox
    if (isComboBox && ((_a = props.InputProps) === null || _a === void 0 ? void 0 : _a.endAdornment)) {
        const { clearNodes: rawClearNodes, popupNodes: rawPopupNodes, otherNodes: rawOtherNodes } = partitionAdornmentNodes(props.InputProps.endAdornment);
        const clearNodes = rawClearNodes;
        const popupNodes = rawPopupNodes;
        // PUSH CLEAR NODES OR PLACEHOLDER
        if (clearNodes.length > 0) {
            flowNodes.push(...clearNodes);
        }
        // PUSH SPINNER / OTHER NODES
        flowNodes.push(...rawOtherNodes);
        // PUSH ERROR ICON BEFORE CARET
        if (props.error) {
            flowNodes.push(react_1.default.createElement(warning_1.default, { color: "error", fontSize: "small", key: "warning-icon", focusable: "false", "aria-hidden": "true" }));
        }
        // PUSH UNIT LABEL
        if (props.unitLabel) {
            flowNodes.push(react_1.default.createElement(Typography_1.default, { className: "erc-unit-label", variant: "body2", key: "unit-label", sx: { paddingLeft: '5px' } }, props.unitLabel));
        }
        // PUSH CARET LAST IN FLOW
        flowNodes.push(...popupNodes);
    }
    else {
        // Non-combobox logic
        let hasEndAdornment = false;
        if ((_b = props.InputProps) === null || _b === void 0 ? void 0 : _b.endAdornment) {
            // Use partitionAdornmentNodes to strip out native InputAdornment wrappers so we don't double-wrap
            const { otherNodes } = partitionAdornmentNodes(props.InputProps.endAdornment);
            flowNodes.push(...otherNodes);
            if (otherNodes.length > 0) {
                hasEndAdornment = true;
            }
        }
        // Only inject the error icon when no existing endAdornment is present.
        // Components like DatePicker already supply their own endAdornment (calendar icon)
        // and should not additionally receive the warning icon in error state.
        if (props.error && !hasEndAdornment) {
            flowNodes.push(react_1.default.createElement(warning_1.default, { key: "warning-icon", "data-mui-test": "warningIcon", focusable: "false", "aria-hidden": "true" }));
        }
        if (props.unitLabel) {
            flowNodes.push(react_1.default.createElement(Typography_1.default, { key: "unit-label", variant: "body2", color: "textSecondary" }, props.unitLabel));
        }
    }
    if (props.endAdornmentIconButton) {
        fixedNodes.push(ensureAccessibleNode(props.endAdornmentIconButton, 'Adornment Action'));
    }
    if (!isComboBox && props.endAdornmentAction) {
        actionNodes.push(ensureAccessibleNode(props.endAdornmentAction, 'Action'));
    }
    return { flowNodes, fixedNodes, actionNodes };
};
exports.getEndAdornmentSlots = getEndAdornmentSlots;
const getEndAdornment = (props, isComboBox) => {
    var _a;
    // Restore the check: Hide endAdornment when startAdornment is present on a simple TextField
    if (((_a = props.InputProps) === null || _a === void 0 ? void 0 : _a.startAdornment) !== undefined && !isComboBox) {
        return null;
    }
    const { flowNodes, fixedNodes, actionNodes } = (0, exports.getEndAdornmentSlots)(props, isComboBox);
    if (flowNodes.length === 0 && fixedNodes.length === 0 && actionNodes.length === 0) {
        return null;
    }
    return (react_1.default.createElement(material_1.InputAdornment, { position: "end", className: "erc-textfield-end-adornment-root" },
        react_1.default.createElement("span", { style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                height: '100%',
                gap: `${ADORNMENT_GAP}px`,
            } },
            wrapAdornmentNodes(flowNodes, 'flow'),
            wrapAdornmentNodes(actionNodes, 'action'),
            wrapAdornmentNodes(fixedNodes, 'fixed'))));
};
exports.getEndAdornment = getEndAdornment;
const getInputLabelAndActionProps = (props, isFocus) => {
    const inputLabelId = props.id ? `${props.id}-label` : undefined;
    const inputLabelProps = {
        color: props.color,
        disabled: props.disabled,
        error: props.error,
        required: props.required,
        sx: props.sx,
        htmlFor: props.id,
        id: inputLabelId,
        label: props.label,
        helperIconTooltip: props.helperIconTooltip,
        actionProps: props.actionProps,
        hiddenLabel: props.hiddenLabel,
        fullWidth: props.fullWidth,
        isFocus,
        enableHelpHoverEffect: props.enableHelpHoverEffect,
        customIcon: props.customIcon,
    };
    return inputLabelProps;
};
const getMuiFormControlProps = (props, forwardRef) => {
    const muiFormControlProps = {
        color: props.color,
        disabled: props.disabled,
        error: props.error,
        focused: props.focused,
        fullWidth: props.fullWidth,
        hiddenLabel: props.hiddenLabel,
        margin: props.margin,
        required: props.required,
        size: props.size,
        sx: props.sx,
        ref: forwardRef,
    };
    return muiFormControlProps;
};
const getMuiTextFieldProps = (props, reservedAdornmentWidth) => {
    var _a, _b, _c;
    const isComboBox = Boolean((_b = (_a = props.InputProps) === null || _a === void 0 ? void 0 : _a.className) === null || _b === void 0 ? void 0 : _b.includes('MuiAutocomplete'));
    const cleanedProps = Object.assign({}, props);
    delete cleanedProps.actionProps;
    delete cleanedProps.nonEdit;
    delete cleanedProps.unitLabel;
    delete cleanedProps.helperIconTooltip;
    delete cleanedProps.renderNonEditInput;
    delete cleanedProps.endAdornmentAction;
    delete cleanedProps.enableHelpHoverEffect;
    delete cleanedProps.customIcon;
    delete cleanedProps.endAdornmentIconButton;
    const userInputProps = (_c = props.InputProps) !== null && _c !== void 0 ? _c : {};
    const userInputSx = userInputProps.sx;
    const paddingOffset = reservedAdornmentWidth > 0 ? reservedAdornmentWidth + 2 : 0;
    const mergedInputSx = Object.assign(Object.assign({}, (typeof userInputSx === 'object' && userInputSx !== null ? userInputSx : {})), (isComboBox ? {
        '--erc-autocomplete-end-adornment-width': `${Math.max(0, Math.ceil(paddingOffset))}px`,
        '& .MuiAutocomplete-input': {
            paddingRight: 'var(--erc-autocomplete-end-adornment-width) !important',
        },
    } : {}));
    const muiTextFieldProps = Object.assign(Object.assign({}, cleanedProps), { variant: 'outlined', label: undefined, InputProps: Object.assign(Object.assign({}, userInputProps), { startAdornment: getStartAdornment(props, isComboBox), endAdornment: (0, exports.getEndAdornment)(props, isComboBox), sx: mergedInputSx }), FormHelperTextProps: Object.assign(Object.assign({}, (props.error && {
            role: 'alert',
            'aria-live': 'polite',
        })), cleanedProps.FormHelperTextProps) });
    return muiTextFieldProps;
};
const renderNonEditInput = (props, muiTextFieldProps) => {
    if (props.renderNonEditInput) {
        return props.renderNonEditInput();
    }
    return react_1.default.createElement(Typography_1.default, { variant: "body2" }, muiTextFieldProps.value ? muiTextFieldProps.value : null);
};
const renderInput = (props, setIsFocus, reservedAdornmentWidth) => {
    const muiTextFieldProps = getMuiTextFieldProps(props, reservedAdornmentWidth);
    const helperTextId = props.helperText && props.id ? `${props.id}-helper-text` : undefined;
    if (props.nonEdit) {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            renderNonEditInput(props, muiTextFieldProps),
            react_1.default.createElement(FormHelperText_1.default, { id: helperTextId }, muiTextFieldProps.helperText)));
    }
    return (react_1.default.createElement(TextField_1.default, Object.assign({}, muiTextFieldProps, { onFocus: () => {
            setIsFocus(true);
        }, onBlur: () => {
            setIsFocus(false);
        } })));
};
const TextField = react_1.default.forwardRef((_a, forwardRef) => {
    var _b;
    var props = __rest(_a, []);
    const [isFocus, setIsFocus] = react_1.default.useState(false);
    const [reservedAdornmentWidth, setReservedAdornmentWidth] = react_1.default.useState(0);
    const rootRef = react_1.default.useRef(null);
    react_1.default.useLayoutEffect(() => {
        const root = rootRef.current;
        if (!root)
            return undefined;
        const measure = () => {
            const adornmentRoot = root.querySelector('.erc-textfield-end-adornment-root');
            if (!adornmentRoot) {
                setReservedAdornmentWidth(0);
                return;
            }
            const measuredWidth = Math.ceil(adornmentRoot.getBoundingClientRect().width);
            setReservedAdornmentWidth(measuredWidth);
        };
        measure();
        if (typeof ResizeObserver === 'undefined') {
            return undefined;
        }
        const observer = new ResizeObserver(() => {
            measure();
        });
        observer.observe(root);
        const adornmentRoot = root.querySelector('.erc-textfield-end-adornment-root');
        if (adornmentRoot) {
            observer.observe(adornmentRoot);
        }
        return () => {
            observer.disconnect();
        };
    }, [props.error, props.unitLabel, props.endAdornmentIconButton, (_b = props.InputProps) === null || _b === void 0 ? void 0 : _b.endAdornment]);
    if (!props.id) {
        const id = (0, utils_1.unstable_useId)();
        props.id = id;
    }
    else {
        props.id = `${(0, utils_1.unstable_useId)()}${props.id}`;
    }
    const muiInputLabelProps = getInputLabelAndActionProps(props, isFocus);
    const muiFormControlProps = getMuiFormControlProps(props, forwardRef);
    return (react_1.default.createElement(StyledMuiFormControl, Object.assign({}, muiFormControlProps, { ref: (node) => {
            rootRef.current = node;
            const forwarded = muiFormControlProps.ref;
            if (typeof forwarded === 'function') {
                forwarded(node);
            }
        } }),
        react_1.default.createElement(InputLabelAndAction_1.default, Object.assign({}, muiInputLabelProps)),
        renderInput(props, setIsFocus, reservedAdornmentWidth)));
});
exports.default = TextField;
