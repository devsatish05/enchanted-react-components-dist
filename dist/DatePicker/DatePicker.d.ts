import React from 'react';
import { DatePickerProps as MuiDatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { SvgIconProps } from '@mui/material';
import { Dayjs } from 'dayjs';
import { ActionProps } from '../prerequisite_components/InputLabelAndAction/InputLabelAndAction';
export interface DatePickerProps<TDate extends Dayjs = Dayjs> extends Omit<MuiDatePickerProps<TDate>, 'slots' | 'slotProps'> {
    label?: string;
    helperText?: string;
    enableHelpHoverEffect?: boolean;
    helperIconTooltip?: string;
    format?: string;
    margin?: 'none' | 'dense';
    color?: 'primary';
    size?: 'medium';
    unitLabel?: string;
    required?: boolean;
    disabled?: boolean;
    hiddenLabel?: boolean;
    nonEdit?: boolean;
    error?: boolean;
    fullWidth?: boolean;
    actionProps?: ActionProps[];
    customStyles?: React.CSSProperties | {
        [key: string]: React.CSSProperties;
    };
    customIcon?: React.ComponentType<SvgIconProps> | undefined;
    /**
     * If true, renders a static date picker without input field. Useful for embedded calendar views
     */
    staticMode?: boolean;
}
/**
 * Default prop values for DatePicker.
 * Exported for use in Storybook argTypes and story args.
 */
export declare const DatePickerDefaults: {
    margin: "none";
    color: "primary";
    size: "medium";
    label: string;
    helperText: string;
    enableHelpHoverEffect: boolean;
    helperIconTooltip: string;
    format: string;
    unitLabel: string;
    required: boolean;
    disabled: boolean;
    fullWidth: boolean;
    hiddenLabel: boolean;
    nonEdit: boolean;
    showDaysOutsideCurrentMonth: boolean;
    error: boolean;
    staticMode: boolean;
};
declare const DatePicker: <TDate extends Dayjs = Dayjs>({ customStyles, staticMode, margin, color, size, label, helperText, enableHelpHoverEffect, helperIconTooltip, format, unitLabel, required, disabled, fullWidth, hiddenLabel, nonEdit, error, actionProps, customIcon, value, onViewChange, onAccept, ...muiProps }: DatePickerProps<TDate>) => React.JSX.Element;
export * from '@mui/x-date-pickers/DatePicker';
export default DatePicker;
