import { Container, Grid, Typography, useTheme } from '@mui/material';
import Lottie from 'react-lottie-player';

import Layout from '../components/Layout';

import darkScroll from '../public/lotties/dark-scroll.json';
import lightScroll from '../public/lotties/light-scroll.json';

const scrollAnimation = {
  light: lightScroll,
  dark: darkScroll,
};

function Home() {
  const theme = useTheme();

  return (
    <Layout>
      <Container>
        <Grid container alignItems={'center'} justifyContent={'center'} gap={4}>
          <Grid
            item
            xs={12}
            sx={{
              height: '100vh',
              position: 'relative',
            }}
          >
            <Grid
              container
              alignItems={'center'}
              alignContent={'center'}
              justifyContent={'center'}
              height={1}
              gap={4}
              sx={{
                flexDirection: {
                  xs: 'column',
                  sm: 'row',
                },
              }}
            >
              <Grid item>
                <Typography
                  variant={'h1'}
                  lang={'en'}
                  sx={{
                    textAlign: {
                      xs: 'center',
                      sm: 'left',
                    },
                  }}
                >
                  AiRini
                </Typography>
                <Typography
                  variant={'body1'}
                  sx={{
                    textAlign: {
                      xs: 'center',
                      sm: 'left',
                    },
                  }}
                >
                  Web Front-end developer
                </Typography>
              </Grid>
            </Grid>
            <Lottie
              animationData={scrollAnimation[theme.palette.mode]}
              loop
              play
              css={{
                width: 'auto',
                height: 48,
                position: 'absolute',
                left: '50%',
                bottom: '10vh',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </Grid>
          <Grid xs={12} item height={'50vh'}>
            <Typography variant={'h2'} lang={'en'} align={'center'}>
              COMING SOON!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default Home;
