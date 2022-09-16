import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Ul, Li } from './textcarousel.css'

let TEXT_TIMEOUT = 2000

const TextCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    let timeout = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % items.length)
    }, TEXT_TIMEOUT)
    return () => clearTimeout(timeout)
  })

  return (
    <Wrapper>
      <Ul>
        {items.map((item, i) => (
          <Li key={i} isVisible={currentIndex === i}>
            {item}
          </Li>
        ))}
      </Ul>
    </Wrapper>
  )
}

TextCarousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default TextCarousel
