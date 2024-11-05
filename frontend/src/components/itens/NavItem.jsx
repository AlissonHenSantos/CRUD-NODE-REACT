import React from "react";
import './NavItem.css'


export default props => {
    return <a href={props.link} className={`navItem`}>
          <i className={props.icon ? `fa fa-${props.icon}` : ''}></i>  {props.nomeCaminho}
        </a>
}