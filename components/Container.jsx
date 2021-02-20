import React from 'react';

function Container({children, className, noVertical, wide, style}) {
    return (
        <div 
            className={`
                ${wide ? 'w-5/6 lg:w-3/4' : 'w-5/6 lg:w-2/3'}
                ${!noVertical ? 'py-32' : ''} ${className}
                mx-auto flex flex-col justify-center items-center
            `}
            style={style}
        >
            {children}
        </div>
    );
}

export default Container;