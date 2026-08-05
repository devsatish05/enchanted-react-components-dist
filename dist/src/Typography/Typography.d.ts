import React from 'react';
import { TypographyProps } from '@mui/material/Typography';
import { Components, Theme } from '@mui/material';
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        body1bold?: true;
        body1italic?: true;
        body2bold?: true;
        body2italic?: true;
    }
}
declare const Typography: React.FC<TypographyProps & {
    component?: React.ElementType;
}>;
export declare const getMuiTypographyThemeOverrides: () => Components<Omit<Theme, 'components'>>;
export * from '@mui/material/Typography';
export default Typography;
