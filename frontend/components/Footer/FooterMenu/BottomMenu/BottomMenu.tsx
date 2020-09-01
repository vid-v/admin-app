import React from 'react';
import Link from 'next/link';
import Menu, { MenuItem, MenuLink } from './BottomMenu.style';

const menuItems = [
  {
    id: 1,
    label: 'Privacy',
    path: '/privacy',
  },
  {
    id: 2,
    label: 'Terms',
    path: '/terms',
  },
  {
    id: 3,
    label: 'Security',
    path: '#',
  },
];

type MenuProps = {
  className?: string;
  onClick?: () => void;
};

const BottomMenu = ({ className, onClick }: MenuProps) => {
  return (
    <Menu className={className}>
      {menuItems.map(item => (
        <MenuItem key={`top-menu--item${item.id}`} onClick={onClick}>
          <Link href={item.path}>
            <MenuLink>{item.label}</MenuLink>
          </Link>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default BottomMenu;
