import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'


const NavBar = (loggedInUser) => {
  return (
          <div className='center'>
           <Navbar bg="light" variant="light">
            <Navbar.Brand >Would You Rather</Navbar.Brand>
            <Nav className="mr-auto">
                <Link to="/">Home</Link>
    			&nbsp;
    			&nbsp;
                <Link to='/add'>New Question</Link>
                &nbsp;
    			&nbsp;
    			<Link to="/leaderboard">Leaderboard</Link>
            </Nav>
            <Nav>
           		<p>{'Hello '+ loggedInUser.loggedInUser.name +'!'}</p>
                &nbsp;
				&nbsp;
				<Link to="/logout">Logout</Link>
            </Nav>
         </Navbar>
        </div>
        )
}


export default NavBar