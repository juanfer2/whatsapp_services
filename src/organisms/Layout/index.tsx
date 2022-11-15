import { LayoutStyled } from './Layout.styles';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';

export interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <LayoutStyled>
      <Sidebar />
      <main>
        <Navbar />
        {children}
      </main>
    </LayoutStyled>
  );
}

export default Layout;
