import React from 'react';
import './navbar.css'

const navbar = () => {
    return (
        <div className="nomargin">
            <nav className="navbar navbar-expand-md bg-light navbar-light fullnav">

                    <a className="navbar-brand heading" href="#">AppsStore.Ai</a>

                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#"><span class="glyphicon glyphicon-th"></span>My Apps</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><span class="glyphicon glyphicon-camera"></span>My Camera</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"> <span class="glyphicon glyphicon-paperclip"></span>Ai Reports</a>
                        </li>
                        <li className="nav-item pushitlast">
                            <a className="nav-link" href="#"><span class="glyphicon glyphicon-modal-window"></span>Marketplace</a>
                        </li>

                        
                        </ul>

                        <ul className="navbar-nav  navbar-right"> 
                        <li className="nav-item dropdown  justify-content-end">
                            <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            <span class="glyphicon glyphicon-education"></span>Thanigaivel J
                               
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Link 1</a>
                                <a className="dropdown-item" href="#">Link 2</a>
                                <a className="dropdown-item" href="#">Link 3</a>
                            </div>
                            </li>

                        </ul>
                    </div>
                    </nav>
        </div>
    );
}

export default navbar;
