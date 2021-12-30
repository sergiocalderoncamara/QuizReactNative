import React, {useContext} from "react";
import { LangContext } from '../GameScreen';

export default function Author (props) {

    const lang = useContext(LangContext);

    return (
        <>
        {(() => {
                    if (!props.author || props.author == null) {
                        return(
                            <>
                            {lang.dictionary['unknown']}
                            <img src="notfound.jpg" className="author rounded-circle" alt="foto" /> 
                            </>
                        )
                    } else if (!props.author.username || props.author.username == null) {
                        return (
                            <>
                            {lang.dictionary['unknown']}
                            <img src={props.author.photo.url} className="author rounded-circle" alt={props.author.photo.filename} />
                            </>
                        )
                    } else {
                        return (
                            <>
                            {props.author.username}
                            <img src={props.author.photo.url} className="author rounded-circle" alt={props.author.photo.filename} />
                            </>
                        )
                    }
                })()}        
        </>
    );
}