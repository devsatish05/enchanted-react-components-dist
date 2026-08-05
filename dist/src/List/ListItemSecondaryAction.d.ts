import React from 'react';
import { ListItemSecondaryActionProps } from '@mui/material/ListItemSecondaryAction';
import { Components, Theme } from '@mui/material';
export declare const getMuiListItemSecondaryActionThemeOverrides: () => Components<Omit<Theme, 'components'>>;
declare function ListItemSecondaryAction(props: ListItemSecondaryActionProps): React.JSX.Element;
declare namespace ListItemSecondaryAction {
    var defaultProps: {};
}
export * from '@mui/material/ListItemAvatar';
export default ListItemSecondaryAction;
