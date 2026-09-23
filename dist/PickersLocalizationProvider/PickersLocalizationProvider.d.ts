import React from 'react';
import { LocalizationProviderProps as MuiLocalizationProviderProps } from '@mui/x-date-pickers/LocalizationProvider';
type LocalizationProviderPropsAny = MuiLocalizationProviderProps<any, any>;
export declare const SUPPORTED_LOCALE: string[];
export type PickersLocalizationProviderProps = LocalizationProviderPropsAny & {
    onLocaleLoad?: (locale: string) => void;
    adapterLocale: string | object;
    /** Day the week starts on. 0 = Sunday, 1 = Monday (default) */
    weekStartsOn?: 0 | 1;
};
declare const PickersLocalizationProvider: ({ adapterLocale: adapterLocaleProp, onLocaleLoad, weekStartsOn, ...rest }: PickersLocalizationProviderProps) => React.JSX.Element;
export * from '@mui/x-date-pickers/LocalizationProvider';
export default PickersLocalizationProvider;
