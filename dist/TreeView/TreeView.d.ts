import React from 'react';
import type { TreeViewProps } from '@mui/x-tree-view/TreeView';
import '@mui/x-tree-view/themeAugmentation';
import { Components, Theme } from '@mui/material';
export { TreeViewContext, TreeDepthContext } from './TreeItem';
export type { TreeViewProps };
export type EnhancedTreeViewProps = TreeViewProps<any> & {
    /** When false, hides the vertical level-line connecting parent to children. Defaults to true. */
    showLevelLine?: boolean;
    /** When true, all tree items in the tree are disabled. */
    disabled?: boolean;
    /** The icon used to collapse the tree item. */
    defaultCollapseIcon?: React.ReactNode;
    /** The icon used to expand the tree item. */
    defaultExpandIcon?: React.ReactNode;
};
/**
 * Override out of the box styling from MUI to align with designer theme.
 * @returns override TreeView and TreeItem component styles and props
 */
export declare const getMuiTreeViewThemeOverrides: () => Components<Omit<Theme, "components">>;
declare const TreeView: React.ForwardRefExoticComponent<TreeViewProps<any> & {
    /** When false, hides the vertical level-line connecting parent to children. Defaults to true. */
    showLevelLine?: boolean;
    /** When true, all tree items in the tree are disabled. */
    disabled?: boolean;
    /** The icon used to collapse the tree item. */
    defaultCollapseIcon?: React.ReactNode;
    /** The icon used to expand the tree item. */
    defaultExpandIcon?: React.ReactNode;
} & React.RefAttributes<HTMLUListElement>>;
export * from '@mui/lab/TreeView';
export { default as TreeItem } from './TreeItem';
export type { EnhancedTreeItemProps, TreeViewContextValue } from './TreeItem';
export default TreeView;
