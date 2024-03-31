import React from "react";
import style from "./Card.module.css";

function Card({title, logo, description, image, color}) {
    return (
        <div className={`${style.container}`} style={{backgroundColor: color}}>
            <div className={`${style.container_l}`}>
                <div className={`${style.logo_container}`}><img src={logo} className={`${style.logo}`}/></div>
                <div className={`${style.title_container}`}>{title}</div>
                <hr className={`${style.divider}`}/>
                <div className={`${style.description}`}>{description}</div>
            </div>

            <div className={`${style.container_r}`}>
                <div className={`${style.image_wrapper}`}>
                    <img src={image} className={`${style.image}`}/>
                </div>
                
            </div>
        </div>
    );
    

};

export default Card;