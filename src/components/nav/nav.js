import React from 'react';
import "./nav.css";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: "90px",
    [theme.breakpoints.down('sm')]: {
      marginBottom: "140px"
    }
  },
  center: {
    marginLeft: 'auto',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: { 
     textAlign: 'center'
    }
  },
  right: {
    marginLeft: 'auto',
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: { 
     textAlign: 'center'
    }
  },
  game: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  github: {
      color: 'blue'
  }
});

function Nav(props) {

  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar className={props.highlight} position="fixed" color="inherit">
        <Toolbar>
          <Grid container>
            <Grid item xs={12} sm={3}>
              <Typography className={classes.game} variant="h5">
                <p>Clicky Click Game</p> 
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography className={classes.center} variant="h5">
                <p>Score: {props.score}</p>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography className={classes.right} variant="h5">
                <a className={classes.github} href="https://github.com/stevenguy/clickygame">
                  <p>Github Repo</p>
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);