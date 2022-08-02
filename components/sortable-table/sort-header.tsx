import { FC } from 'react';
import { IHeader, SortType } from './types';
import * as StyledComponents from './styled-components';
import { getNextSortType } from './utils';

export interface ISortHeader extends IHeader {
  onSort: (header: IHeader, order: SortType) => void;
}

export const SortHeader: FC<ISortHeader> = ({ onSort, ...rest }) => {
  return (
    <StyledComponents.SortHeader aria-sort={rest.type}>
      <StyledComponents.SortButton
        onClick={() => onSort(rest, getNextSortType(rest.type))}
      >
        {rest.text}
      </StyledComponents.SortButton>
    </StyledComponents.SortHeader>
  );
};
