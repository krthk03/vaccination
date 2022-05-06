import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul className='nav nav-tabs justify-content-center bg-dark'>
                    <li className='nav-item'>
                        <NavLink to="/home" className='nav-link font-weight-bold bg-dark text-white'>Home</NavLink>
                    </li>
                    {/* <li className='nav-item'>
                        <NavLink activeClassName='active' to="/patients" className='nav-link font-weight-bold'>Add Patients</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink activeClassName='active' to="/administerPatients" className='nav-link font-weight-bold'>Administer Patients</NavLink>
                    </li> */}
                </ul>
            </nav>
        </header>
    )
}

export default Header;