import React from "react";
import './TaskCard.css'

const TaskCard = (props) => {

    return(
        <div className="contactcard">
        <ul className="ul">
        <li className="li">
            <div className="info">
                <div className="n">{props.contact.name}</div>
                <div className="em">{props.contact.description}</div>
            </div>
            <button className="dele" onClick={() => props.clickHandler(props.contact.id)}>Delete</button>
        </li>
        </ul>
        </div>
    );
}

export default TaskCard;