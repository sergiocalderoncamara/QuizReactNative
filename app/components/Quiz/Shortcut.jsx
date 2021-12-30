import React from "react";


export default function Shortcut(props) {

    const numeroRespuesta = props.number;

    const seleccion = () => {
        props.indice(numeroRespuesta);
    }

    return (
        <>
            {(() => {
                if (props.contestado !== '') {
                    return (
                        <button type="button" className="btn btn-outline-warning" onClick={seleccion}>{props.number + 1}</button>
                    )
                } else {
                    return (
                        <button type="button" className="btn btn-outline-primary" onClick={seleccion}>{props.number + 1}</button>
                    )
                }
            })()}
        </>
    );
}