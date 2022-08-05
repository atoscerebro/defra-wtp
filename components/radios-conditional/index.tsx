import { ComponentProps, ReactNode } from 'react';
import { Radio } from 'govuk-react';
import { RadiosConditionalWrapper } from './styled-components';

export interface IRadiosConditionalProps<T extends string>
  extends ComponentProps<typeof Radio> {
  ariaId: string;
  renderConditional: () => ReactNode;
}

export const RadiosConditional = <T extends string>({
  ariaId,
  checked,
  children,
  renderConditional,
  ...rest
}: IRadiosConditionalProps<T>) => {
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
