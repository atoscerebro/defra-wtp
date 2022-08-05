import { ComponentProps, ReactNode } from 'react';
import { Radio } from 'govuk-react';
import { RadiosConditionalWrapper } from './styled-components';

export interface IRadiosConditionalProps<T extends string>
  extends ComponentProps<typeof Radio> {
  renderConditional: () => ReactNode;
}

export const RadiosConditional = <T extends string>({
  checked,
  children,
  renderConditional,
  ...rest
}: IRadiosConditionalProps<T>) => {
  return (
    <div>
      <Radio checked={checked} {...rest}>
        {` ${children} `}
      </Radio>
      <RadiosConditionalWrapper>
        {checked && renderConditional()}
      </RadiosConditionalWrapper>
    </div>
  );
};
