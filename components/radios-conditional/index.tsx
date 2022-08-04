import { ComponentProps, ReactNode } from 'react';
import { Radio } from 'govuk-react';

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
        {children}
      </Radio>
      {checked && renderConditional()}
    </div>
  );
};

// { input: {onChange, value} }
// <div>
//      <Radio/>
//      {children}
// <div>
