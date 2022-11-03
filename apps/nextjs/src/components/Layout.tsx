import { FunctionComponent, PropsWithChildren } from 'react';
import { AppBar, Box, Button, Toolbar } from '@mui/material';
import Link from 'next/link';

export const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <Link href={'/'} passHref>
            <Button color={'inherit'}>Examples</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box padding={3}>{children}</Box>
    </Box>
  );
};
