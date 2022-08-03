import { Link, Paragraph } from 'govuk-react';
import { ReactNode } from 'react';
import * as StyledComponents from './styled-components';
import { ILinkedAction } from './types';

export interface IAppStepNavRelatedHeadingProps<T extends string> {
  preTitle: string;
  linkedActions: ILinkedAction[];
}

export const AppStepNavRelatedHeading = <T extends string>({
  preTitle,
  linkedActions,
}: IAppStepNavRelatedHeadingProps<T>) => {
  return (
    <StyledComponents.AppStepNavRelated>
      <StyledComponents.AppStepNavRelatedHeading>
        <StyledComponents.AppStepNavRelatedHeadingPreTitle>
          {preTitle}
        </StyledComponents.AppStepNavRelatedHeadingPreTitle>
        {linkedActions.map((linkedAction) => (
          <StyledComponents.AppStepNavRelatedHeadingParagraph>
            <StyledComponents.AppStepNavRelatedHeadingLink
              href={linkedAction.link}
            >
              {linkedAction.text}
            </StyledComponents.AppStepNavRelatedHeadingLink>
            {linkedAction.caption}
          </StyledComponents.AppStepNavRelatedHeadingParagraph>
        ))}
      </StyledComponents.AppStepNavRelatedHeading>
    </StyledComponents.AppStepNavRelated>
  );
};
