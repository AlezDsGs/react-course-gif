import React from 'react'

function GifGridItem({ id, title, url }) {
    return (
        <div className='card animate__animated animate__fadeInUp'>
            <p>{title}</p>
            <img src={url} alt={title} />
        </div>

    )
}

export default GifGridItem