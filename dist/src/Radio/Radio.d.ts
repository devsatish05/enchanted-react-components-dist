import React from 'react';
import { RadioProps } from '@mui/material/Radio';
import { Components, Theme } from '@mui/material';
declare function Radio({ ...props }: RadioProps): React.JSX.Element;
declare namespace Radio {
    var defaultProps: {
        disableRipple: boolean;
        disabled: boolean;
        required: boolean;
    };
}
export declare const getMuiRadioThemeOverrides: () => Components<Omit<Theme, 'components'>>;
export * from '@mui/material/Radio';
export default Radio;
