import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Collapse,
  List,
  ListItemButton as MuiListItemButton,
  ListItemIcon,
  ListItemText,
  Skeleton,
  styled,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import type { ListItemButtonProps, ListItemProps } from '@/types/layout';

const StyledMuiListItemButton = styled(MuiListItemButton)(({ theme }) => ({
  '& .MuiSvgIcon-root': {
    fontSize: '1.2rem',
  },
  '& .css-10hburv-MuiTypography-root': {
    fontSize: '14px',
  },
  '&.Mui-selected': {
    backgroundColor: theme.palette.primary.main,
  },
  '&:hover': {
    backgroundColor: `${theme.palette.primary.main}b5`,
  },
}));

const CollapseIcon = ({ open }: { open: boolean }) => {
  return open ? <ExpandLessIcon /> : <ExpandMoreIcon />;
};

const ListItemButton = ({
  icon,
  onClick,
  open,
  path,
  sx,
  text,
}: ListItemButtonProps) => {
  const { isReady, pathname } = useRouter();

  const handleClick = useCallback(() => {
    onClick(path);
  }, [path, onClick]);

  return (
    <StyledMuiListItemButton
      selected={pathname !== '/' && path.includes(pathname)}
      sx={sx}
      onClick={handleClick}
    >
      {isReady ? (
        <ListItemIcon>{icon}</ListItemIcon>
      ) : (
        <Skeleton
          animation="wave"
          height="20px"
          variant="circular"
          width="20px"
        />
      )}
      {isReady ? (
        <>
          <ListItemText primary={text} />
          {typeof open === 'boolean' && <CollapseIcon open={open} />}
        </>
      ) : (
        <Skeleton
          animation="wave"
          height="20px"
          sx={{ ml: '16px' }}
          variant="rectangular"
          width="100%"
        />
      )}
    </StyledMuiListItemButton>
  );
};

const SX = { pl: 4 };

const ListItem = ({
  icon,
  onClick = () => {},
  path,
  subItems,
  sx,
  text,
}: ListItemProps) => {
  const { isReady, pathname } = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isReady && pathname.includes(path)) {
      setOpen(true);
    }
  }, [isReady, path, pathname]);

  const onToggle = useCallback(() => {
    setOpen((state) => !state);
  }, []);

  const handleClick = subItems ? onToggle : onClick;

  return (
    <>
      <ListItemButton
        icon={icon}
        open={subItems ? open : undefined}
        path={path}
        sx={sx}
        text={text}
        onClick={handleClick}
      />
      {subItems && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {subItems.map(
              ({ icon: subIcon, path, subItems, text: subText }, index) => (
                <ListItem
                  // eslint-disable-next-line react/no-array-index-key
                  key={Number(index)}
                  icon={subIcon}
                  path={path}
                  subItems={subItems}
                  sx={SX}
                  text={subText}
                  onClick={onClick}
                />
              )
            )}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default ListItem;
