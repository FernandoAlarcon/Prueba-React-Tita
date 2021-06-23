import React from 'react'; 
import '../styles/panel.css';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    buttonpanel: {
        color: '#FC758C',
        background: 'white'
    },
  }));

function Panel() {
    const classes = useStyles();
  return (
    <div className="">
        <div className="container">
            <div className="info-panel">
                <h1 className="headline">EXPLORE BEYOND HORIZON</h1> 
                <p className="text">
                    Magna mundi referrentur quo, no rebum dignissim qui. 
                    Per quodsi accusata id, agam labores.
                </p> 
                <Button className={classes.buttonpanel} variant="contained"  >
                    VIEW OUR WORK
                </Button>
            </div>
        </div> 
    </div>
  );
}

export default Panel;

