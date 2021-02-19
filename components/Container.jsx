import React from 'react';

function Container({children, className, noVertical, wide}) {
    return (
        <div className={`${wide ? 'w-5/6 lg:w-3/4' : 'w-5/6 lg:w-2/3'} mx-auto flex flex-col justify-center items-center ${!noVertical ? 'py-32' : ''} ${className}`}>
            {children}
        </div>
    );
}

export default Container;