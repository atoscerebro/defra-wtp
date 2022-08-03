import * as StyledComponents from './styled-components';
import { ILinkedAction } from './types';
import { FC } from 'react';

export interface IAppStepNavRelatedHeadingProps {
  preTitle: string;
  linkedActions: ILinkedAction[];
}

export const AppStepNavRelatedHeading: FC<IAppStepNavRelatedHeadingProps> = ({
  preTitle,
  linkedActions,
}: IAppStepNavRelatedHeadingProps) => {
  return (
    <StyledComponents.AppStepNavRelated>
      <StyledComponents.AppStepNavRelatedHeading>
        <StyledComponents.AppStepNavRelatedHeadingPreTitle>
          {preTitle}
        </StyledComponents.AppStepNavRelatedHeadingPreTitle>
        {linkedActions.map((linkedAction) => (
          <StyledComponents.AppStepNavRelatedHeadingParagraph
            key={linkedAction.link}
          >
            <StyledComponents.AppStepNavRelatedHeadingLink
              href={linkedAction.link}
            >
              {linkedAction.text}
            </StyledComponents.AppStepNavRelatedHeadingLink>
            {linkedAction.caption && ` ${linkedAction.caption}`}
          </StyledComponents.AppStepNavRelatedHeadingParagraph>
        ))}
      </StyledComponents.AppStepNavRelatedHeading>
    </StyledComponents.AppStepNavRelated>
  );
};
