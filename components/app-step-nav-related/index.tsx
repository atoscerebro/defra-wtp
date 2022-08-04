import { Paragraph } from 'govuk-react';
import { ReactNode } from 'react';
import { Link } from '../link';
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
            <Link href={linkedAction.link}>{linkedAction.text}</Link>
            {linkedAction.caption && ` ${linkedAction.caption}`}
          </StyledComponents.AppStepNavRelatedHeadingParagraph>
        ))}
      </StyledComponents.AppStepNavRelatedHeading>
    </StyledComponents.AppStepNavRelated>
  );
};
