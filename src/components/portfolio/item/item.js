import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ItemModal from 'components/portfolio/item/modal'
import { Wrapper, Figure, Image, Copy } from './item.css'
import { Title, A } from 'constants/styled.css'

const Item = props => {
  const { title, copy, image } = props
  const [open, setOpen] = useState(false)

  const modalProps = { open, setOpen, ...props }
  const link = `https://${title}`

  return (
    <Wrapper>
      <Figure onClick={() => setOpen(true)}>
        <Image fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
        <figcaption>
          <Title>
            <A href={link} target="_blank">
              {title}
            </A>
          </Title>
          <Copy>{copy} Click to learn more!</Copy>
        </figcaption>
      </Figure>
      <ItemModal {...modalProps} />
    </Wrapper>
  )
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired,
}

export default Item
