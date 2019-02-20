import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/modal';
import { Description } from './modal.css';

export default class ItemModal extends PureComponent {
  render() {
    const { description } = this.props;

    return (
      <Modal {...this.props}>
        <Description
          dangerouslySetInnerHTML={{
            __html: description.childMarkdownRemark.html,
          }}
        />
      </Modal>
    );
  }
}

ItemModal.propTypes = {
  open: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.object,
  description: PropTypes.object,
};
