import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'

const NumID = () => {
    const { NumID } = useParams();
    return (
        <div>Your number is {NumID}</div>
    )
}

export default NumID