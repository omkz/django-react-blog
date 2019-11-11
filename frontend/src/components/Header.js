import {Link, withRouter} from 'react-router-dom';
import React from 'react';

class Header extends React.Component {
    
   constructor(props) {
        super(props);
    }
    render() {
        let menuItems;
        // console.log(this.props.currentUser);
        if (this.props.currentUser) {
            menuItems = [
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                           data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-start">
                            <Link to="/" className="navbar-item">Home</Link>
                            <Link to="/mypost" className="navbar-item">My Post</Link>
                            <Link to="/createpost" className="navbar-item">Create Post</Link>
                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <Link to="/login" className="button is-primary">Logout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            ];
        } else {
            menuItems = [
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                           data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-start">
                            <Link to="/" className="navbar-item">Home</Link>
                            <Link to="/mypost" className="navbar-item">My Post</Link>
                            <Link to="/createpost" className="navbar-item">Create Post</Link>
                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <Link to="/signup" className="button is-primary">Sign Up</Link>
                                    <Link to="/login" className="button is-light">Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>];
        }

        return (
            <div>
                {menuItems}
            </div>
        )
    }
}

export default withRouter(Header);