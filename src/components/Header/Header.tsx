import logo from "../../assets/LOGO.png"
import './Header.css'
import {Box, Button, SwipeableDrawer} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react";

import {deepPurple} from '@mui/material/colors';


const Header = () => {
    const [state, setState] = useState(false)


    return (
        <header id="header">
            <div className="container">
                <nav className="HeaderNav">
                    <div className="headerLogo">
                        <a href="/"><img src={logo} alt="Logotype"/></a>
                    </div>
                    <div className="headerMenu1">
                        <a href="/" className="menuLink">home</a>
                        <a className="menuLink" href="/missions">missions</a>
                        <div className="headerLogin">
                            <button className="login">login</button>
                            <button className="signup">Sign up</button>
                        </div>
                    </div>

                    <div className="hamburgerMenu">
                        <Button onClick={() => setState(true)}>
                            <MenuIcon sx={{ color: deepPurple['A700'] }} fontSize="large"/>
                        </Button>
                        <SwipeableDrawer
                            anchor={'right'}
                            open={state}
                            onClose={() => setState(false)}
                            onOpen={() => setState(true)}

                        >
                            <Box
                                sx={{ width: 250}}
                                role="presentation"
                                onClick={() => setState(false)}
                            >
                                <div className="headerMenu2">
                                    <a href="/" className="menuLink">home</a>
                                    <a className="menuLink" href="/missions">missions</a>
                                    <div className="headerLogin">
                                        <button className="login">login</button>
                                        <button className="signup">Sign up</button>
                                    </div>
                                </div>
                            </Box>
                        </SwipeableDrawer>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;