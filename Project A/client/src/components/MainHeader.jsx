import React from 'react'
import { Outlet} from 'react-router-dom'

const MainHeader = () => {
    return (
        <div>
            <div>
                <p>Your Health</p>
            </div>
            <div> 
                <p>YOU</p>
            </div>
            <div>
                <p>DECK 22/22</p>
            </div>
            <Outlet />
        </div>
    )
}

export default MainHeader