import React from 'react';

const MessageDiv = (props) => {

    const color = {color: props.color}

    return (
        <div>

            <div style={color}>{props.innerText}</div>
        </div>
    );
};

export default MessageDiv;