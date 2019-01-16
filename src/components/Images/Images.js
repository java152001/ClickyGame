import React from "react";
import "./Images.css";

const Images = props => (
    <div className = "card">
        <div className = "img-container">
            <img className = "img-responsive" src = {props.image} alt = {props.name} onClick={() => props.clickPicture(props.id)} />
        </div>
    </div>
);

export default Images;

