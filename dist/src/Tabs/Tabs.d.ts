import React from 'react';
import { TabsProps as MuiTabsProps } from '@mui/material/Tabs';
interface TabsProps extends MuiTabsProps {
    disabled?: boolean;
    iconposition?: 'start' | 'top';
    showIcon?: boolean;
    showLabel?: boolean;
}
declare function Tabs({ ...props }: TabsProps): React.JSX.Element;
declare namespace Tabs {
    export { defaultProps };
}
declare const defaultProps: TabsProps;
export * from '@mui/material/Tabs';
export default Tabs;
