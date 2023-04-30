import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', heigth: '300px' }}>
        {props.children}
        </div>
    );
};

export default Scroll;