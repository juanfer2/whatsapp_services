// import React, { useState } from 'react';
import {
  IoAirplaneOutline,
  IoBalloonOutline
  // FaBars,
  /// FaUserAlt,
  /// FaRegChartBar,
  /// FaCommentAlt,
  /// FaShoppingBag,
  /// FaThList
} from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { SidebarStyled } from './Sidebar.styles';
import { StoreState } from '@/redux/store';
import { useSelector } from 'react-redux';

function Sidebar() {
  const user = useSelector((state: StoreState) => state.user);

  // const [isOpen, setIsOpen] = useState(true);
  // const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: '/',
      name: 'Home',
      icon: <IoBalloonOutline />
    },
    {
      path: '/login',
      name: 'Login',
      icon: <IoAirplaneOutline />
    }
  ];

  const privateMenuItem = [
    {
      path: '/',
      name: 'Home',
      icon: <IoBalloonOutline />
    },
    {
      path: '/send_message',
      name: 'Send Messages',
      icon: <IoBalloonOutline />
    }
  ];

  const listMenu = user.pushname !== '' ? privateMenuItem : menuItem;

  return (
    <SidebarStyled>
      <div className="top_section">
        <h3>WA Services</h3>

        {/* <div style={{ marginLeft: isOpen ? '50px' : '0px' }} className="bars">
            <FaBars onClick={toggle} />
        </div> */}
      </div>

      <nav className="nav">
        {listMenu.map((item, index) => (
          <NavLink to={item.path} key={index} className="menu-item">
            <div className="icon">{item.icon}</div>
            <div className="text">{item.name}</div>
          </NavLink>
        ))}
      </nav>
    </SidebarStyled>
  );
}

export default Sidebar;
