import React from 'react';

function Container({children, className}) {
    return (
        <div className={`w-5/6 lg:w-2/3 mx-auto py-32 flex flex-col justify-center items-center ${className}`}>
            {children}
        </div>
    );
}

export default Container;