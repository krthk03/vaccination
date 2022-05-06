import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul className='nav nav-tabs'>
                    <li className='nav-item'>
                        <NavLink activeClassName='active' to="/home" className='nav-link font-weight-bold'>Home</NavLink>
                    </li>
                    {/* <li className='nav-item'>
                        <NavLink activeClassName='active' to="/patients" className='nav-link'>Add Patients</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink activeClassName='active' to="/administerPatients" className='nav-link'>Administer Patients</NavLink>
                    </li> */}
                </ul>
            </nav>
        </header>
    )
}

export default Header;