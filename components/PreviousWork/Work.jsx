import React from 'react';
import Link from 'next/link';
import {IoArrowForwardCircleOutline} from 'react-icons/io5';

function Work({ title, time, thumbnail, slug }) {
    return (
        <div className="work-item grid grid-cols-12 py-10 my-10 overflow-x-hidden">
            <div
                className="work-text pointer-events-none flex flex-col justify-center z-10 col-span-12 lg:col-span-4"
            >
                <h2 className="text-5xl 2xl:text-7xl pb-4">{title}</h2>
                <p className="text-xl 2xl:text-2xl text-black-muted">{time}</p>
                <div className="text-xl 2xl:text-2xl text-black-muted flex items-center">Learn More <IoArrowForwardCircleOutline className="w-8 h-8" /></div>
            </div>
            <div className="work-thumbnail rounded-xl col-span-12 lg:col-span-8 relative"
                style={{
                    backgroundImage: `url(${thumbnail.url})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    paddingTop: '56.25%'
                }}
            >
                <Link href={`/work/${slug}`}>
                    <a>
                        <div className="
                            absolute top-0 left-0 w-full h-full
                            rounded-xl opacity-0 pointer-events-none bg-gradient-2
                            flex flex-col items-center justify-center
                        ">
                            <h1 className="z-10 text-white text-4xl flex items-center">Learn More<IoArrowForwardCircleOutline /></h1>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default Work;