import React from 'react';
import { TableProps } from '@mui/material/Table';
declare function Table({ ...props }: TableProps): React.JSX.Element;
declare namespace Table {
    var defaultProps: {
        padding: string;
        size: string;
        stickyHeader: boolean;
    };
}
export * from '@mui/material/Table';
export default Table;
