import { Select, TopNav } from 'govuk-react';
import React, { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../translations/i18n';
import {
  TranslationLinksContainer,
  TranslationLinkDivLeft,
  TranslationLinkDivRight,
} from './styled-components';

export const PageHeader = () => {
  const [language, setLanguage] = useState('en');
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  // const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
  //   const value = e.currentTarget.value;
  //   setLanguage(value);
  //   i18n.changeLanguage(value);
  // };
  const handleOnClick = (e) => {
    const value = e.currentTarget.value;
    setLanguage(value);
    setVisible(!visible);
    i18n.changeLanguage(value);
  };
  return (
    <div>
      <TopNav
        // search={
        //   <Select
        //     input={{
        //       name: 'languages',
        //       onChange: handleOnChange,
        //     }}
        //     label=""
        //   >
        //     <option value="en">English</option>
        //     <option value="cym">Cymraeg</option>
        //   </Select>
        // }
        serviceTitle={
          <TopNav.NavLink href="https://example.com" target="new">
            {t('exportGreenListWaste') as string}
          </TopNav.NavLink>
        }
      >
        <TranslationLinksContainer>
          <TranslationLinkDivLeft value="en" onClick={handleOnClick}>
            English
          </TranslationLinkDivLeft>
          <span> | </span>
          <TranslationLinkDivRight value="cym" onClick={handleOnClick}>
            Cymraeg
          </TranslationLinkDivRight>
        </TranslationLinksContainer>
      </TopNav>
    </div>
  );
};
