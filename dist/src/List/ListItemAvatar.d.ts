import React from 'react';
import { ListItemAvatarProps as MuiListItemAvatarProps } from '@mui/material/ListItemAvatar';
import { Components, Theme } from '@mui/material';
export type ListItemAvatarProps = MuiListItemAvatarProps & {};
export declare const getMuiListItemAvatarThemeOverrides: () => Components<Omit<Theme, 'components'>>;
declare function ListItemAvatar(props: ListItemAvatarProps): React.JSX.Element;
declare namespace ListItemAvatar {
    var defaultProps: {};
}
export * from '@mui/material/ListItemAvatar';
export default ListItemAvatar;
