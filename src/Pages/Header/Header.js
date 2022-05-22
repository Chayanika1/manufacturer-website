import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../Images/Icon.jpg';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-dark bg-primary navbar-expand-lg  ">
                <div class="container-fluid">

                    <img style={{ height: '50px', width: '50px', borderRadius: '100%' }} src={Icon} alt="" />




                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/Home">Home</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/Register">Register</Link>
                                
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/Login">Login</Link>
                                
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;