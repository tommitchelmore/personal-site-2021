import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

function Work({title, time, thumbnail, slug}) {
    return (
        <div className="work-item grid grid-cols-12 py-10 my-10">
            <div className="flex flex-col justify-center z-10 col-span-12 lg:col-span-4" style={{width: '180%'}}>
                <h2 className="text-5xl 2xl:text-7xl pb-4">{title}</h2>
                <p className="text-xl 2xl:text-2xl text-black-muted">{time}</p>
                <Link href={`work/${slug}`}><a>Temp link</a></Link>
            </div>
            <div className="work-thumbnail rounded-xl col-span-12 lg:col-span-8"
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