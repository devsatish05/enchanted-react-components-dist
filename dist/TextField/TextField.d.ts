import React from 'react';
import { OutlinedTextFieldProps as MuiOutlinedTextFieldProps } from '@mui/material/TextField';
import { Components, Theme, SvgIconProps } from '@mui/material';
import { ActionProps } from '../prerequisite_components/InputLabelAndAction/InputLabelAndAction';
/**
 * @typedef OutlinedTextFieldProps
 * @type {object}
 * @property {any} value
 */
export type OutlinedTextFieldProps = MuiOutlinedTextFieldProps & {
    value?: any;
};
export interface TextFieldProps extends Omit<OutlinedTextFieldProps, 'variant'> {
    nonEdit?: boolean;
    actionProps?: ActionProps[];
    helperText?: string;
    enableHelpHoverEffect?: boolean;
    helperIconTooltip?: string;
    margin?: 'none' | 'dense';
    color?: 'primary';
    size?: 'medium';
    focused?: boolean;
    hiddenLabel?: boolean;
    unitLabel?: string;
    endAdornmentAction?: React.ReactNode;
    renderNonEditInput?: () => React.ReactNode;
    endAdornmentIconButton?: React.ReactNode;
    customIcon?: React.ComponentType<SvgIconProps> | undefined;
}
export declare const getMuiTextFieldThemeOverrides: () => Components<Omit<Theme, "components">>;
export type CustomTextFieldProps = TextFieldProps & {
    unitLabel?: string;
    endAdornmentIconButton?: React.ReactNode;
    endAdornmentAction?: React.ReactNode;
};
export declare const getEndAdornmentSlots: (props: CustomTextFieldProps, isComboBox: boolean) => {
    flowNodes: React.ReactNode[];
    fixedNodes: React.ReactNode[];
    actionNodes: React.ReactNode[];
};
export declare const getEndAdornment: (props: CustomTextFieldProps, isComboBox: boolean) => React.JSX.Element | null;
declare const TextField: React.FC<TextFieldProps>;
export default TextField;
