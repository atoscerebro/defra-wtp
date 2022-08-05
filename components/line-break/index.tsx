import { FC, ReactNode, Children } from 'react';
import * as StyledComponents from './styled-components';

export interface ILineBreakProps {
  children: ReactNode[];
}

export const LineBreak: FC<ILineBreakProps> = ({ children }) => {
  return (
    <>
      {Children.map(
        children,
        (child) =>
          child && (
            <StyledComponents.LineBreakParagraph>
              {child.toString()}
            </StyledComponents.LineBreakParagraph>
          ),
      )}
    </>
  );
};
