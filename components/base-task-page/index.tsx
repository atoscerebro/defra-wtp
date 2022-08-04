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
          <GridCol>
            <BackLink href={backHref}>Back</BackLink>
            <FormGroup>{component}</FormGroup>
            {console.log(router.route)}
            <Paragraph>
              [Return to submit export page](/submit-export-task-list)
            </Paragraph>
          </GridCol>
        </GridRow>
      </Main>
    </>
  );
};
