import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function FontAwesoneIcons(props){
    return (
        <>
            <FontAwesomeIcon className="socialIcons" icon={props.iconname} />
        </>
    )
}


export default FontAwesoneIcons

