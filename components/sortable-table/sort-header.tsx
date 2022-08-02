import { FC } from 'react';
import { IHeader, SortType } from './types';
import * as StyledComponents from './styled-components';
import { getNextSortType } from './utils';

export interface ISortHeader extends IHeader {
  onSort: (header: IHeader, order: SortType) => void;
}

export const SortHeader: FC<ISortHeader> = ({ onSort, ...rest }) => {
  return (
    <StyledComponents.SortTableSortHeader aria-sort={rest.type} formatType={rest.formatType}>
      <StyledComponents.SortTableButton
        onClick={() => onSort(rest, getNextSortType(rest.type))}
      >
        {rest.text}
      </StyledComponents.SortTableButton>
    </StyledComponents.SortTableSortHeader>
  );
};
