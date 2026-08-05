import React from 'react';
import { TimePickerProps as MuiTimePickerProps } from '@mui/x-date-pickers/TimePicker';
import { ActionProps } from '../../prerequisite_components/InputLabelAndAction/InputLabelAndAction';
export interface TimePickerProps<TDate = any> extends Omit<MuiTimePickerProps<TDate>, 'slots' | 'slotProps'> {
    label?: string;
    helperText?: string;
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
}
declare function TimePicker<TDate = any>({ ...props }: TimePickerProps<TDate>): React.JSX.Element;
declare namespace TimePicker {
    var defaultProps: {
        margin: string;
        color: string;
        size: string;
        label: string;
        helperText: string;
        helperIconTooltip: string;
        format: string;
        unitLabel: string;
        required: boolean;
        disabled: boolean;
        fullWidth: boolean;
        hiddenLabel: boolean;
        nonEdit: boolean;
        error: boolean;
    };
}
export * from '@mui/x-date-pickers/TimePicker';
export default TimePicker;
