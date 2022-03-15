import {
  Box,
  Drawer,
  List,
  Skeleton,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import { memo } from 'react';

import type {
  NavProps,
  StyledDrawerProps,
  StyledListProps,
} from '@/types/layout';

import ListItem from './ListItem';

const COLOR = '#F5F5F7';
const BACKGROUND_COLOR = '#000000CC';

const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'width',
})<StyledDrawerProps>(({ width }) => ({
  '& .MuiDrawer-paper': {
    backgroundColor: BACKGROUND_COLOR,
    color: COLOR,
    width,
  },
  '& .MuiListItemIcon-root': {
    color: COLOR,
  },
}));

const StyledList = styled(List)<StyledListProps>`
  padding-bottom: 120px;
`;

const StyledTypography = styled('h5')(({ theme }) => ({
  ...theme.typography.h6,
  '&:hover': {
    color: theme.palette.primary.main,
  },
  cursor: 'pointer',
  fontSize: '18px',
  margin: '0',
}));

const Nav = ({
  items,
  onClickItem,
  onClose,
  open,
  sx,
  title,
  variant = 'temporary',
  width,
}: NavProps) => {
  const { isReady, push } = useRouter();
  const goHome = () => {
    push({ pathname: '/' });
  };
  return (
    <StyledDrawer
      open={open}
      sx={sx}
      variant={variant}
      width={width}
      onClose={onClose}
    >
      <StyledList component="nav">
        <Toolbar>
          {isReady ? (
            <StyledTypography onClick={goHome}>{title}</StyledTypography>
          ) : (
            <Skeleton
              animation="wave"
              height="28px"
              variant="rectangular"
              width="100%"
            />
          )}
        </Toolbar>

        {items.map(({ mainTitle, routes }, idx: number) => {
          return (
            <div key={Number(idx)}>
              <Box
                sx={{
                  padding:
                    Number(idx) === 0 ? '16px 16px 0 16px' : '24px 16px 0 16px',
                }}
              >
                {isReady ? (
                  <Typography
                    component="h6"
                    fontSize={18}
                    fontWeight={900}
                    variant="h6"
                  >
                    {mainTitle}
                  </Typography>
                ) : (
                  <Skeleton
                    animation="wave"
                    height="28px"
                    variant="rectangular"
                    width="50%"
                  />
                )}
              </Box>
              {routes.map(({ icon, path, subItems, text }, index) => {
                return (
                  <ListItem
                    // eslint-disable-next-line react/no-array-index-key
                    key={Number(index)}
                    icon={icon}
                    path={path}
                    subItems={subItems}
                    text={text}
                    onClick={onClickItem}
                  />
                );
              })}
            </div>
          );
        })}
      </StyledList>
    </StyledDrawer>
  );
};

export default memo(Nav);
