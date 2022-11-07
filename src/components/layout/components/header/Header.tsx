import { Instagram, YouTube } from '@mui/icons-material';
import { FC } from 'react';

import { HeaderContainer } from './header.style';
import { HeaderMenu } from './HeaderMenu';

export const Header: FC = () => {
  return (
    <HeaderContainer>
      <div className='leftBlock'>
        <HeaderMenu />
      </div>
      <div className='rightBlock'>
        <Instagram />
        <YouTube />
      </div>
    </HeaderContainer>
  );
};
