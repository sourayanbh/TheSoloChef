import React from 'react'
import { Fragment } from 'react'

function Button(props){

    return(
        <Fragment>
        <button onClick={props.goTo} className="searchButton">{props.buttonName}</button>
        </Fragment>

    )
}

export default Button