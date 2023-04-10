import * as UI from './styles';
import { ILayoutProps } from './types';

const Layout = (props: ILayoutProps) => {
  const { children } = props;

  return (
    <UI.Wrapper>
      { children }
    </UI.Wrapper>
  );
};

export default Layout;
