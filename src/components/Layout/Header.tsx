import {
  Logout as LogoutIcon,
  Menu as MenuIcon,
  Star as StarIcon,
  StarBorder as StarBorderIcon,
} from '@mui/icons-material';
import {
  AppBar,
  Box,
  IconButton,
  Link as MuiLink,
  Menu,
  MenuItem,
  Skeleton,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import type { MouseEventHandler } from 'react';
import { memo, useCallback, useState } from 'react';

import type { HeaderProps, Link } from '@/types/layout';

const MD_SX = {
  display: {
    md: 'flex',
    xs: 'none',
  },
};

const XS_SX = {
  display: {
    md: 'none',
    xs: 'flex',
  },
};

const StyledHeader = styled(AppBar, {
  shouldForwardProp: () => true,
})({
  borderBottom: '0.5px solid #000000CC',
  boxShadow: 'none',
});

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  padding: '0 12px',
  [theme.breakpoints.up('md')]: {
    padding: '0 12px 0 24px',
  },
}));

const Header = ({ title, pages = [], onOpen }: HeaderProps) => {
  const { isReady } = useRouter();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const testSite = pages.filter((page) => page.path.includes('test'));
  const operationSite = pages.filter((page) => !page.path.includes('test'));

  const onCloseMenu = useCallback<MouseEventHandler<HTMLLIElement>>(() => {
    setAnchorEl(null);
  }, []);

  const onOpenMenu = useCallback<MouseEventHandler<HTMLButtonElement>>((e) => {
    setAnchorEl(e.currentTarget);
  }, []);

  const renderPages = (filterPages: Link[], title: '운영' | '테스트') => (
    <div>
      <Typography
        color="primary"
        fontSize={16}
        fontWeight={600}
        padding="6px 16px"
        textAlign="left"
      >
        {title}
      </Typography>
      {filterPages.map(({ path, text }, index) => {
        return (
          <MuiLink
            key={Number(index)}
            color="inherit"
            href={path}
            underline="none"
          >
            <MenuItem onClick={onCloseMenu}>
              <Typography fontSize={14} textAlign="center">
                {text}
              </Typography>
            </MenuItem>
          </MuiLink>
        );
      })}
    </div>
  );

  return (
    <StyledHeader color="inherit" position="static">
      <StyledToolbar
        // sx={{ padding: '0 12px 0 24px' }}
        variant="dense"
        disableGutters
      >
        {/* md: title */}
        <Box flexGrow={1} sx={{ ...MD_SX, mr: 2 }}>
          {isReady ? (
            <Typography component="div" fontSize={18} variant="h6" noWrap>
              {title}
            </Typography>
          ) : (
            <Skeleton animation="wave" variant="rectangular" width="30%" />
          )}
        </Box>

        {/* xs: left nav */}
        <Box flexGrow={1} sx={XS_SX}>
          {isReady ? (
            <IconButton
              color="inherit"
              id="left-header-button"
              size="large"
              onClick={onOpen}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Skeleton
              animation="wave"
              height="20px"
              variant="circular"
              width="20px"
            />
          )}
        </Box>

        {/* xs: title */}
        <Box flexGrow={1} sx={XS_SX}>
          {isReady ? (
            <Typography component="div" variant="h6" noWrap>
              {title}
            </Typography>
          ) : (
            <Skeleton animation="wave" variant="rectangular" width="30%" />
          )}
        </Box>

        {/* xs: right nav */}
        <Box flexGrow={0} sx={{ display: 'flex' }}>
          {isReady ? (
            <IconButton
              color="inherit"
              id="right-header-button"
              size="large"
              onClick={onOpenMenu}
            >
              {anchorEl?.id === 'right-header-button' ? (
                <StarIcon />
              ) : (
                <StarBorderIcon />
              )}
            </IconButton>
          ) : (
            <Skeleton
              animation="wave"
              height="20px"
              sx={{ margin: '12px' }}
              variant="circular"
              width="20px"
            />
          )}

          {isReady ? (
            <IconButton color="inherit" size="large">
              <LogoutIcon />
            </IconButton>
          ) : (
            <Skeleton
              animation="wave"
              height="20px"
              sx={{ margin: '12px' }}
              variant="circular"
              width="20px"
            />
          )}

          <Menu
            anchorEl={anchorEl}
            open={anchorEl?.id === 'right-header-button'}
            sx={{ display: 'flex' }}
            keepMounted
            onClose={onCloseMenu}
          >
            {testSite.length > 0 && renderPages(testSite, '테스트')}
            {operationSite.length > 0 && renderPages(operationSite, '운영')}
          </Menu>
        </Box>
      </StyledToolbar>
    </StyledHeader>
  );
};

export default memo(Header);
