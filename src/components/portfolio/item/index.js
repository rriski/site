import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FaGithub, FaLink } from 'react-icons/fa'
import ItemModal from 'components/portfolio/item/modal'
import { Wrapper, Figure, Image, Copy } from './item.css'
import { Title, A } from 'constants/styled.css'

const Item = (props) => {
  const { index, title, copy, image, link, github_url } = props
  const [open, setOpen] = useState(false)

  const modalProps = { open, setOpen, ...props }

  return (
    <Wrapper>
      <Figure>
        <div role="button" tabIndex={index} onClick={() => setOpen(true)}>
          <Image
            image={image ? image.childImageSharp.gatsbyImageData : {}}
            alt={title}
          />
        </div>
        <figcaption>
          <Title>
            <span href={link} target="_blank" rel="noreferrer noopener">
              {title}
            </span>
          </Title>
          {link && (
            <A
              margin={'0 5px'}
              href={link}
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLink />
            </A>
          )}
          {github_url && (
            <A
              margin={'0 5px'}
              href={github_url}
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaGithub />
            </A>
          )}
          <Copy>{copy} Click to learn more!</Copy>
        </figcaption>
      </Figure>
      <ItemModal {...modalProps} />
    </Wrapper>
  )
}

Item.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired,
  link: PropTypes.string,
  github_url: PropTypes.string,
}

export default Item
