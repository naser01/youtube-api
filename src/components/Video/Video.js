import React from 'react';

const video = (props) => {
    return(
        <div>
            <iframe 
                style={{width:"560px", height:"315px"}} 
                src={`https://www.youtube.com/embed/${props.link}`}></iframe>
        </div>
    );
}

export default video;