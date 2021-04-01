import React from 'react'
import './imagelist.css'
import ImageCard from './ImageCard'

const ImageList = (props) => {
    const images = props.images.map((image) => {
        // return <img
        //     src={image.urls.regular}
        //     key={image.id}
        //     alt={image.description} />
        return <ImageCard key={image.id} image={image} />

    })
    return (
        <div className='image-list'>
            {images}
        </div>
    )
}

export default ImageList