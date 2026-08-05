import React from 'react';
export declare enum SnackbarContainerPosition {
    LEFT = "left",
    RIGHT = "right"
}
export interface SnackbarContainerProps {
    position?: SnackbarContainerPosition;
}
declare const SnackbarContainer: React.ComponentType<SnackbarContainerProps & React.HTMLAttributes<HTMLDivElement>>;
export default SnackbarContainer;
