import React, {Component} from 'react'; 
import '../styles/collage.css';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Mamposteria } from '../data/imagenes.json';

// ICONS
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Dribble     from '../img/dribbble.png';

const useStyles = makeStyles((theme) => ({
    buttonpanel: {
        color: '#FC758C',
        background: 'white'
    },
    buttonpanelFooter: {
        
        backgroundColor: '#FE667F',
        color: 'white',
        '&:hover': {
            color: '#707070',
            background: 'white',
        },
    },
    buttonIcon:{
        color:'#C3D0D8'
    }
  }));

function Collage() {
//export default  class Collage extends Component {

    const classes = useStyles();  

        return(
            <div className="div_1">
                <div className="div_icons">
                    <br/><br/>
                    <br/><br/>
                    <p className="iconText" >

                    <Button>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            width="16" height="16" fill="currentColor"
                            className="bi bi-border-all icon_college" viewBox="0 0 16 16">
                            <path d="M0 0h16v16H0V0zm1 1v6.5h6.5V1H1zm7.5 0v6.5H15V1H8.5zM15 8.5H8.5V15H15V8.5zM7.5 15V8.5H1V15h6.5z"/>
                        </svg>
                    </Button>
                    <Button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-hdd-stack-fill icon_college_2" viewBox="0 0 16 16">
                            <path d="M2 9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"/>
                        </svg>
                    </Button>
                    </p>
                <div className="buttons_div">
                    <Button className={classes.buttonspanel2} >
                        All
                    </Button>
                    <Button className={classes.buttonspanel2} >
                        Branding
                    </Button>
                    <Button className={classes.buttonspanel2} >
                        Web
                    </Button>
                    <Button className={classes.buttonspanel2} >
                        Photography
                    </Button>
                    <Button className={classes.buttonspanel2} >
                    App
                    </Button>
                </div>
                </div>
                <div className="divGaleria" >

                    <section id="galeria">
                            <div className="ArtAlone" >
                                <div className="divArticle" >
                                    <br/><br/>
                                    <br/><br/>
                                    CREATIVE LOGO <br />
                                    __________________________ <br /><br />
                                    Branding
                                </div> 
                            </div> 
                        {   
                         
                            Mamposteria.map((Data,T) => ( 
                                <article className="Articulos" >
                                    <figure className="figureArticle" >
                                        <img  src={Data.IMG} className="img_collage" />  
                                    </figure> 
                                </article> 
                                )
                            )
                        }   
                    </section>
                </div>
                <div className="FooterGalery"><br />
                    <Button className={classes.buttonpanelFooter} variant="contained"  >
                        Show Me More
                    </Button>
                    <br /><br />
                    <br /><br />
                    <p className="textCopy" >
                        © 2021 - Sneak All Right Reserved
                        <br /><br />
                    
                    <Button className={classes.buttonIcon} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg>
                    </Button>
                    <Button className={classes.buttonIcon} >
                        <TwitterIcon/>
                    </Button>
                    <Button className={classes.buttonIcon} >
                         <img src={Dribble} className="App-logo" alt="logo" />
                    </Button>
                    <Button className={classes.buttonIcon} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                         <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                        </svg>
                    </Button>
                    <Button className={classes.buttonIcon} >
                        <YouTubeIcon/>
                    </Button>
                    <br /><br />
                    <br /><br />
                    <br /><br />
                        
                    </p>
                </div>
            </div>
        )
  
}
export default Collage
