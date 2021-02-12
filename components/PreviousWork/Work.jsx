import React from 'react';
import Image from 'next/image'

function Work({title, time, thumbnail}) {
    return (
        <div className="grid grid-cols-2 py-10 my-10">
            <div className="flex flex-col justify-center">
                <h2 className="text-5xl pb-4">{title}</h2>
                <p className="text-xl text-black-muted">{time}</p>
            </div>
            <div className="work-thumbnail rounded-xl"
                style={{
                    backgroundImage: `url(${thumbnail.url})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    paddingTop: '56.25%'
                }}
            />
        </div>
    );
}

export default Work;