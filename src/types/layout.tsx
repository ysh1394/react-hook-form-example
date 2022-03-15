import type {
  DrawerProps,
  ListItemButtonBaseProps as MuiListItemButtonBaseProps,
  ListProps,
} from '@mui/material';
import type { MouseEventHandler, ReactNode } from 'react';

// Path
export interface Link {
  path: string;
  text: string;
}

// Footer.tsx
export interface FooterProps {
  businessName?: string;
  children?: ReactNode;
}

// Header.tsx
export interface HeaderProps {
  onOpen?: MouseEventHandler<HTMLButtonElement>;
  pages?: Link[];
  title?: string;
}

// ListItem.tsx
export type LinkEventHandler = (path: string) => void;

export interface ListItemButtonBase extends Link {
  icon?: ReactNode;
}

export interface ListItemButtonProps extends ListItemButtonBase {
  onClick: LinkEventHandler;
  open?: boolean;
  sx?: MuiListItemButtonBaseProps['sx'];
}

export interface ListItemBase extends ListItemButtonBase {
  subItems?: ListItemBase[];
}
export interface ListItemProps extends ListItemBase {
  onClick?: LinkEventHandler;
  sx?: MuiListItemButtonBaseProps['sx'];
}

// Nav.tsx
export interface StyledDrawerProps extends DrawerProps {
  width?: number;
}

export interface StyledListProps extends ListProps {
  component: string;
}

export interface IRoutes {
  mainTitle: string;
  routes: ListItemProps[];
}

export interface NavProps {
  items: IRoutes[];
  onClickItem: ListItemProps['onClick'];
  width: StyledDrawerProps['width'];
  onClose?: DrawerProps['onClose'];
  open?: boolean;
  sx?: DrawerProps['sx'];
  title?: ReactNode;
  variant?: DrawerProps['variant'];
}

// Layout.tsx
export interface NavWidth {
  width: NavProps['width'];
}

export interface LayoutProps {
  children: ReactNode;
  navItems: NavProps['items'] | any;
  navWidth: NavProps['width'];
  onClickItem: NavProps['onClickItem'];
  businessName?: FooterProps['businessName'];
  footer?: FooterProps['children'];
  headerPages?: HeaderProps['pages'];
  headerTitle?: HeaderProps['title'];
  navTitle?: NavProps['title'];
}
