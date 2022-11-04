import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const MainHeader = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink  to='/'>
                            Players
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/players/new'>
                            Create a Player
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/status/1'>Manage Player Status </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </header>
    )
}

export default MainHeader