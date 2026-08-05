import React, { ReactNode } from 'react';
import { InputLabelProps as MuiInputLabelProps } from '@mui/material/InputLabel';
import { GridProps as MuiGridProps } from '@mui/material/Grid';
import { SvgIconProps } from '@mui/material';
import { TooltipPlacement } from '../../Tooltip';
export interface ActionProps {
    href?: string;
    label: string;
    endIcon?: boolean;
    handleClick?(event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>): void;
    disabled?: boolean;
    tooltip?: string;
}
export interface InputLabelAndActionProps extends MuiInputLabelProps {
    actionProps?: ActionProps[];
    helperIconTooltip?: string;
    tooltipPlacement?: TooltipPlacement;
    hiddenLabel?: boolean;
    label?: ReactNode | string;
    isFocus?: boolean;
    fullWidth?: boolean;
    enableHelpHoverEffect?: boolean;
    customIcon?: React.ComponentType<SvgIconProps>;
}
export declare const labelFocus: React.ComponentType<React.HTMLAttributes<HTMLDivElement>>;
export declare const MuiInputHelpIcon: React.ComponentType<SvgIconProps & {
    enableHelpHoverEffect?: boolean;
}>;
export declare const StyledInputLabel: React.ComponentType<MuiInputLabelProps>;
export declare const MuiGrid: React.ComponentType<MuiGridProps>;
export declare const StyledSpan: React.ComponentType<React.HTMLAttributes<HTMLSpanElement>>;
declare const InputLabelAndAction: React.FC<InputLabelAndActionProps>;
export default InputLabelAndAction;
