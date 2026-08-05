import React from 'react';
import { GridRenderCellParams } from '@mui/x-data-grid';
declare function DataGridCell(props: GridRenderCellParams): React.JSX.Element;
declare namespace DataGridCell {
    var defaultProps: {
        showSortingIcon: boolean;
    };
}
export default DataGridCell;
