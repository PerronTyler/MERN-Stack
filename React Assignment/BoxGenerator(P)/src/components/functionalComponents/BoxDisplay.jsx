import react, { useState } from 'react';


const BoxDisplay = (props) => {

    return (
            <div style= {{ backgroundColor: props.color, width: 50+'px', height: 50+'px', display: 'inline-block'}}>
            </div>
    );
};

export default BoxDisplay;

