import React from 'react'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import PhoneIcon from '@material-ui/icons/Phone';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};


function Header(props) {

    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className="nav" color="inherit">
          <Toolbar>
            <Typography className={classes.root}>
            <Link className="p-5" href="#" onClick={preventDefault} color="inherit">
                PRICING
            </Link>
            <Link className="p-5" href="#" onClick={preventDefault} color="inherit">
                BLOG
            </Link>
            <Link className="p-5" href="#" onClick={preventDefault} color="inherit">
                FAQS
            </Link>
            <img className="logo img-fluid" src="https://img.fooddarzee.com/eyJidWNrZXQiOiJmb29kZGFyemVlLWltYWdlcyIsImtleSI6ImhlYWRlclwvbG9nby5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjE1MSwiaGVpZ2h0IjoxNTEsImZpdCI6ImNvdmVyIn19fQ==" />
            <Link className="text-right" href="#" onClick={preventDefault} color="inherit">
                <span className="p-5"><PhoneIcon />+91 9590510520</span> 
                <button className="btn btn-danger">GET STARTED</button>
            </Link>
            </Typography>
         </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container>
      </Container>
    </React.Fragment>
  );
}

export default Header
