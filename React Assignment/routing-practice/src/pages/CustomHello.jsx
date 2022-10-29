import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'

const CustomHello = () => {
    const { anyWord, anyColor, anyBackground } = useParams();
    const styling = {
        backgroundColor: anyBackground,
        color: anyColor
    }
    return (
        <div> 
            <p style={styling}>
                {anyWord}
            </p>    
        </div>
    )
}

export default CustomHello