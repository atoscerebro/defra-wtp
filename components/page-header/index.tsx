import { TopNav } from 'govuk-react';

export const PageHeader = () => {
  return (
    <>
      <TopNav
        serviceTitle={
          <TopNav.NavLink href="https://example.com" target="new">
            Export green list waste
          </TopNav.NavLink>
        }
      >
        <TopNav.NavLink href="https://example.com?q=catdog" target="new">
          Navigation item
        </TopNav.NavLink>
        <TopNav.NavLink href="https://example.com?q=dogcat" target="new">
          Navigation item
        </TopNav.NavLink>
        <TopNav.NavLink href="https://example.com?q=dogcat" target="new">
          Navigation item
        </TopNav.NavLink>
      </TopNav>
    </>
  );
};
