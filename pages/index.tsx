import { Container, Grid, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
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
          <Grid item height={'100vh'}>
            <Grid
              container
              alignItems={'center'}
              justifyContent={'center'}
              direction={'column'}
              height={1}
            >
              <Grid item className={'selectable__none'}>
                <Image
                  src={'/images/profile.jpg'}
                  priority
                  width={128}
                  height={128}
                  alt={'AiRini profile'}
                  css={{
                    borderRadius: '50%',
                    aspectRatio: '1',
                  }}
                />
              </Grid>
              <Grid item>
                <Typography variant={'h1'} lang={'en'} align={'center'}>
                  AiRini
                </Typography>
                <Typography variant={'subtitle1'} lang={'en'} align={'center'}>
                  Front-end web developer
                </Typography>
              </Grid>
              <Grid item mt={4}>
                <Lottie
                  animationData={scrollAnimation[theme.palette.mode]}
                  loop
                  play
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default Home;
