import React, {useContext} from "react";
import { LangContext } from '../GameScreen';

export default function Question (props) {

    const lang = useContext(LangContext);

    return (
        <>
            <h3 className="display-3">{lang.dictionary["question"]} {props.number + 1}</h3>
            {props.question}
        </>
    );
}