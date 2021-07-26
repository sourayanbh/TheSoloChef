import React from 'react'
import { Fragment } from 'react'


function HomePageButtons(props){


    return(
        <Fragment>
            <button onClick={props.redirectTo}><span className="buttonSpan"></span>{props.buttonName}</button>
        </Fragment>
    )
}

export default HomePageButtons