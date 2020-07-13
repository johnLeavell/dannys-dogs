import React from 'react'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import { Route, Switch, Link } from 'react-router-dom';

import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import Footer from '../components/Footer';

const Navigation = () => {
    return (
        <>
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Dannys Dog Walkers</Navbar.Brand>
             </Container>
            <Nav className="mr-auto">
                <Link to='/' className='nav-link'>Home</Link>
                <Link to='/about' className='nav-link'>About</Link>
                <Link to='/contact' className='nav-link'>Contact</Link>
            </Nav>
        </Navbar>
        <div>
            <Switch>
            <Route exact path={'/'} component={HomePage} />
            <Route path='/about' component={AboutPage}/>
            <Route path='/contact' component={ContactPage}/>
            </Switch>
            <Footer />
        </div>
      </>
    )
}

export default Navigation
