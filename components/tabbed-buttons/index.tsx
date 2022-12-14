import { MouseEvent } from 'react';
import * as StyledComponents from './styled-components';

export interface ITabbedButtonsProps<T extends string> {
  current: T;
  keys: T[];
  onClick: (key: T, e: MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Use Tabbed Buttons to differentiate and switch between the currently selected option
 * and other available ones.
 */
export const TabbedButtons = <T extends string>({
  current,
  keys,
  onClick,
}: ITabbedButtonsProps<T>) => {
  return (
    <StyledComponents.TabbedButtonsContainer>
      {keys.map((key) => (
        <StyledComponents.TabbedButton
          key={key}
          active={current === key}
          onClick={(e) => onClick(key, e)}
        >
          {key}
        </StyledComponents.TabbedButton>
      ))}
    </StyledComponents.TabbedButtonsContainer>
  );
};
