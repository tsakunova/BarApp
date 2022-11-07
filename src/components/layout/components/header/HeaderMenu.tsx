import { FC } from 'react';

import { LeftContainer } from './header.style';

import { PAGES } from 'shared/const';
import { Pages } from 'shared/enum';
import { keyExtractor } from 'shared/utils';

export const HeaderMenu: FC = () => {
  return (
    <LeftContainer>
      {PAGES.map((page: Pages) => (
        <div key={keyExtractor(page)}>{page}</div>
      ))}
    </LeftContainer>
  );
};
