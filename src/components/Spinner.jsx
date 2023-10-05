import React from "react";
import './Spinner.css'

export default function Spinner() {
    return (
        <div>
            <div className="lds-facebook">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
