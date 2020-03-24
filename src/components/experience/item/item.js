import React from 'react'
import PropTypes from 'prop-types'
import IO from 'components/io'
import { Wrapper, Li, Description } from './item.css'
import { Title } from 'constants/styled.css'

const Item = ({ title, roles, description }) => (
  <IO rootMargin="-50px">
    {({ hasBeenVisible }) => (
      <Wrapper isVisible={hasBeenVisible}>
        <Title>{title}</Title>
        <ul>
          {roles.map((role) => {
            return Object.keys(role).map((year, i) => {
              return role[year] ? (
                <Li key={i}>
                  {/* Year is preceded by an underscore. substr(1) removes it. */}
                  {year.substr(1)}: {role[year]}
                </Li>
              ) : null
            })
          })}
        </ul>
        <Description
          dangerouslySetInnerHTML={{
            __html: description.childMarkdownRemark.html,
          }}
        />
      </Wrapper>
    )}
  </IO>
)

Item.propTypes = {
  title: PropTypes.string.isRequired,
  roles: PropTypes.array.isRequired,
  description: PropTypes.object.isRequired,
}

export default Item
