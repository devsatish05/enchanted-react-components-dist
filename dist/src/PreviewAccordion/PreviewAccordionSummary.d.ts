import React, { ReactNode } from 'react';
import { AccordionSummaryProps } from '../Accordion/AccordionSummary';
export interface PreviewAccordionSummaryProps extends AccordionSummaryProps {
    titlelink?: ReactNode;
    subtitle?: ReactNode;
    leftsection?: ReactNode;
    rightsection?: ReactNode;
}
declare function PreviewAccordionSummary({ ...props }: PreviewAccordionSummaryProps): React.JSX.Element;
declare namespace PreviewAccordionSummary {
    var defaultProps: {};
}
export default PreviewAccordionSummary;
