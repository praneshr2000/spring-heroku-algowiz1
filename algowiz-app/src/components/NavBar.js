import './css/NavBar.css';
import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';

export class NavBar extends React.Component {
    render() {
        // Render a nav component with link to home page for now
        return(  
            <Navbar id='nav' className='px-5'>
                <Nav.Item><Link to='/' id="navLogo">
                AlgoWiz
                </Link></Nav.Item>
            </Navbar>
        );
    }
}

export default NavBar;