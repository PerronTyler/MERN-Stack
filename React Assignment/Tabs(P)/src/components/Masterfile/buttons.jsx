import React, { useState } from 'react'
import Tab1 from './functionalComponents/Tab1'
import Tab2 from './functionalComponents/Tab2'
import Tab3 from './functionalComponents/Tab3'

const tabs = ['Tab1','Tab2','Tab3']

const Buttons = (props) => {
    const [active, setActive] = useState('')
    console.log(active);
    

const activateTab = (e) => {
        setActive(e.target.name)
    }
let activeDisplay = ''
if (active === tabs[2]){
    activeDisplay = <Tab3/>
}else if (active === tabs[1]){
    activeDisplay = <Tab2/>
} else if (active === tabs[0]) {
    activeDisplay = <Tab1/>
}
return (
    <>
        <div>
            {tabs.map(tab => (
                <button
                key={ tab }
                name={ tab }
                onClick={activateTab}
                > 
                { tab }
                </button>
            ))}
            
        </div>
                { activeDisplay }
    </>
)
}

export default Buttons