import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ItemModal from 'components/portfolio/item/modal';
import { Wrapper, Figure, Image, Copy } from './item.css';
import { Title } from 'constants/styled.css';

export default class Item extends PureComponent {
  state = {
    open: false,
  };

  showModal = () => this.setState({ open: true });
  hideModal = () => this.setState({ open: false });

  render() {
    const { title, copy, image } = this.props;
    const { open } = this.state;
    const modalProps = { open, hideModal: this.hideModal, ...this.props };

    return (
      <Wrapper>
        <Figure onClick={this.showModal}>
          <Image fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
          <figcaption>
            <Title>{title}</Title>
            <Copy>{copy} Click to learn more!</Copy>
          </figcaption>
        </Figure>
        <ItemModal {...modalProps} />
      </Wrapper>
    );
  }
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired,
};
