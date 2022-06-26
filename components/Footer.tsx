import { Container, Grid, Typography } from '@mui/material';

function Footer() {
  return (
    <Container
      component={'footer'}
      maxWidth={false}
      sx={{
        width: 1,
        bgcolor: 'background.paper',
      }}
    >
      <Grid
        container
        py={3}
        height={1}
        justifyContent={'space-between'}
        alignContent={'space-between'}
        gap={4}
      >
        <Grid item>
          <Typography
            variant={'body1'}
            color={'text.secondary'}
            lang={'en'}
            className={'external-link'}
          >
            AiRini
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          textAlign={{
            xs: 'left',
            sm: 'right',
          }}
        >
          <Typography
            component={'a'}
            href={'mailto:ab@airini.dev'}
            variant={'button'}
            color={'text.secondary'}
            lang={'en'}
            className={'external-link'}
            fontSize={'1.25rem'}
          >
            Email
          </Typography>
          <br />
          <Typography
            component={'a'}
            href={'https://github.com/ygnaiih1680'}
            target={'_blank'}
            rel="noreferrer"
            variant={'button'}
            lang={'en'}
            className={'external-link'}
            color={'text.secondary'}
            fontSize={'1.25rem'}
          >
            Github
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={'body1'} color={'text.secondary'} lang={'en'}>
            &copy; 2021. AiRini. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;
