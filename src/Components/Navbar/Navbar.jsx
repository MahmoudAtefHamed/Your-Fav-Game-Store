

import {Link, NavLink} from "react-router-dom";
import './Navbar.css'
import { Fragment } from "react";
const Navbar = () => {


    // <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink>
    return(
        <Fragment>
            {/* Welcome Nav */}
            <nav className="navbar navbar2 navbar-light justify-content-between px-4">
                <span className="navbar-text">Welcome to Our store for your fav Games</span>
                <span className="navbar-text">
                    <i className="bi bi-telephone"></i> Call Us :   +20 1002160676
                </span>
                <div>
                    <Link  to={"/Wishlist"} className="nav-link d-inline-block">
                    <i className="fa fa-heart"></i> Wishlist
                    </Link>
                    <div className="dropdown d-inline-block">
                    <a className=" nav-link dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fa fa-user"></i> My Account
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {/* <li><a className="dropdown-item" href="#">Login</a></li> */}
                        {/* <li><a className="dropdown-item" href="#">Register</a></li> */}
                        <li><Link to={"/Login"} className="dropdown-item">Login</Link></li>
                        <li><Link to={"/Register"} className="dropdown-item">Register</Link></li>
                        <li><Link className="dropdown-item" onClick={(e)=>console.log(e.target)}>Log out</Link></li>
                    </ul>
                </div>
                    
                </div>
            </nav>



            {/* Main Navbar */}
            <nav className="navbar navbar3 navbar-expand-lg navbar-light bg-light mb-3">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" aria-current="page">YOUR FAV GAME STORE</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/About" className="nav-link" aria-current="page">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Contact" className="nav-link" aria-current="page">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Cart" className="nav-link" aria-current="page"> <i className="fa fa-duotone fa-solid fa-cart-shopping "></i></NavLink>
                            </li>
                           
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            {/* End of Main Navbar */}

        </Fragment>
        



    );


}

export default Navbar;