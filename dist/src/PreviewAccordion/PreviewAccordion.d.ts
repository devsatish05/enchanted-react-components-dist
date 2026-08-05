import React from 'react';
import { AccordionPropsAll, AccordionTypes } from '../Accordion';
export declare const PreviewAccordionTypes: {
    OUTLINED: AccordionTypes.OUTLINED;
    NO_OUTLINE: AccordionTypes.NO_OUTLINE;
};
export type PreviewAccordionPropsAll = AccordionPropsAll & {
    hascheckbox?: boolean;
    hasicon?: boolean;
    hasavatar?: boolean;
};
declare function PreviewAccordion({ ...props }: PreviewAccordionPropsAll): React.JSX.Element;
declare namespace PreviewAccordion {
    export { defaultProps };
}
declare const defaultProps: PreviewAccordionPropsAll;
export * from '@mui/material/Accordion';
export default PreviewAccordion;
