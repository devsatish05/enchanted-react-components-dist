import React from 'react';
import { GridColumnMenuProps as MuiGridColumnMenuProps, GridColumnVisibilityModel } from '@mui/x-data-grid';
type GridColumnMenuProps = MuiGridColumnMenuProps & {
    onSortModelChange: Function;
    onColumnVisibilityModelChange: Function;
    columnVisibilityModel: GridColumnVisibilityModel;
};
export declare const ExtendedGridColumnMenu: ({ colDef, onSortModelChange, onColumnVisibilityModelChange, columnVisibilityModel, hideMenu, }: GridColumnMenuProps) => React.JSX.Element;
export {};
