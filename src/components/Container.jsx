import React from 'react';

const Container = ({ children, margin, padding, width, maxWidth, color,backgroundColor, ...rest }) => {
    const containerStyles = {
        margin: margin || '0 auto',
        padding: padding || 0,
        width: width || '100%',
        maxWidth: maxWidth || '61rem',
        color: color || '#495e57',
        backgroundColor: backgroundColor || 'white',

    };

    return (
        <div style={ containerStyles } { ...rest }>
            { children }
        </div>
    );
};

export default Container;
