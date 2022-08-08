import { Paragraph } from 'govuk-react';
import { BackLink, Main, GridRow, GridCol, FormGroup } from 'govuk-react';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useRouter } from 'next/router';

interface IProps {
  component?: React.ReactNode;
  backHref: string;
}

export const BaseTaskPage: FC<IProps> = ({ component }) => {
  const router = useRouter();
  return (
    <>
      <Main>
        <GridRow>
          <GridCol setWidth="two-thirds">
            <BackLink href="#" onClick={() => router.back()}>
              Back
            </BackLink>
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
