import { Paragraph } from 'govuk-react';
import { BackLink, Main, GridRow, GridCol, FormGroup } from 'govuk-react';
import { FC } from 'react';
import { Link } from '../link';

interface IProps {
  component?: React.ReactNode;
}

export const BaseTaskPage: FC<IProps> = ({ component }) => {
  return (
    <>
      <Main>
        <GridRow>
          <GridCol setWidth="two-thirds">
            <BackLink>Back</BackLink>
            <FormGroup>{component}</FormGroup>
            <Link href="/submit-export-task-list">
              <Paragraph>Return to submit an export</Paragraph>
            </Link>
          </GridCol>
        </GridRow>
      </Main>
    </>
  );
};
