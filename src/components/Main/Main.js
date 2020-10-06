import React from 'react';
import { Button } from '@material-ui/core';
import "./Main.css";
import illustration1 from "../../assets/Illustration1.svg";
import illustration2 from "../../assets/Illustration2.svg"


function MainFirst({
    reverse,
    isButton,
    headline,
    description,
    buttonLabel
}) {
    return (
        <div className="info">
            <div className={reverse ? "info-container_reverse" : "info-container"} >
                <div className="text-wrapper">
                    <div className="info-top">
                        <b >{headline}</b>
                    </div>
                    <div className="info-text">
                        <p>{description}</p>
                    </div>
                    {isButton ? <div className="info-btn">
                        <Button variant="contained" color="primary" size="large">
                            {buttonLabel}
                        </Button>
                    </div> : null}

                </div>
                <div>
                    {reverse ? <img src={illustration2} className="info-img-reverse" alt="" /> : <img src={illustration1} className="info-img" alt="" />}

                </div>
            </div>
        </div>
    )
}

export default MainFirst
