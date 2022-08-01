import { Heading, VisuallyHidden } from 'govuk-react';
import { FC } from 'react';
import { IRow } from './types';
import * as StyledComponents from './styled-components';

export interface ISummaryListProps {
  rows: IRow[];
  border?: boolean;
}

export const SummaryList: FC<ISummaryListProps> = ({ rows, border = true }) => {
  return (
    <StyledComponents.SummaryList>
      {rows.map((row) => (
        <StyledComponents.SummaryListRow
          key={row.key}
          border={border}
          noActions={!row.action}
        >
          <Heading as={StyledComponents.SummaryListKey} size="SMALL">
            {row.key}
          </Heading>
          <StyledComponents.SummaryListValue>
            {Array.isArray(row.value) ? (
              row.value.map((sub) => (
                <StyledComponents.SummaryListParagraph key={sub}>
                  {sub}
                </StyledComponents.SummaryListParagraph>
              ))
            ) : (
              <StyledComponents.SummaryListParagraph>
                {row.value}
              </StyledComponents.SummaryListParagraph>
            )}
          </StyledComponents.SummaryListValue>
          {row.action && (
            <StyledComponents.SummaryListActions>
              <StyledComponents.SummaryListLink href={row.action.link}>
                {row.action.title}
                <VisuallyHidden>{row.key.toLowerCase()}</VisuallyHidden>
              </StyledComponents.SummaryListLink>
            </StyledComponents.SummaryListActions>
          )}
        </StyledComponents.SummaryListRow>
      ))}
    </StyledComponents.SummaryList>
  );
};
