import React from 'react'
import PropTypes from 'prop-types'
import { Image } from './picture.css'

const Picture = ({ image }) => (
  <Image
    image={image ? image.childImageSharp.gatsbyImageData : {}}
    alt="It's me!"
  />
)

Picture.propTypes = {
  image: PropTypes.object.isRequired,
}

export default Picture
