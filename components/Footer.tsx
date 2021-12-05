import { Container, Grid, Typography } from '@mui/material';

function Footer() {
  return (
    <Container
      component={'footer'}
      maxWidth={false}
      sx={{
        width: 1,
        height: '30vmin',
        bgcolor: 'background.paper',
      }}
    >
      <Grid
        container
        py={3}
        height={1}
        justifyContent={'space-between'}
        alignContent={'space-between'}
      >
        <Grid item>
          <Typography
            component={'a'}
            href={'mailto:ab@airini.dev'}
            variant={'body1'}
            color={'text.secondary'}
            lang={'en'}
            className={'external-link'}
          >
            ab@airini.dev
          </Typography>
        </Grid>
        <Grid
          item
          textAlign={{
            xs: 'left',
            sm: 'left',
            md: 'right',
          }}
        >
          <Typography
            component={'a'}
            href={'https://github.com/ygnaiih1680'}
            target={'_blank'}
            rel="noreferrer"
            variant={'body1'}
            lang={'en'}
            className={'external-link'}
            color={'text.secondary'}
          >
            Github
          </Typography>
          <br />
          <Typography
            component={'a'}
            href={'https://www.rocketpunch.com/@tjdwp1999'}
            target={'_blank'}
            rel="noreferrer"
            variant={'body1'}
            lang={'en'}
            className={'external-link'}
            color={'text.secondary'}
          >
            RocketPunch
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={'body1'} color={'text.secondary'} lang={'en'}>
            &copy; 2021. AiRini. All rights reserved.
          </Typography>
          <Typography variant={'body1'} color={'text.secondary'} lang={'en'}>
            Profile image &copy; 2020.{' '}
            <a
              href={'https://www.pixiv.net/users/6657532'}
              target={'_blank'}
              rel="noreferrer"
            >
              <Typography
                variant={'body1'}
                color={'text.secondary'}
                component={'span'}
                lang={'en'}
                className={'external-link'}
              >
                QuAn_.
              </Typography>
            </a>{' '}
            All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;
