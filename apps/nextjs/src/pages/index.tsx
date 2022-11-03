import { Box, Button, Stack } from '@mui/material';

export default function Index() {
  return (
    <Box
      sx={{
        maxWidth: 300,
        margin: '30px auto 0 auto',
      }}
    >
      <Stack direction={'column'}>
        <Button type={'submit'} variant={'contained'} color={'primary'}>
          Click me
        </Button>
      </Stack>
    </Box>
  );
}
