import { Select, TopNav } from 'govuk-react';
import React, { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../translations/i18n';

export const PageHeader = () => {
  const [language, setLanguage] = useState('en');
  const { t } = useTranslation();

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value;
    setLanguage(value);
    i18n.changeLanguage(value);
  };
  return (
    <div>
      <TopNav
        search={
          <Select
            input={{
              name: 'languages',
              onChange: handleOnChange,
            }}
            label=""
          >
            <option value="en">English</option>
            <option value="cym">Cymraeg</option>
          </Select>
        }
        serviceTitle={
          <TopNav.NavLink href="https://example.com" target="new">
            {t('exportGreenListWaste') as string}
          </TopNav.NavLink>
        }
      >
        {/* <TopNav.NavLink href="https://example.com?q=catdog" target="new">
          Navigation item
        </TopNav.NavLink>
        <TopNav.NavLink href="https://example.com?q=dogcat" target="new">
          Navigation item
        </TopNav.NavLink>
        <TopNav.NavLink href="https://example.com?q=dogcat" target="new">
          Navigation item
        </TopNav.NavLink> */}
      </TopNav>
    </div>
  );
};
