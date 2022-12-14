import { Heading, VisuallyHidden } from 'govuk-react';
import { FC } from 'react';
import { IRow } from './types';
import * as StyledComponents from './styled-components';
import { Link } from '../link';

export interface ISummaryListProps {
  rows: IRow[];
  border?: boolean;
}

/**
 *  Use the summary list component to present pairs of related information, known as key-value pairs, in a list.
 */
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
            {typeof row.value === 'string' ? (
              <StyledComponents.SummaryListParagraph>
                {row.value}
              </StyledComponents.SummaryListParagraph>
            ) : (
              row.value.map((value) =>
                Array.isArray(value) ? (
                  <StyledComponents.SummaryListSubParagraphContainer>
                    {value.map((sub) => (
                      <StyledComponents.SummaryListParagraph key={sub}>
                        {sub}
                      </StyledComponents.SummaryListParagraph>
                    ))}
                  </StyledComponents.SummaryListSubParagraphContainer>
                ) : (
                  <StyledComponents.SummaryListParagraph key={value} hasMargin>
                    {value}
                  </StyledComponents.SummaryListParagraph>
                ),
              )
            )}
          </StyledComponents.SummaryListValue>
          {row.action &&
            row.action.map((action) => (
              <StyledComponents.SummaryListActions key={action.link}>
                <Link href={action.link}>
                  {action.title}
                  <VisuallyHidden>{row.key.toLowerCase()}</VisuallyHidden>
                </Link>
              </StyledComponents.SummaryListActions>
            ))}
        </StyledComponents.SummaryListRow>
      ))}
    </StyledComponents.SummaryList>
  );
};
