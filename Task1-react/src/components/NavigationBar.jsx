

import { NavLink } from"react-router-dom";
import {Navbar, Nav} from 'react-bootstrap';
function NavigationBar(){

return(
<Navbar bg='primary' expand="lg">
    <Navbar.Brand href='/'>Welcome to the Post Page</Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav'/>
    <Navbar.Collapse id='basic-navbar-nav'>
    <Nav className = 'mr-auto'>

    <Nav.Link as={NavLink} to="/"activeclassname="active">
      Home
      </Nav.Link>

    <Nav.Link as={NavLink} to="/addPost" activeclassname="active">
        Add Post
        </Nav.Link>

        <Nav.Link as={NavLink} to="/viewPost" activeclassname="active">
        View Post
        </Nav.Link>

        <Nav.Link as={NavLink} to="/editPost" activeclassname="active">
        Edit Post
        </Nav.Link>

        <Nav.Link as={NavLink} to="/deletePost" activeclassname="active">
        Delete Post
        </Nav.Link>

     </Nav>
        </Navbar.Collapse>
    </Navbar>

  );
}
export default NavigationBar;