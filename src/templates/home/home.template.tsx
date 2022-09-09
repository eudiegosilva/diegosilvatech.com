import { Navbar } from 'components';
import { Command } from 'components';

import * as s from './home.template.styles';

const HomeTemplate = () => {
  return (
    <Command>
      <s.Wrapper>
        <Navbar />
      </s.Wrapper>
    </Command>
  );
};

export default HomeTemplate;
