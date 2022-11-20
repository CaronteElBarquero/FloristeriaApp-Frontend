
import { useNavigate } from 'react-router-dom';

import { AppBar, Box, Fab, Fade, IconButton, Typography, Toolbar, Switch, useScrollTrigger } from '@mui/material';

import { AccountCircle, KeyboardArrowUp } from '@mui/icons-material';

import PropTypes from 'prop-types';





function ScrollTop ( props ) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 20, right: 20 }}

      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};



export const NavBar = ( props ) => {

  const navigate = useNavigate();


  const toLogin = () => {
    navigate('/auth/login');
  };



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          {/* <img src="http://localhost:3000/src/ui/data/NolyLogo.png" alt="Logo" border="0" width="50" height="50" /> */}

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 1 }}>
            NolyGifts
          </Typography>
          
          <div>
            <IconButton
            size="large"
            onClick={ toLogin }
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          </div>

        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />

      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top" color='primary' >
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>

    </Box>
  );
}
