import { Box, Grid, Typography } from '@mui/material';
import Layout from '../components/Layout';

function Home() {
  return (
    <Layout>
      <Typography variant="h1" lang={'en'} align={'center'}>
        Hello World
      </Typography>
      <Grid container spacing={1} justifyContent={'center'}>
        <Grid item xs={4}>
          <Box
            sx={{
              bgcolor: 'primary.light',
              width: 1,
              height: 1,
              borderRadius: 1,
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              bgcolor: 'primary.main',
              width: 1,
              height: 1,
              borderRadius: 1,
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              bgcolor: 'primary.dark',
              width: 1,
              height: 200,
              borderRadius: 1,
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              bgcolor: 'secondary.light',
              width: 1,
              height: 200,
              borderRadius: 1,
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              bgcolor: 'secondary.main',
              width: 1,
              height: 1,
              borderRadius: 1,
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              bgcolor: 'secondary.dark',
              width: 1,
              height: 1,
              borderRadius: 1,
            }}
          />
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Home;
