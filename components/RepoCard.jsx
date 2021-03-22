import React from 'react';
import {FiExternalLink} from 'react-icons/fi';
import * as dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import gradients from '../util/Gradients';

function RepoCard({name, description, html_url: url, updated_at: updated, stargazers_count: stars, skeleton}) {

    dayjs.extend(relativeTime)

    const gradient = gradients[Math.floor(Math.random() * gradients.length)]
    console.log(gradient)

    if (skeleton) return (
        <div className="bg-white-muted p-4 h-52 flex flex-col">
            
        </div>
    )

    return (
        <div className="p-4 h-52 flex flex-col" style={{background: `linear-gradient(to bottom right, ${gradient[0]}, ${gradient[1]})`}}>
            <div className="flex justify-between text-2xl text-white">
                <h3>{name}</h3>
                <a href={url} target="_blank" rel="noopener"><FiExternalLink /></a>
            </div>
            <p className="text-white">{description}</p>
            <div className="mt-auto flex justify-between text-white">
                <span>{dayjs(new Date(updated)).fromNow()}</span>
                <span>{stars}🌟</span>
            </div>
        </div>
    );
}

export default RepoCard;