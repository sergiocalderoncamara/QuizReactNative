import React from "react";


export default function Timer(props) {

    return (
        <>
            {props.horas.toString().padStart(2, '0')}:{props.minutos.toString().padStart(2, '0')}:{props.segundos.toString().padStart(2, '0')}
        </>
    );
}