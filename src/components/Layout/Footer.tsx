import { Box, Skeleton, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { memo, useMemo } from 'react';

import type { FooterProps } from '@/types/layout';

const Footer = ({ businessName, children }: FooterProps) => {
  const { isReady } = useRouter();

  const $businessName = useMemo(
    () => (businessName ? ` ${businessName}` : ''),
    [businessName]
  );

  return (
    <Box
      component="footer"
      overflow="auto"
      px={3}
      sx={{
        background: 'white',
        borderTop: '0.5px solid #000000CC',
        boxShadow: 'none',
      }}
    >
      {children}
      <Box component="div" my={1.5}>
        {isReady ? (
          <Typography component="p">
            © 2022{$businessName}. All rights reserved.
          </Typography>
        ) : (
          <Skeleton
            animation="wave"
            height="20px"
            variant="rectangular"
            width="60%"
          />
        )}
      </Box>
    </Box>
  );
};

export default memo(Footer);
