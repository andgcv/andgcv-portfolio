import React from 'react'
import styled from 'styled-components'

const GalleryWrapper = styled.div`
    min-width: 80vw;
    width: 80vw;
    min-height: 30vh;
    height: 40vh;
    margin-bottom: 7vh;
    background-color: ${props => props.theme.colors.lightSkyBlue}
`

const PhotoGallery = () => {
    return (
        <GalleryWrapper>

        </GalleryWrapper>
    )
}

export default PhotoGallery