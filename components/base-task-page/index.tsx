import { Paragraph } from 'govuk-react';
import { BackLink, Main, GridRow, GridCol, FormGroup } from 'govuk-react';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { TRANSLATION_KEYS } from '../../translations/constants';
import { Link } from '../link';
import { FormContentWrapper } from './styled-components';

interface IProps {
  component?: React.ReactNode;
}

export const BaseTaskPage: FC<IProps> = ({ component }) => {
  const router = useRouter();
  const {t} = useTranslation();
  return (
    <>
      <Main>
        <GridRow>
          <GridCol setWidth="two-thirds">
            <BackLink href="#" onClick={() => router.back()}>
              {t(TRANSLATION_KEYS.back)}
            </BackLink>
            <FormContentWrapper>
              <FormGroup>{component}</FormGroup>
            </FormContentWrapper>
            <Link href="/submit-export-task-list">
              <Paragraph>{t(TRANSLATION_KEYS.returnToSubmitAnExport) as string}</Paragraph>
            </Link>
          </GridCol>
        </GridRow>
      </Main>
    </>
  );
};
