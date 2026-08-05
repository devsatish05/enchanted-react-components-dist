import React from 'react';
import { PaperProps } from '@mui/material/Paper';
import { Components, Theme } from '@mui/material';
declare module '@mui/material/Paper' {
    interface PaperPropsVariantOverrides {
        nopadding: true;
    }
}
export declare const getMuiPaperThemeOverrides: () => Components<Omit<Theme, 'components'>>;
declare const Paper: React.ForwardRefExoticComponent<Omit<PaperProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default Paper;
