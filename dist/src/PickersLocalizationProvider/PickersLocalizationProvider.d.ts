import React from 'react';
import { LocalizationProviderProps as MuiLocalizationProviderProps } from '@mui/x-date-pickers/LocalizationProvider';
type LocalizationProviderPropsAny = MuiLocalizationProviderProps<any, any>;
export declare const SUPPORTED_LOCALE: string[];
export type PickersLocalizationProviderProps = LocalizationProviderPropsAny & {
    onLocaleLoad?: (locale: string) => void;
    adapterLocale: string | object;
};
declare const PickersLocalizationProvider: ({ adapterLocale: adapterLocaleProp, onLocaleLoad, ...rest }: PickersLocalizationProviderProps) => React.JSX.Element;
export * from '@mui/x-date-pickers/LocalizationProvider';
export default PickersLocalizationProvider;
