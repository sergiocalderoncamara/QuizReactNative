import React, { useContext } from "react";
import { LangContext } from "../GameScreen";

export default function Answer(props) {

    const lang = useContext(LangContext);

    const handleInputChange = (event) => {
        props.resultado(event.target.value);
    }

    return (
        <>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">{lang.dictionary["answer"]}</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="respuesta" value={props.input} onChange={handleInputChange}/>
            </div>
        </>
    );
}