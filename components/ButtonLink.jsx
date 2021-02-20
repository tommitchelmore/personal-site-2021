import React from 'react';
import {FiExternalLink as Icon} from 'react-icons/fi'

function ButtonLink(props) {
    return <a className="mx-2 px-4 py-2 rounded-xl border border-white text-white flex items-center" {...props}>{props.children} <Icon className="w-6 h-6 ml-2" /></a>
}

export default ButtonLink;