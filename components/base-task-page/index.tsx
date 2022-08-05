import { Paragraph } from 'govuk-react';
import {
  BackLink as GovUKBackLink,
  Main,
  GridRow,
  GridCol,
  FormGroup,
  Link,
} from 'govuk-react';
import { BackLink } from '../back-link';
import { FC } from 'react';
import { useRouter } from 'next/router';
import { FormContentWrapper } from './styled-components';

interface IProps {
  component?: React.ReactNode;
  backHref: string;
}

export const BaseTaskPage: FC<IProps> = ({ component, backHref }) => {
  const router = useRouter();
  return (
    <>
      <Main>
        <GridRow>
          <GridCol setWidth="two-thirds">
            <BackLink href={backHref}>Back</BackLink>
            <FormContentWrapper>
            <FormGroup>{component}</FormGroup>
            </FormContentWrapper>
            {console.log(router.route)}
            <Paragraph>[Return to submit export page](/submit-export-task-list)</Paragraph>
          </GridCol>
        </GridRow>
      </Main>
    </>
  );
};
