import { StoreState } from '@/redux/store';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { NavbarStyled } from './Navbar.styles';

function Navbar() {
  const user: any = useSelector((state: StoreState) => state.user);

  return (
    <NavbarStyled>
      <div className="avatar">
        <h3>
          {user.pushname} (+ {user?.wid?.user})
        </h3>
        <IoPersonCircleOutline size={35}/>
      </div>
    </NavbarStyled>
  );
}

export default Navbar;
