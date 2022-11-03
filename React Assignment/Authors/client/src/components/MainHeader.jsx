import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const MainHeader = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink  to='/'>
                            Authors
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/authors/new'>
                            Create an Author
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </header>
    )
}

export default MainHeader