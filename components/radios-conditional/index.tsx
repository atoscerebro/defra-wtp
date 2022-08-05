import { ComponentProps, ReactNode } from 'react';
import { Radio } from 'govuk-react';
import { RadiosConditionalWrapper } from './styled-components';

export interface IRadiosConditionalProps<T extends string>
  extends ComponentProps<typeof Radio> {
  id: string;
  renderConditional: () => ReactNode;
}

export const RadiosConditional = <T extends string>({
  id,
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
        aria-controls={id}
        {...rest}
      >
        {` ${children} `}
      </Radio>
      <RadiosConditionalWrapper id={id}>
        {checked && renderConditional()}
      </RadiosConditionalWrapper>
    </div>
  );
};
