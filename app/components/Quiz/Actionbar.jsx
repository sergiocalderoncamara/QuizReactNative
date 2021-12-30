import React, { useContext } from "react";
import { LangContext } from '../GameScreen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faForward, faRedo ,faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default function Actionbar(props) {

    const lang = useContext(LangContext);

    return (
        <>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary" onClick={props.previous} disabled={props.previousDisabled}>
                    <FontAwesomeIcon icon={faBackward} />
                    {lang.dictionary['previous']}
                </button>
                <button type="button" className="btn btn-primary" onClick={props.next} disabled={props.nextDisabled}>
                    {lang.dictionary['next']}
                    <FontAwesomeIcon icon={faForward} />
                </button>
                <button type="button" className="btn btn-primary" onClick={props.gameDownload2}>
                    {lang.dictionary['reset']}
                    <FontAwesomeIcon icon={faRedo} />
                </button>
                <button type="button" className="btn btn-danger" onClick={props.pista}>
                    {lang.dictionary['clue']}: ({props.contadorPistas})
                </button>
                <button type="button" className="btn btn-success" onClick={props.comprobar}>
                    {lang.dictionary["submit"]}
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>
            </div>
        </>
    );
}