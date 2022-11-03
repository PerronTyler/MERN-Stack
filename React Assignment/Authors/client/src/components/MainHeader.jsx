import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const MainHeader = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>
                            Authors
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </header>
    )
}

export default MainHeader