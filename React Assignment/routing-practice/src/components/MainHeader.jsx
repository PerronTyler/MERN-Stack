import React from 'react'
import { NavLink } from 'react-router-dom'

const MainHeader = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/welcome'>
                            Welcome
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/4'>
                            4
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/hello'>
                            Hello
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/hello/blue/red'>
                            CustomHello
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader