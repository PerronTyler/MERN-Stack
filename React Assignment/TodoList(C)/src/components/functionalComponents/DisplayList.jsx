import React, { useState } from 'react'

const DisplayList = (props) => {

    const deleteTask = (e) => {
        props.deleteTask(e)
    }
    const toggleTask = (e) => {
        props.toggleTask(e)
    }
    return (
        <div>
            <div>
                <p className={props.completed.toString()}> {props.task} </p>
            </div>
            <div>
                <input type="checkbox" onChange={() => toggleTask(props.indx)} name="complete" />
            </div>
            <div>
                <button onClick={() => deleteTask(props.indx)}>Delete</button>
            </div>
        </div>
    )
}

export default DisplayList