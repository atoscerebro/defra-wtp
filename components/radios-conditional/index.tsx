import { ComponentProps, FC, ReactNode } from 'react';
import { Radio } from 'govuk-react';
import { RadiosConditionalWrapper } from './styled-components';

export interface IRadiosConditionalProps extends ComponentProps<typeof Radio> {
  ariaId: string;
  renderConditional: () => ReactNode;
}

/**
 * Use a conditional radio to show the user a related question when they select a particular radio option,
 * so they only see the question when it’s relevant to them.
 */
export const RadiosConditional: FC<IRadiosConditionalProps> = ({
  ariaId,
  checked,
  children,
  renderConditional,
  ...rest
}) => {
  return (
    <div>
      <Radio
        checked={checked}
        aria-expanded={checked}
        aria-controls={ariaId}
        {...rest}
      >
        {` ${children} `}
      </Radio>
      <RadiosConditionalWrapper id={ariaId}>
        {checked && renderConditional()}
      </RadiosConditionalWrapper>
    </div>
  );
};
